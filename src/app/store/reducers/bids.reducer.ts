import { createReducer, on } from '@ngrx/store';
import { Bid } from 'src/app/models/bid.model';
import { bidsApiActions } from '../actions/bids.actions';

export const initialState: Bid[] = [];

export const carsReducer = createReducer(
  initialState,
  on(bidsApiActions.bidsLoadedSuccess, (_state, { bids }) => bids),
  on(bidsApiActions.bidAddedSuccess, (state, { bid }) => [...state, bid]),
  on(bidsApiActions.bidDeleteSuccess, (state, { bidId }) =>
    state.filter((bid) => bid.id !== bidId)
  ),
  on(bidsApiActions.bidUpdatedSuccess, (state, { bid }) =>
    state.map((oldBid) => (oldBid.id === bid.id ? bid : oldBid))
  )
);
