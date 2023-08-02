import { createFeatureSelector } from '@ngrx/store';

import { Car } from 'src/app/models/car.model';

export const selectCars = createFeatureSelector<ReadonlyArray<Car>>('cars');
