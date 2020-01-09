import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {User} from "../../classes/User";
import {Restaurant} from "../../classes/Restaurant";
import {Comment} from "../../classes/Comment";

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private FrifoodPodatkiService: FrifoodPodatkiService) { }

  users: User[];

  restavracija: Restaurant;

  komentarji: Comment[];

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

        this.FrifoodPodatkiService.getRestaurantById(this.restaurantPathID).then(
          (data) => {
            console.log(data.timeTable);

            this.restavracija = data;
            console.log(this.restavracija.front)
          }
        );

        this.FrifoodPodatkiService.getCommentsByRestaurantId(this.restaurantPathID).then(
          (data) => {
            this.komentarji = data;
            console.log(this.komentarji);
          }
        );
    });
  }


}
