import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarsComponent } from './components/cars/cars.component';

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
    path: '**',
    redirectTo: 'cars',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
