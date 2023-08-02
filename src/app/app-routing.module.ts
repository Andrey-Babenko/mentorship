import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarsComponent } from './components/cars/cars.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { BidCreateComponent } from './components/bid-create/bid-create.component';
import { BidsComponent } from './components/bids/bids.component';

const routes: Routes = [
  {
    path: 'car',
    children: [{ path: 'create', component: CreateCarComponent }],
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
  {
    path: 'user',
    children: [{ path: 'create', component: UserCreateComponent }],
  },
  {
    path: 'bid',
    children: [{ path: 'create', component: BidCreateComponent }],
  },
  {
    path: 'bids',
    component: BidsComponent,
  },
  {
    path: '**',
    redirectTo: 'cars',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
