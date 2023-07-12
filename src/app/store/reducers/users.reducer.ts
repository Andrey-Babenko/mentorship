import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { usersActions, usersApiActions } from '../actions/users.actions';

export const initialState: User[] = [];

export const usersReducer = createReducer(
  initialState,
  on(usersApiActions.usersLoadedSuccess, (_state, { users }) => users),
  on(usersApiActions.userDeleteSuccess, (state, { userId }) =>
    state.filter((user) => user.id !== userId)
  ),
  on(usersApiActions.userUpdatedSuccess, (state, { user }) =>
    state.map((oldUser) => (oldUser.id === user.id ? user : oldUser))
  )
);
