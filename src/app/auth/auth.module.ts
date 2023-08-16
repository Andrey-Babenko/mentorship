import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import * as fromAuth from "./store/reducers/auth.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
  ]
})
export class AuthModule { }
