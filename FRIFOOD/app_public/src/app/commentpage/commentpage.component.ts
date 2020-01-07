import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  restaurant = {
    _id: "5debddcf5fc3683918ae71a6",
    name: "Restavracija 123",
    description: "dodaj opis restavracije",
    timeTable: [ "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h" ],
    idKomentarjev: "idZaKomentarje",

    front: "naslovna123.png"
  };

  user = {
    _id: "5debddcf5fasdasdasdasdasdasdc3683918ae71a6",
    name: "Restavracija 123",
    description: "dodaj opis restavracije",
    timeTable: [ "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h" ],
    idKomentarjev: "idZaKomentarje",

    front: "naslovna123.png"
  };

  restaurantId;

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = `./assets/javascripts/commentSuport.js`;
    this.renderer.appendChild(document.head, script);

    this.route.paramMap.subscribe(params => {
        this.restaurantId = params.get("id");
    });
  }


}
