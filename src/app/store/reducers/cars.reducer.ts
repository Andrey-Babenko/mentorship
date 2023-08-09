import { createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';
import { carsApiActions } from '../actions/cars.actions';

export const initialState: Car[] = [];

export const carsReducer = createReducer(
  initialState,
  on(carsApiActions.carsLoadedSuccess, (_state, { cars }) => cars),
  on(carsApiActions.carAddedSuccess, (state, { car }) => [...state, car]),
  on(carsApiActions.carDeleteSuccess, (state, { carId }) =>
    state.filter((car) => car.id !== carId)
  ),
  on(carsApiActions.carUpdatedSuccess, (state, { car }) =>
    state.map((oldCar) => (oldCar.id === car.id ? car : oldCar))
  )
);
