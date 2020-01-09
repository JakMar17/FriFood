import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private frifoodPodatkiService: FrifoodPodatkiService) { }


  info: string;


  checkIfOkToLogin()
  {

    var userData = {
      email: (<HTMLInputElement>document.getElementById("email")).value,
      passwd: (<HTMLInputElement>document.getElementById("passwd")).value
    }


    this.info = "";

    if (userData.email.indexOf("@") >= 0 && userData.email.length >= 3)
    {
        if(userData.passwd.length>0){

            this.frifoodPodatkiService.getuserByEmail(userData.email).then(
              (data) => {
                //console.log(data);

                if(userData.passwd === data[0].passwd)
                  this.router.navigate([""]);
                else
                  this.info = "Uporabnik ne obstaja"
              }
            )
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
