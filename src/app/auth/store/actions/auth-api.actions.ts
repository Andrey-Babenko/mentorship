import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/models/user.model';

export const loginSuccess = createAction(
  '[Auth API] User Login Success',
  props<{ user: User }>()
);
export const loginFailure = createAction(
  '[Auth API] User Login Failure',
  props<{ error: any }>()
);
