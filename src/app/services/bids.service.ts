import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

import { Bid } from 'src/app/models/bid.model';

@Injectable({
  providedIn: 'root',
})
export class BidsService {
  private bidsCollection = collection(this.firestore, 'bids');

  getAll() {
    return collectionData(this.bidsCollection, {
      idField: 'id',
    }) as Observable<Bid[]>;
  }

  add(bid: Omit<Bid, 'id'>) {
    return from(addDoc(this.bidsCollection, bid));
  }

  constructor(private firestore: Firestore) {}
}
