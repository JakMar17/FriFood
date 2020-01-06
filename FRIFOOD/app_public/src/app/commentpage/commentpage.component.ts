import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {

  constructor() { }

  restaurant = {
    _id: "5debddcf5fc3683918ae71a6",
    name: "Restavracija 123",
    description: "dodaj opis restavracije",
    timeTable: [ "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h" ],
    idKomentarjev: "idZaKomentarje",

    front: "naslovna123.png"
  };


  comments = {
    _id: "5debddcf5fc3683918ae71a9",
    restaurant: "5debddcf5fc3683918ae71a6",
    comment: "Včasih meh, vedno pa super zaposleni!",
    author: "5debddcf5fc3683918ae71a5",
    date: "2019-12-07T17:13:51.533+00:00",

    front: "naslovna123.png"
  }

  ngOnInit() {
  }

}
