import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';

export const carsPageActions = createActionGroup({
  source: 'Cars Page',
  events: {
    Enter: emptyProps(),
  },
});

export const createCarPageActions = createActionGroup({
  source: 'Create Car Page',
  events: {
    Enter: emptyProps(),
    'Create Car Form Submmit': props<{ car: Omit<Car, 'id'> }>(),
    'Update Car': props<{ car: Car }>(),
    'Delete Car': props<{ carId: Car['id'] }>(),
  },
});

export const carsApiActions = createActionGroup({
  source: 'Cars API',
  events: {
    'Cars Loaded Success': props<{ cars: Car[] }>(),
    'Cars Loaded Failure': props<{ error: any }>(),
    'Car Added Success': props<{ car: Car }>(),
    'Car Added Failure': props<{ error: any }>(),
    'Car Updated Success': props<{ car: Car }>(),
    'Car Delete Success': props<{ carId: Car['id'] }>(),
  },
});
