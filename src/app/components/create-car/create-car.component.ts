import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';

import { CarModel } from 'src/app/models/car-model.model';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
})
export class CreateCarComponent {
  private fb = inject(FormBuilder);
  firestore: Firestore = inject(Firestore);

  carModels$: Observable<CarModel[]>;
  carModelsCollection: CollectionReference;
  carsCollection: CollectionReference;

  carForm = this.fb.nonNullable.group({
    modelId: ['', Validators.required],
    carTypeCd: ['', Validators.required],
    modelYear: [null, Validators.required],
    colorCd: ['', Validators.required],
  });

  inProgress = false;

  constructor() {
    this.carModelsCollection = collection(this.firestore, 'models');
    this.carsCollection = collection(this.firestore, 'cars');

    this.carModels$ = collectionData(this.carModelsCollection, {
      idField: 'id',
    }) as Observable<CarModel[]>;
  }

  ngOnInit() {}

  createCar() {
    if (this.carForm.invalid) return;

    this.inProgress = true;
    addDoc(this.carsCollection, this.carForm.value)
      .then((_documentReference: DocumentReference) => {
        this.carForm.reset();
      })
      .finally(() => {
        this.inProgress = false;
      });
  }

  reset() {
    this.carForm.reset();
  }
}
