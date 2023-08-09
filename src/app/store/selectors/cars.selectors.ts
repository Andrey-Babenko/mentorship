import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Car } from 'src/app/models/car.model';
import { selectCarModels } from './car-models.selectors';
import { CarModel } from 'src/app/models/car-model.model';

export const selectCars = createFeatureSelector<ReadonlyArray<Car>>('cars');

export const selectCarsWithCarModels = createSelector(
  selectCars,
  selectCarModels,
  (cars: ReadonlyArray<Car>, carModels: ReadonlyArray<CarModel>) => {
    return cars.map((car) => {
      const carModel = carModels.find((model) => model.id === car.modelId);
      return {
        ...car,
        modelFullName: `${carModel?.brandName} - ${carModel?.modelName}`,
      };
    });
  }
);
