import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/models/user.model';

export const authFeatureKey = 'auth';

export interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { user }) => ({
    ...state,
    user,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
  }))
);
