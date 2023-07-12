import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load Users': emptyProps(),
    'Update User': props<{ user: User }>(),
    'Delete User': props<{ userId: number }>(),
  },
});

export const usersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Users Loaded Success': props<{ users: User[] }>(),
    'User Updated Success': props<{ user: User }>(),
    'User Delete Success': props<{ userId: number }>(),
  },
});
