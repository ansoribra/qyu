import { Component } from '@angular/core';
import { TrackScrollDirective } from '../directives/trackscroll.directive';


@Component({
    selector:'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css','./header2.component.css'],
})
export class HeaderComponent {

    navbarShrink : string = '';
    navbarShrinkSecond : string = '';
    icoQyubixShrink : string = '';
    spaceShrink : string='';
    buttonBsShrink : string='';
    buttonAsShrink : string='';
    searchFieldShrink : string='';
    searchButtonShrink : string='';

    onScrolled(yPos : number) {
        this.navbarShrink = yPos ? "navbar-shrink" : "";
        this.navbarShrinkSecond = yPos ? "navbar-shrink-second" : "";
        this.icoQyubixShrink = yPos ? "ico-qyubix-shrink" : "";
        this.spaceShrink = yPos ? "space-shrink" : "";
        this.buttonBsShrink = yPos ? "button-bs-shrink" : "";
        this.buttonAsShrink = yPos ? "button-as-shrink" : "";
        this.searchFieldShrink = yPos ? "search-field-shrink" : "";
        this.searchButtonShrink = yPos ? "search-button-shrink" : "";
    }

    visibility:string="hidden";

    searchmenu(){
        this.visibility= "visible";
    }

    searchmenuhide(){
        this.visibility= "hidden";
    }
}