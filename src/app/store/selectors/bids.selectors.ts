import { createFeatureSelector } from '@ngrx/store';

import { Bid } from 'src/app/models/bid.model';

export const selectBids = createFeatureSelector<ReadonlyArray<Bid>>('bids');
