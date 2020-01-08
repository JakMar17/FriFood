import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: "Jakob",
    surname: "Marušič",
    email: "jm8166@student.uni-lj.si"
  };

  constructor() { }

  ngOnInit() {
  }

}

