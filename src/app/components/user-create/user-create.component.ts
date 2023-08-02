import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { usersActions } from 'src/app/store/actions/users.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent {
  private store: Store = inject(Store<State>);
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    roleCd: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    isActive: [true, Validators.required],
  });

  inProgress = false;

  constructor() {}

  ngOnInit() {}

  createUser() {
    if (this.userForm.invalid) return;

    this.store.dispatch(
      usersActions.createUser({ user: this.userForm.value as Omit<User, 'id'> })
    );
  }

  reset() {
    this.userForm.reset();
  }
}
