import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommentpageComponent } from './commentpage/commentpage.component';
import { RestaurantviewComponent } from './restaurantview/restaurantview.component';
import { CommentComponent } from './commentpage/comment/comment.component';
import {FormsModule} from "@angular/forms";
import {NgbModalBackdrop} from "@ng-bootstrap/ng-bootstrap/modal/modal-backdrop";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    OgrodjeComponent,
    FrontpageComponent,
    RegisterComponent,
    LoginComponent,
    CommentpageComponent,
    RestaurantviewComponent,
    CommentComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    NgbModalModule,
    RouterModule.forRoot([
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
        path: 'restaurantView',
        component: RestaurantviewComponent
      },
      {
        path: '',
        component: FrontpageComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
