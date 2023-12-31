import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CarModel } from 'src/app/models/car-model.model';

export const carModelsPageActions = createActionGroup({
  source: 'Car Models Page',
  events: {
    Enter: emptyProps(),
  },
});

export const createCarModelsPageActions = createActionGroup({
  source: 'Create Car Model Page',
  events: {
    'Create Car Model Form Submitted': props<{
      carModel: Omit<CarModel, 'id'>;
    }>(),
    'Update Car Model': props<{ carModel: CarModel }>(),
    'Delete Car Model': props<{ carModelId: CarModel['id'] }>(),
  },
});

export const carModelsApiActions = createActionGroup({
  source: 'Car Models API',
  events: {
    'Car Models Loaded Success': props<{ carModels: CarModel[] }>(),
    'Car Models Loaded Failure': props<{ error: any }>(),
    'Car Model Added Success': props<{ carModel: CarModel }>(),
    'Car Model Added Failure': props<{ error: any }>(),
    'Car Model Updated Success': props<{ carModel: CarModel }>(),
    'Car Model Delete Success': props<{ carModelId: CarModel['id'] }>(),
  },
});
