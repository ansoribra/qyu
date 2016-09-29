import { Component, OnInit,Input } from '@angular/core';
import {HomeService} from "../home.service";
import {Home} from "../home";
import {SearchService} from "./search.service";
import 'rxjs/Rx';


@Component({
  selector: 'app-searchpopup',
  templateUrl: './searchpopup.component.html',
  styleUrls: ['./searchpopup.component.css'],
  providers: [SearchService]
})

export class SearchpopupComponent implements OnInit {

  ninjas =[
    {name:'anzary melah', belt:'red'},
    {name:'zae', belt:'black'},
    {name:'aleel', belt:'blue'},
    {name:'sonny', belt:'green'},
    {name:'dany', belt:'green'}
  ];

  ees='ee';

  @Input() sendvisi;
  visibility:string="hidden";
  searchMenuShrink : string = '';
  @Input() term:string;

  searchmenu(){
    this.visibility= "visible";
  }

  searchmenuhide(){
    this.visibility= "hidden";
  }

  ngOnInit() {
    this.visibility =this.sendvisi;
    this.getHomes();
  }

  onScrolled(yPos : number) {
    this.searchMenuShrink = yPos ? "searchmenu-shrink" : "";
  }

  errorMessage: string;
  services: Home[];
  constructor (private homeService: SearchService) {
  }

  getHomes() {
    this.homeService.getService()
        .subscribe(
            services => this.services = services.content,
            error =>  this.errorMessage = <any>error);
  }
}
