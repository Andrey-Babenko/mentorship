import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { usersActions, usersApiActions } from '../actions/users.actions';
import { UsersService } from 'src/app/services/users.service';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      exhaustMap(() =>
        this.usersService.getAll().pipe(
          map((users) => usersApiActions.usersLoadedSuccess({ users })),
          catchError((error) =>
            of(usersApiActions.usersLoadedFailure({ error }))
          )
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.createUser),
      exhaustMap((actions) =>
        this.usersService.add(actions.user).pipe(
          map((_documentReference: DocumentReference) =>
            usersApiActions.userCreatedSuccess({ user: actions.user })
          ),
          catchError((error) =>
            of(usersApiActions.userCreatedFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
