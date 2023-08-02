import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load Users': emptyProps(),
    'Create User': props<{ user: Omit<User, 'id'> }>(),
    'Update User': props<{ user: User }>(),
    'Delete User': props<{ userId: User['id'] }>(),
  },
});

export const usersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Users Loaded Success': props<{ users: User[] }>(),
    'Users Loaded Failure': props<{ error: any }>(),
    'User Created Success': props<{ user: User }>(),
    'User Created Failure': props<{ error: any }>(),
    'User Updated Success': props<{ user: User }>(),
    'User Delete Success': props<{ userId: User['id'] }>(),
  },
});
