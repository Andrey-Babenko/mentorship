import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersCollection = collection(this.firestore, 'users');

  getAll() {
    return collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  add(user: Omit<User, 'id'>) {
    return from(addDoc(this.usersCollection, user));
  }

  constructor(private firestore: Firestore) {}
}
