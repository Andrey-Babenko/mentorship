import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsEffects } from './store/effects/cars.effects';
import { CarModelsEffects } from './store/effects/car-models.effects';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UsersEffects } from './store/effects/users.effects';
import { BidCreateComponent } from './components/bid-create/bid-create.component';
import { BidsEffects } from './store/effects/bids.effects';
import { BidsComponent } from './components/bids/bids.component';
import { ShowIfTodayDirective } from './directives/show-if-today.directive';
import { ShowIfNdaysLeftDirective } from './directives/show-if-ndays-left.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    CarsComponent,
    UserCreateComponent,
    BidCreateComponent,
    BidsComponent,
    ShowIfTodayDirective,
    ShowIfNdaysLeftDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    EffectsModule.forRoot([
      CarsEffects,
      CarModelsEffects,
      UsersEffects,
      BidsEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
