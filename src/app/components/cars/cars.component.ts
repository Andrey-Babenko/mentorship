import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';
import { carsActions } from 'src/app/store/actions/cars.actions';
import { State } from 'src/app/store/reducers';
import { selectCars } from 'src/app/store/selectors/cars.selectors';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  store: Store = inject(Store<State>);
  carsService: CarsService = inject(CarsService);

  cars$: Observable<ReadonlyArray<Car>>;

  constructor() {
    this.cars$ = this.store.select(selectCars);
    this.store.dispatch(carsActions.loadCars());
  }
}
