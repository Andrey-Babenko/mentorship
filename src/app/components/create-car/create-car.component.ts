import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CarModel } from 'src/app/models/car-model.model';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';
import { carsActions } from 'src/app/store/actions/cars.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { selectCarModels } from 'src/app/store/selectors/car-models.selectors';
import { CarModelsActions } from 'src/app/store/actions/cars-models.actions';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
})
export class CreateCarComponent {
  private store: Store = inject(Store<State>);
  private fb = inject(FormBuilder);
  // private carsService: CarsService = inject(CarsService);

  carModels$: Observable<ReadonlyArray<CarModel>>;
  // carsCollection: CollectionReference;

  carForm = this.fb.group({
    modelId: ['', Validators.required],
    carTypeCd: ['', Validators.required],
    modelYear: [null, Validators.required],
    colorCd: ['', Validators.required],
  });

  inProgress = false;

  constructor() {
    this.store.dispatch(CarModelsActions.loadCarModels());
    this.carModels$ = this.store.select(selectCarModels);
  }

  ngOnInit() {}

  createCar() {
    if (this.carForm.invalid) return;

    //this.inProgress = true;

    this.store.dispatch(
      carsActions.addCar({ car: this.carForm.value as Omit<Car, 'id'> })
    );
    // addDoc(this.carsCollection, this.carForm.value as Omit<Car, 'id'>)
    //   .then((_documentReference: DocumentReference) => {
    //     this.carForm.reset();
    //   })
    //   .finally(() => {
    //     this.inProgress = false;
    //   });
  }

  reset() {
    this.carForm.reset();
  }
}
