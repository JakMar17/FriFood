import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

    comments: [{
    _id: "5debddcf5fc3683918ae71a9",
    restaurant: "5debddcf5fc3683918ae71a6",
    comment: "Včasih meh, vedno pa super zaposleni!",
    author: "5debddcf5fc3683918ae71a5",
    date: "2019-12-07T17:13:51.533+00:00",
    time: "123123:57656",
    name: "name",
    surname: "asddas",

    front: "naslovna123.png"
  }]

  ngOnInit() {
  }

}

export class Comment {
  _id: string;
  restaurant: string;
  comment: string;
  author: string;
  date: string;

  front: string;
}
