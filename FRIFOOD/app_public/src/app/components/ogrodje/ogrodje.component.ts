import { Component, OnInit } from '@angular/core';
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import { ZgodovinaService } from '../../services/zgodovina.service';

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css']
})
export class OgrodjeComponent implements OnInit {

  constructor(public authenticate: AvtentikacijaService, private zgodovinaService: ZgodovinaService) { }



  ngOnInit() {

  }

}
