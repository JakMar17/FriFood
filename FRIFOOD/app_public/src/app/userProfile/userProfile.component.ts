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

  constructor(private friFoodPodatkiServices: FrifoodPodatkiService) {}

  public user: User;

  private getUser(): void {
    this.friFoodPodatkiServices
      .getUser()
      .then(x => this.user = x);
  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user);
  }


}

