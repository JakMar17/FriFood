import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../classes/User";
import {FrifoodPodatkiService} from "../../../../services/frifood-podatki.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private frifoodService: FrifoodPodatkiService, private router: ActivatedRoute, private r: Router) {
    this.getUserById();
  }

  private id: string;
  private user: User;
  private selected: string;
  private notSelected: string;
  private opozorilo:string;

  async getUserById(): Promise<any> {
    await this.frifoodService.getUserById(
      this.router.snapshot.paramMap.get("id")
    ).then(
      (data) => {
        this.user = data;
        if(this.user.admin) {
          this.selected = "Administrator";
          this.notSelected = "Običajen uporabnik";
        } else {
          this.selected = "Običajen uporabnik";
          this.notSelected = "Administrator";
        }
      }
    )
  }


  private updateUser(user:User): void {

    let typeOfUser :string = document.getElementById('type').value;
    if (typeOfUser === "Administrator")
      user.admin = true;
    else
      user.admin = false;

    this.r.navigate(["/admin/users"]);
  }

  ngOnInit(): void {
  }

}
