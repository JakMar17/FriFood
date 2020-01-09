import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }


  info: string;

  userRegistered(): boolean{

    return true;

  }

  checkIfOkToLogin()
  {
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var passwd =(<HTMLInputElement>document.getElementById("passwd")).value;

    this.info = "";

    if (email.indexOf("@") >= 0 && email.length >= 3)
    {
        if(passwd.length>0){

            if(this.userRegistered() == true)
              this.router.navigate([""]);
            else
              this.info = "Uporabnik ne obstaja"
        }
        else
          this.info = "Vnesi geslo"
    }
    else
      this.info = "Vnesi email"
  }


  ngOnInit() {
  }

}
