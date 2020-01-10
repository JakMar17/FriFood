import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Analytics} from "../../classes/Analytics";
import {FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

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
    };


    this.info = "";

    if (userData.email.indexOf("@") >= 0 && userData.email.length >= 3)
    {
        if(userData.passwd.length>0){

            this.frifoodPodatkiService.getuserByEmail(userData.email).then(
              (data) => {
                //console.log(data);

                //tole rabim tu
                // var passwd1 = userData.passwd;
                // var nakljucnaVrednost = data[0].nakljucnaVrednost;
                // var zgoscenaVrednost = getZgosceno(passwd1, nakljucnaVrednost, 1000, 64, 'sha512');
                //
                // in pol tule namest unga ifa tale
                // if(zgoscenaVrednost === data[0].zgoscenaVrednost)
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
    let analytics: Analytics;
    analytics = {
      _id: '',
      name: 'LoginPageViews',
      numAPICalls: 0,
    };
    this.frifoodPodatkiService.updateAnalyticsByName(analytics).then(r =>
      console.log(r)
    );
  }

}
