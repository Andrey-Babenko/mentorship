import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, authFeatureKey } from '../reducers/auth.reducer';

export const selectAuth = createFeatureSelector<State>(authFeatureKey);

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: State) => !!state.user
);
