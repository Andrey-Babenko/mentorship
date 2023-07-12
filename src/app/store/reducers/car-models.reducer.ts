import { createReducer, on } from '@ngrx/store';
import { CarModel } from 'src/app/models/car-model.model';
import {
  CarModelsActions,
  CarModelsApiActions,
} from '../actions/cars-models.actions';

export const initialState: CarModel[] = [];

export const carsReducer = createReducer(
  initialState,
  on(
    CarModelsApiActions.carModelsLoadedSuccess,
    (_state, { carModels }) => carModels
  ),
  on(CarModelsApiActions.carModelAddedSuccess, (state, { carModel }) => [
    ...state,
    carModel,
  ]),
  on(CarModelsApiActions.carModelDeleteSuccess, (state, { carModelId }) =>
    state.filter((carModel) => carModel.id !== carModelId)
  ),
  on(CarModelsApiActions.carModelUpdatedSuccess, (state, { carModel }) =>
    state.map((oldCarModel) =>
      oldCarModel.id === carModel.id ? carModel : oldCarModel
    )
  )
);
