import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

import { bidsActions } from 'src/app/store/actions/bids.actions';
import { selectCarModels } from 'src/app/store/selectors/car-models.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Bid } from 'src/app/models/bid.model';
import { CarModel } from 'src/app/models/car-model.model';
import { CarModelsActions } from 'src/app/store/actions/cars-models.actions';

@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.scss'],
})
export class BidCreateComponent {
  private store: Store = inject(Store<State>);
  private fb = inject(FormBuilder);

  carModels$: Observable<ReadonlyArray<CarModel>>;

  bidForm = this.fb.group({
    modelId: ['', Validators.required],
    date: [new Date().toISOString().split('T')[0], Validators.required],
    beginPrice: [null, Validators.required],
    finalPrice: [null, Validators.required],
  });

  inProgress = false;

  constructor() {
    this.store.dispatch(CarModelsActions.loadCarModels());
    this.carModels$ = this.store.select(selectCarModels);
  }

  createBid() {
    if (this.bidForm.invalid) return;

    this.store.dispatch(
      bidsActions.addBid({ bid: this.bidForm.value as Omit<Bid, 'id'> })
    );
  }

  reset() {
    this.bidForm.reset();
  }
}
