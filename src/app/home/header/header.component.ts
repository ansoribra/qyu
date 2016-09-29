import { Component,Output,EventEmitter } from '@angular/core';
import { TrackScrollDirective } from '../directives/trackscroll.directive';
import {SearchpopupComponent} from "../searchpopup/searchpopup.component";

@Component({
    selector:'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css','./header2.component.css'],
})
export class HeaderComponent {
    term:string;
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

    @Output() myEvent = new EventEmitter();
    showmenu(){
        this.myEvent.emit(null);
    }

    @Output() searchemit: EventEmitter<string> = new EventEmitter<string>();
    onChange($event){
        this.searchemit.emit(this.term);
    }
}