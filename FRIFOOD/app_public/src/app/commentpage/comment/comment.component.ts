import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  closeResult: string;


  constructor(private modalService: NgbModal) { }

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
      return  `with: ${reason}`;
    }
  }


    komentarji: Comment[] = [{
    _id: "5debddcf5fc3683918ae71a9",
    restaurant: "5debddcf5fc3683918ae71a6",
    comment: "Včasih meh, vedno pa super zaposleni!",
    author: "5debddcf5fc3683918ae71a5",
    date: "2019-12-07T17:13:51.533+00:00",
    time: "123123:57656",
    name: "name",
    surname: "asddas",
    modal: "exampleModalLabel",

    front: "naslovna123.png"
  },
      {
        _id: "5debddcf5fc36asdas83918ae71a9",
        restaurant: "5debddcf5fc3683918ae71a6",
        comment: "asdasdadsasd",
        author: "5debddcf5fc3683918ae71a5",
        date: "2019-12-07T17:13:51.533+00:00",
        time: "123123:57656",
        name: "name",
        surname: "asddas",
        modal: "exampleModalLabel",

        front: "naslovna123.png"
      }];

  test = {
    _id: "5debddcf5fc3683918ae71a9",
    restaurant: "5debddcf5fc3683918ae71a6",
    comment: "Včasih meh, vedno pa super zaposleni!",
    author: "5debddcf5fc3683918ae71a5",
    date: "2019-12-07T17:13:51.533+00:00",
    time: "123123:57656",
    name: "name",
    surname: "asddas",
    modal: "exampleModalLabel",

    front: "naslovna123.png"
  };

  ngOnInit() {
  }

}

export class Comment {
  _id: string;
  restaurant: string;
  comment: string;
  author: string;
  date: string;
  time: string;
  name: string;
  surname: string;
  modal: string;

  front: string;
}
