import { Component, OnInit } from '@angular/core';
import {FrifoodPodatkiService} from "../../../services/frifood-podatki.service";
import {User} from "../../../classes/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private frifoodPodatkiService: FrifoodPodatkiService, private router: Router) { }

  public users: User[];

  private getUsers(): void {
    this.frifoodPodatkiService.getUporabniki().then(
      (data) => {
        this.users = data;
      }
    )
  }

  private redirect(user: User): void {
    let url: string = '/admin/user/';
    this.router.navigate([url + user._id])
  }

  ngOnInit() {
    this.getUsers();
  }

}
