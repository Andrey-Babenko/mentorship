import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Bid } from 'src/app/models/bid.model';

export const bidsActions = createActionGroup({
  source: 'Bids',
  events: {
    'Load Bids': emptyProps(),
    'Add Bid': props<{ bid: Bid }>(),
    'Update Bid': props<{ bid: Bid }>(),
    'Delete Bid': props<{ bidId: number }>(),
  },
});

export const bidsApiActions = createActionGroup({
  source: 'Bids API',
  events: {
    'Bids Loaded Success': props<{ bids: Bid[] }>(),
    'Bid Added Success': props<{ bid: Bid }>(),
    'Bid Updated Success': props<{ bid: Bid }>(),
    'Bid Delete Success': props<{ bidId: number }>(),
  },
});
