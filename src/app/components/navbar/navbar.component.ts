import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from 'src/app/store/reducers/index';
import { selectIsLoggedIn } from 'src/app/auth/store/selectors/auth.selectors';
import * as AuthActions from 'src/app/auth/store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private store: Store = inject(Store<State>);

  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  private currentUser = {
    id: '0f3AJyLzrZN3v5dCOfqT',
    firstName: 'Andrii',
    isActive: true,
    lastName: 'Babenko',
    roleCd: 'admin',
  };

  login() {
    this.store.dispatch(AuthActions.login({ user: this.currentUser }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
