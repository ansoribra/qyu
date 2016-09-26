import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-searchpopup',
  templateUrl: './searchpopup.component.html',
  styleUrls: ['./searchpopup.component.css']
})

export class SearchpopupComponent implements OnInit {

  @Input() sendvisi;
  visibility:string="hidden";

  searchmenu(){
    this.visibility= "visible";
  }

  searchmenuhide(){
    this.visibility= "hidden";
  }

  constructor() { }

  ngOnInit() {
    this.visibility =this.sendvisi;
  }

}
