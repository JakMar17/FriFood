import { Component, OnInit } from '@angular/core';
import {FrifoodPodatkiService} from "../../../services/frifood-podatki.service";
import {User} from "../../../classes/User";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private frifoodPodatkiService: FrifoodPodatkiService) { }

  public users: User[];

  private getUsers(): void {
    this.frifoodPodatkiService.getUporabniki().then(
      (data) => {
        this.users = data;
      }
    )
  }

  ngOnInit() {
    this.getUsers();
  }

}
