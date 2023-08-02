import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Bid } from 'src/app/models/bid.model';
import { bidsActions } from 'src/app/store/actions/bids.actions';
import { State } from 'src/app/store/reducers';
import { selectBids } from 'src/app/store/selectors/bids.selectors';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss'],
})
export class BidsComponent {
  store: Store = inject(Store<State>);

  bids$: Observable<ReadonlyArray<Bid>>;

  constructor() {
    this.store.dispatch(bidsActions.loadBids());
    this.bids$ = this.store.select(selectBids);
  }
}
