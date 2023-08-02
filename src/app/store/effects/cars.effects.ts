import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { carsActions, carsApiActions } from '../actions/cars.actions';
import { CarsService } from 'src/app/services/cars.service';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class CarsEffects {
  loadCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(carsActions.loadCars),
      exhaustMap(() =>
        this.carsService.getAll().pipe(
          map((cars) => carsApiActions.carsLoadedSuccess({ cars })),
          catchError((error) => of(carsApiActions.carsLoadedFailure({ error })))
        )
      )
    )
  );

  addCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(carsActions.addCar),
      exhaustMap((actions) =>
        this.carsService.add(actions.car).pipe(
          map((documentReference: DocumentReference) =>
            carsApiActions.carAddedSuccess({ car: {...actions.car, id: documentReference.id} })
          ),
          catchError((error) => of(carsApiActions.carAddedFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private carsService: CarsService) {}
}
