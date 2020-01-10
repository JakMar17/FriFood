import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import { User } from "../../classes/User";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor(private friFoodPodatkiServices: FrifoodPodatkiService) {}

  public user: User;

  private getUserByEmail(): void {
    this.friFoodPodatkiServices.getuserByEmail("janez.novak@fri.uni-lj.si").then(
      (data) => {
        this.user = data;
      }
    )
  }

  private getUserById(): void {
    this.friFoodPodatkiServices.getUserById("5ded961514d31e5174a468bb").then(
      (data) => {
        this.user = data;
      }
    )
  }


  ngOnInit(): void {
    this.getUserByEmail();
  }


}

