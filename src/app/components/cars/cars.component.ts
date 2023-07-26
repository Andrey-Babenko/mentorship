import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  firestore: Firestore = inject(Firestore);
  cars$: Observable<Car[]>;

  constructor() {
    const carsCollection = collection(this.firestore, 'cars');
    this.cars$ = collectionData(carsCollection, {
      idField: 'id',
    }) as Observable<Car[]>;
  }
}
