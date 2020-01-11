import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: [
    './admin-panel.component.css'
  ]
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router) { }

  redirect(url: string): void {
    this.router.navigate([url]);
  }

  ngOnInit() {
  }
}



