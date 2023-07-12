import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';

export const carsActions = createActionGroup({
    source: 'Cars',
    events: {
        'Load Cars': emptyProps(),
        'Add Car': props<{car: Car}>(),
        'Update Car': props<{car: Car}>(),
        'Delete Car': props<{carId: number}>(),
    }
})

export const carsApiActions = createActionGroup({
    source: 'Cars API',
    events: {
        'Cars Loaded Success': props<{cars: Car[]}>(),
        'Car Added Success': props<{car: Car}>(),
        'Car Updated Success': props<{car: Car}>(),
        'Car Delete Success': props<{carId: number}>(),
    }
})
