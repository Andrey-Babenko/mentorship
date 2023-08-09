import { createReducer, on } from '@ngrx/store';
import { CarModel } from 'src/app/models/car-model.model';
import { carModelsApiActions } from '../actions/cars-models.actions';

export const initialState: CarModel[] = [];

export const carsReducer = createReducer(
  initialState,
  on(
    carModelsApiActions.carModelsLoadedSuccess,
    (_state, { carModels }) => carModels
  ),
  on(carModelsApiActions.carModelAddedSuccess, (state, { carModel }) => [
    ...state,
    carModel,
  ]),
  on(carModelsApiActions.carModelDeleteSuccess, (state, { carModelId }) =>
    state.filter((carModel) => carModel.id !== carModelId)
  ),
  on(carModelsApiActions.carModelUpdatedSuccess, (state, { carModel }) =>
    state.map((oldCarModel) =>
      oldCarModel.id === carModel.id ? carModel : oldCarModel
    )
  )
);
