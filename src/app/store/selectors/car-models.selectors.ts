import { createFeatureSelector } from '@ngrx/store';

import { CarModel } from 'src/app/models/car-model.model';

export const selectCarModels =
  createFeatureSelector<ReadonlyArray<CarModel>>('carModels');
