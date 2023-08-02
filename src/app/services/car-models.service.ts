import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

import { CarModel } from 'src/app/models/car-model.model';

@Injectable({
  providedIn: 'root',
})
export class CarModelsService {
  private carModelsCollection = collection(this.firestore, 'models');

  getAll() {
    return collectionData(this.carModelsCollection, {
      idField: 'id',
    }) as Observable<CarModel[]>;
  }

  add(carModel: Omit<CarModel, 'id'>) {
    return from(addDoc(this.carModelsCollection, carModel));
  }

  constructor(private firestore: Firestore) {}
}
