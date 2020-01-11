import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {User} from "../../classes/User";
import {Analytics} from "../../classes/Analytics";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private frifoodPodatkiService: FrifoodPodatkiService) { }

  info: string;

  registriraj(newUser: any)
  {
    this.frifoodPodatkiService.dodajuporabnika(newUser).then(
      (data) => {
        console.log(data.name);
        this.router.navigate(["/login"]);

      }
    );
  }

  preveriRegistracijo(){


    let newUser = {
      name: (<HTMLInputElement>document.getElementById("name")).value,
      surname: (<HTMLInputElement>document.getElementById("surname")).value,
      email:(<HTMLInputElement>document.getElementById("email")).value,
      passwd1: (<HTMLInputElement>document.getElementById("passwd1")).value,
      passwd2: (<HTMLInputElement>document.getElementById("passwd2")).value
    };

    this.info = "";

    if(newUser.name.length > 0)
      if(newUser.surname.length > 0)
        if (newUser.email.indexOf("@") >= 0 && newUser.email.length >= 3)
          if(newUser.passwd1.length>0 && newUser.passwd1==newUser.passwd2)
          {
            this.registriraj(newUser);
          }
          else
            this.info = "Napacno geslo"
        else
          this.info = "Napacen email"
      else
        this.info = "Vnesi primek"
    else
      this.info = "Vnesi ime"

  }

  ngOnInit() {
    let analytics: Analytics;
    analytics = {
      _id: '',
      name: 'RegisterPageViews',
      numAPICalls: 0,
    };
    this.frifoodPodatkiService.updateAnalyticsByName(analytics).then(r =>
      console.log(r)
    );
  }

}