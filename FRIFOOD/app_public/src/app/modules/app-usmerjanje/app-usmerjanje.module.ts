import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FrontpageComponent } from '../../components/frontpage/frontpage.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { CommentpageComponent } from '../../components/commentpage/commentpage.component';
import { RestaurantviewComponent } from '../../components/restaurantview/restaurantview.component';


const poti: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'commentPage/:id',
    component: CommentpageComponent
  },
  {
    path: 'restaurantView/:id',
    component: RestaurantviewComponent
  },
  {
    path: '',
    component: FrontpageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(poti)
  ],
  exports: [RouterModule]
})
export class AppUsmerjanjeModule { }
