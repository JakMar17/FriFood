import { Component, OnInit } from '@angular/core';
import {AvtentikacijaService} from "../../services/avtentikacija.service";

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css']
})
export class OgrodjeComponent implements OnInit {

  loggedIn: boolean;

  constructor(public authenticate: AvtentikacijaService, ) { }



  ngOnInit() {

    this.loggedIn = this.authenticate.isLoggedIn();

  }

}
