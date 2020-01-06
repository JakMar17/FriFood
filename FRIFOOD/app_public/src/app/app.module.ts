import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OgrodjeComponent,
    FrontpageComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
        path: '',
        component: FrontpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
