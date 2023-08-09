import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, concatMap } from 'rxjs/operators';

import {
  carModelsPageActions,
  carModelsApiActions,
  createCarModelsPageActions,
} from '../actions/cars-models.actions';
import { DocumentReference } from '@angular/fire/firestore';
import { CarModelsService } from 'src/app/services/car-models.service';
import { createCarPageActions, carsPageActions } from '../actions/cars.actions';
import { bidsPageActions, createBidPageActions } from '../actions/bids.actions';

@Injectable()
export class CarModelsEffects {
  loadCarModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        carModelsPageActions.enter,
        carsPageActions.enter,
        createCarPageActions.enter,
        createBidPageActions.enter,
        bidsPageActions.enter,
      ),
      exhaustMap(() =>
        this.carModelsService.getAll().pipe(
          map((carModels) =>
            carModelsApiActions.carModelsLoadedSuccess({ carModels })
          ),
          catchError((error) =>
            of(carModelsApiActions.carModelsLoadedFailure({ error }))
          )
        )
      )
    )
  );

  addCarModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCarModelsPageActions.createCarModelFormSubmitted),
      concatMap((actions) =>
        this.carModelsService.add(actions.carModel).pipe(
          map((documentReference: DocumentReference) =>
            carModelsApiActions.carModelAddedSuccess({
              carModel: { ...actions.carModel, id: documentReference.id },
            })
          ),
          catchError((error) =>
            of(carModelsApiActions.carModelAddedFailure({ error }))
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
