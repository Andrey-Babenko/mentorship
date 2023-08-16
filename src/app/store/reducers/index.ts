import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromUsers from './users.reducer';
import * as fromBids from './bids.reducer';
import * as fromCarModels from './car-models.reducer';
import * as fromCars from './cars.reducer';
import { authFeatureKey } from 'src/app/auth/store/reducers/auth.reducer'

import { Car } from 'src/app/models/car.model';
import { CarModel } from 'src/app/models/car-model.model';
import { Bid } from 'src/app/models/bid.model';
import { User } from 'src/app/models/user.model';

export interface State {
  cars: Car[];
  carModels: CarModel[];
  bids: Bid[];
  users: User[];
}

export const reducers: ActionReducerMap<State> = {
  cars: fromCars.carsReducer,
  carModels: fromCarModels.carsReducer,
  bids: fromBids.carsReducer,
  users: fromUsers.usersReducer,
};

function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: [
      { [authFeatureKey]: ['user']},
    ],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<State, any>> = [localStorageSyncReducer];
