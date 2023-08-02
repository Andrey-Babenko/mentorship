import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { bidsActions, bidsApiActions } from '../actions/bids.actions';
import { BidsService } from 'src/app/services/bids.service';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class BidsEffects {
  loadBids$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bidsActions.loadBids),
      exhaustMap(() =>
        this.bidsService.getAll().pipe(
          map((bids) => bidsApiActions.bidsLoadedSuccess({ bids })),
          catchError((error) => of(bidsApiActions.bidAddedFailure({ error })))
        )
      )
    )
  );

  addBid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bidsActions.addBid),
      exhaustMap((actions) =>
        this.bidsService.add(actions.bid).pipe(
          map((documentReference: DocumentReference) =>
            bidsApiActions.bidAddedSuccess({
              bid: { ...actions.bid, id: documentReference.id },
            })
          ),
          catchError((error) => of(bidsApiActions.bidAddedFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private bidsService: BidsService) {}
}
