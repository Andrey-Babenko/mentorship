import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

import { Car } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsCollection = collection(this.firestore, 'cars');

  getAll() {
    return collectionData(this.carsCollection, {
      idField: 'id',
    }) as Observable<Car[]>;
  }

  add(car: Omit<Car, 'id'>) {
    return from(addDoc(this.carsCollection, car));
  }

  constructor(private firestore: Firestore) { }
}
