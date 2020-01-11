import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// @ts-ignore
import { Comment } from "../../../classes/Comment";
import { FrifoodPodatkiService} from "../../../services/frifood-podatki.service";
import {User} from "../../../classes/User";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  closeResult: string;

  obrazecNapaka: string;


  constructor(private modalService: NgbModal, private FrifoodPodatkiService: FrifoodPodatkiService) {
  }


  public deleteComment():void {
    let komentar = {
      komentarID: this.komentar._id
    };
    this.FrifoodPodatkiService.deleteComment(komentar).then(komentar => {
      console.log("Komentar izbrisan", komentar);
      this.komentar = undefined;
    });
  }

  public updateComment(data: any):void {

    if(data.newCommentText.length > 0) {
      let komentar = {
        komentarID: this.komentar._id,
        newCommentText: data.newCommentText
      };
      this.FrifoodPodatkiService.updateComment(komentar).then(rez => {
        console.log("Komentar posodobljen", rez);
        this.komentar.comment = komentar.newCommentText;
      });
      this.modalService.dismissAll();
    }
  }


  @Input() komentar: Comment;

  ngOnInit() {

  }
}
