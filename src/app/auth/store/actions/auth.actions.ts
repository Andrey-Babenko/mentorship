import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/models/user.model';

export const login = createAction(
  '[Nav Bar] Login Button Click',
  props<{ user: User }>()
);

export const logout = createAction('[Nav Bar] Logout Button Click');
