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
import { GetDateFromDBFormatPipe } from './pipes/change-date.pipe';
import { GetTimeFromDBFormatPipe } from './pipes/get-time-from-dbformat.pipe';
import { RestaurantaddComponent } from './components/restaurantadd/restaurantadd.component';
import { ZvezdiceComponent } from './components/zvezdice/zvezdice.component';
import {UserProfileComponent} from "./components/userProfile/userProfile.component";
import { FileUploadModule } from 'ng2-file-upload';
import { RestaurantlistComponent } from './components/restaurantlist/restaurantlist.component';
import {AdminLocationsComponent} from "./components/adminDashboard/locations/adminLocations.component";
import { AdminPanelComponent } from './components/adminDashboard/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    OgrodjeComponent,
    FrontpageComponent,
    RegisterComponent,
    LoginComponent,
    CommentpageComponent,
    RestaurantviewComponent,
    CommentComponent,
    UserProfileComponent,
    AdminLocationsComponent,
    GetDateFromDBFormatPipe,
    GetTimeFromDBFormatPipe,
    RestaurantaddComponent,
    ZvezdiceComponent,
    RestaurantlistComponent,
    AdminPanelComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppUsmerjanjeModule,
    NgbModule,
    NgbModalModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
