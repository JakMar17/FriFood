import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {Router} from "@angular/router";
import { User } from "../../classes/User";
import {AvtentikacijaService} from "../../services/avtentikacija.service";

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: [
    './userProfile.component.css'
  ]
})

export class UserProfileComponent implements OnInit {

  constructor(
    private friFoodPodatkiServices: FrifoodPodatkiService,
    private router: Router,
    private autenticate: AvtentikacijaService
  ) {}

  private mail: string = this.autenticate.decodeToken().email;
  private user_id: string = this.autenticate.decodeToken()._id;
  public user: User;

  public activities: any;

  private getUserByEmail(): void {
    this.user = this.autenticate.decodeToken();
    this.getComments();
  }

  private getUserById(): void {
    this.friFoodPodatkiServices.getUserById(this.user_id).then(
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

  redirect(url: string): void {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.getUserByEmail();
  }


}

