import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Bid } from 'src/app/models/bid.model';

export const bidsPageActions = createActionGroup({
  source: 'Bids Page',
  events: {
    Enter: emptyProps(),
  },
});

export const createBidPageActions = createActionGroup({
  source: 'Create Bid Page',
  events: {
    Enter: emptyProps(),
    'Create Bid Form Submitted': props<{ bid: Omit<Bid, 'id'> }>(),
    'Update Bid': props<{ bid: Bid }>(),
    'Delete Bid': props<{ bidId: Bid['id'] }>(),
  },
});

export const bidsApiActions = createActionGroup({
  source: 'Bids API',
  events: {
    'Bids Loaded Success': props<{ bids: Bid[] }>(),
    'Bids Loaded Failure': props<{ error: any }>(),
    'Bid Added Success': props<{ bid: Bid }>(),
    'Bid Added Failure': props<{ error: any }>(),
    'Bid Updated Success': props<{ bid: Bid }>(),
    'Bid Delete Success': props<{ bidId: Bid['id'] }>(),
  },
});
