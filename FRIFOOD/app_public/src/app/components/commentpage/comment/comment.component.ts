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

  open(content) {
    this.modalService.open(content).result.then((result) => {

      console.log("odprto ->", result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log("result ->", reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  public updateComment():void {

    this.obrazecNapaka = undefined;

    let komentarText = (<HTMLInputElement>document.getElementById(this.komentar._id+'textKometarja')).value;

    if(komentarText.length > 0) {
      let komentar = {
        komentarID: this.komentar._id,
        newCommentText: komentarText
      };
      this.FrifoodPodatkiService.updateComment(komentar).then(rez => {
        console.log("Komentar posodobljen", rez);
        this.komentar.comment = komentar.newCommentText;
      });
      this.modalService.dismissAll();
    }
    else
      this.obrazecNapaka = "Komwntar ne more ostati prazen !!!"
  }


  @Input() komentar: Comment;

  ngOnInit() {

  }
}
