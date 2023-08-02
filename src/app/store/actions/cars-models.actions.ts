import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CarModel } from 'src/app/models/car-model.model';

export const CarModelsActions = createActionGroup({
  source: 'Car Models',
  events: {
    'Load Car Models': emptyProps(),
    'Add Car Model': props<{ carModel: CarModel }>(),
    'Update Car Model': props<{ carModel: CarModel }>(),
    'Delete Car Model': props<{ carModelId: string }>(),
  },
});

export const CarModelsApiActions = createActionGroup({
  source: 'Car Models API',
  events: {
    'Car Models Loaded Success': props<{ carModels: CarModel[] }>(),
    'Car Models Loaded Failure': props<{ error: any }>(),
    'Car Model Added Success': props<{ carModel: CarModel }>(),
    'Car Model Added Failure': props<{ error: any }>(),
    'Car Model Updated Success': props<{ carModel: CarModel }>(),
    'Car Model Delete Success': props<{ carModelId: string }>(),
  },
});
