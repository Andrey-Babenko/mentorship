import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, concatMap } from 'rxjs/operators';

import {
  usersPageActions,
  usersApiActions,
  createUserPageActions,
} from '../actions/users.actions';
import { UsersService } from 'src/app/services/users.service';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersPageActions.enter),
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
      ofType(createUserPageActions.createUserFormSubmitted),
      concatMap((actions) =>
        this.usersService.add(actions.user).pipe(
          map((documentReference: DocumentReference) =>
            usersApiActions.userCreatedSuccess({
              user: { ...actions.user, id: documentReference.id },
            })
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
