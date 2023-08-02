import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import {
  CarModelsActions,
  CarModelsApiActions,
} from '../actions/cars-models.actions';
import { DocumentReference } from '@angular/fire/firestore';
import { CarModelsService } from 'src/app/services/car-models.service';

@Injectable()
export class CarModelsEffects {
  loadCarModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarModelsActions.loadCarModels),
      exhaustMap(() =>
        this.carModelsService.getAll().pipe(
          map((carModels) =>
            CarModelsApiActions.carModelsLoadedSuccess({ carModels })
          ),
          catchError((error) =>
            of(CarModelsApiActions.carModelsLoadedFailure({ error }))
          )
        )
      )
    )
  );

  addCarModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarModelsActions.addCarModel),
      exhaustMap((actions) =>
        this.carModelsService.add(actions.carModel).pipe(
          map((_documentReference: DocumentReference) =>
            CarModelsApiActions.carModelAddedSuccess({
              carModel: actions.carModel,
            })
          ),
          catchError((error) =>
            of(CarModelsApiActions.carModelAddedFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private carModelsService: CarModelsService
  ) {}
}
