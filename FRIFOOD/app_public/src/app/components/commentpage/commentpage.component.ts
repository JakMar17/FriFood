import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {User} from "../../classes/User";

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private FrifoodPodatkiService: FrifoodPodatkiService) { }

  users: User[];

  restaurant = {
    _id: "5debddcf5fc3683918ae71a6",
    name: "Restavracija 123",
    description: "dodaj opis restavracije",
    timeTable: [ "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h", "7h - 15h" ],
    idKomentarjev: "idZaKomentarje",

    front: "naslovna123.png"
  };

  restaurantPathID;

  ngOnInit() {

    /*let x: User[];
    x = this.inicializirajUporabnike();
    console.log("XXXXX->",x[0]._id);*/
    this.FrifoodPodatkiService.getUporabniki().then(
       (data) => {
        console.log(data[0]);

        data.forEach( x => {
          console.log(x.name);
        });

        this.users = data;
        console.log(this.users[0].name)
      }
    );


    const script = this.renderer.createElement('script');
    script.src = `./assets/javascripts/commentSuport.js`;
    this.renderer.appendChild(document.head, script);

    this.route.paramMap.subscribe(params => {
        this.restaurantPathID = params.get("id");
    });
  }


}
