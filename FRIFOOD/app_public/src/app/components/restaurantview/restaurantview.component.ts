import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantview',
  templateUrl: './restaurantview.component.html',
  styleUrls: ['./restaurantview.component.css']
})
export class RestaurantviewComponent implements OnInit {

  daysOfWork = {
    week: ["PON", "TOR", "SRE", "ČET", "PET", "SOB", "NED"]
  }
  restaurant = {
    _id: "5debddcf5fc3683918ae71a6",
    name: "Restavracija 123",
    description: "dodaj opis restavracije",
    timeTable: [ "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h" ],
    idKomentarjev: "idZaKomentarje",

    front: "naslovna123.png"
  };

  constructor() { }

  ngOnInit() {
  }

}
