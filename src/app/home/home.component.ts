import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {Home} from "./home";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  homes: Home[];
  constructor (private homeService: HomeService) {
  }

  ngOnInit() { this.getHomes(); }

  getHomes() {
    this.homeService.getHomes()
        .subscribe(
            homes => this.homes = homes.content,
            error =>  this.errorMessage = <any>error);
  }
}
