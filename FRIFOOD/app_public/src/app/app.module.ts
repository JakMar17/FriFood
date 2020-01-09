import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppUsmerjanjeModule } from './modules/app-usmerjanje/app-usmerjanje.module';

import { AppComponent } from './app.component';
import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CommentpageComponent } from './components/commentpage/commentpage.component';
import { RestaurantviewComponent } from './components/restaurantview/restaurantview.component';
import { CommentComponent } from './components/commentpage/comment/comment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModalBackdrop} from "@ng-bootstrap/ng-bootstrap/modal/modal-backdrop";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppUsmerjanjeModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
