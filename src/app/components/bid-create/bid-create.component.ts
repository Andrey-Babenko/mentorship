import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

import { createBidPageActions } from 'src/app/store/actions/bids.actions';
import { selectCarModels } from 'src/app/store/selectors/car-models.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Bid } from 'src/app/models/bid.model';
import { CarModel } from 'src/app/models/car-model.model';
import { dateValidator } from 'src/app/shared/date.validator';

@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.scss'],
})
export class BidCreateComponent {
  private store: Store = inject(Store<State>);
  private fb = inject(FormBuilder);
  todayDate = new Date();
  tomorrowDate = new Date(new Date().setDate(this.todayDate.getDate() + 1));

  carModels$: Observable<ReadonlyArray<CarModel>>;

  bidForm = this.fb.group({
    modelId: ['', Validators.required],
    date: [
      this.tomorrowDate.toISOString().split('T')[0],
      [
        Validators.required,
        dateValidator({ from: this.tomorrowDate.toISOString().split('T')[0] }),
      ],
    ],
    beginPrice: [null, Validators.required],
    finalPrice: [null, Validators.required],
  });

  inProgress = false;

  get date() {
    return this.bidForm.get('date');
  }

  constructor() {
    this.store.dispatch(createBidPageActions.enter());
    this.carModels$ = this.store.select(selectCarModels);
  }

  createBid() {
    if (this.bidForm.invalid) return;

    this.store.dispatch(
      createBidPageActions.createBidFormSubmitted({
        bid: this.bidForm.value as Omit<Bid, 'id'>,
      })
    );
  }

  reset() {
    this.bidForm.reset();
  }
}
