import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Restaurant} from "../../classes/Restaurant";
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {ActivatedRoute} from "@angular/router";
import {KeyValue} from "@angular/common";


@Component({
  selector: 'app-restaurantview',
  templateUrl: './restaurantview.component.html',
  styleUrls: ['./restaurantview.component.css']
})
export class RestaurantviewComponent implements OnInit {

  daysOfWork = {
    week: ["PON", "TOR", "SRE", "ČET", "PET", "SOB", "NED"]
  };

  restavracija: Restaurant;

  restaurantPathID: string;

  constructor(private FrifoodPodatkiService: FrifoodPodatkiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.restaurantPathID = params.get("id");
      //5debddcf5fc3683918ae71a6
      this.FrifoodPodatkiService.getRestaurantById(this.restaurantPathID).then(
        (data) => {
          console.log(data.timeTable);

          this.restavracija = data;
          console.log(this.restavracija.front)
        }
      );

    });

  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
