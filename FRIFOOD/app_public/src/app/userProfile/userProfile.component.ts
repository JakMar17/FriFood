import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { FrifoodPodatkiService} from "../../../frifood-podatki.service";
import { User } from "../classes/User";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private friFoodPodatkiService: FrifoodPodatkiService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("ja ma nekje tukaj pa sem");
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: ParamMap) => {
    //       return this.friFoodPodatkiService.getUser();
    //     })
    //   )
    //   .subscribe((user: User) => {
    //     this.user = user;
    //     this.activeUser.name = user.name;
    //     this.activeUser.surname = user.surname;
    //     this.activeUser.email = user.email;
    //
    //     user.name = "XXX"
    //   })

    this.user.name = "xxx";
  }

}

