import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';

export const carsActions = createActionGroup({
  source: 'Cars',
  events: {
    'Load Cars': emptyProps(),
    'Add Car': props<{ car: Omit<Car, 'id'> }>(),
    'Update Car': props<{ car: Car }>(),
    'Delete Car': props<{ carId: string }>(),
  },
});

export const carsApiActions = createActionGroup({
  source: 'Cars API',
  events: {
    'Cars Loaded Success': props<{ cars: Car[] }>(),
    'Cars Loaded Failure': props<{ error: any }>(),
    'Car Added Success': props<{ car: Omit<Car, 'id'> }>(),
    'Car Added Failure': props<{ error: any }>(),
    'Car Updated Success': props<{ car: Car }>(),
    'Car Delete Success': props<{ carId: string }>(),
  },
});
