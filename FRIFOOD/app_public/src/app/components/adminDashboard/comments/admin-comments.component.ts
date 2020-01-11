import { Component, OnInit } from '@angular/core';
import {FrifoodPodatkiService} from "../../../services/frifood-podatki.service";
import {User} from "../../../classes/User";
import {Comment} from "../../../classes/Comment";

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css']
})
export class AdminCommentsComponent implements OnInit {

  constructor(private frifoodPodatkiServices: FrifoodPodatkiService) { }

  public comments: Comment[];

  private getComments(): void {
    this.frifoodPodatkiServices.getComments().then(
      (data) => {
        this.comments = data;
        console.log(this.comments);
      }
    )
  }

  ngOnInit() {
    this.getComments();
  }

}
