import { Component, OnInit } from '@angular/core';
import {FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import { User } from "../../classes/User";

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor(private friFoodPodatkiServices: FrifoodPodatkiService) {}

  private mail: string = "janez.novak@fri.uni-lj.si";
  public user: User;

  public activities: any;

  private getUserByEmail(): void {
    this.friFoodPodatkiServices.getuserByEmail(this.mail).then(
      (data) => {
        this.user = data;
        this.getComments();
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

  private getComments(): void {
    this.friFoodPodatkiServices.getCommentsByUser(this.user._id).then(
      (data) => {
        this.activities = data;
      }
    )
  }

  ngOnInit(): void {
    this.getUserByEmail();
  }


}

