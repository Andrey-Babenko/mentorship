import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Bid } from 'src/app/models/bid.model';
import { CarModel } from 'src/app/models/car-model.model';
import { selectCarModels } from './car-models.selectors';

export const selectBids = createFeatureSelector<ReadonlyArray<Bid>>('bids');

export const selectBidsWithCarModels = createSelector(
  selectBids,
  selectCarModels,
  (bids: ReadonlyArray<Bid>, carModels: ReadonlyArray<CarModel>) => {
    return bids.map((bid) => {
      const carModel = carModels.find((model) => model.id === bid.modelId);

      return {
        ...bid,
        modelFullName: `${carModel?.brandName} - ${carModel?.modelName}`,
      };
    });
  }
);
