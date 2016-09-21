import { Component } from '@angular/core';
import { TrackScrollDirective } from '../directives/trackscroll.directive';


@Component({
    selector:'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
    navbarShrink : string = '';
    listViewShrink : string = '';
    icoQyubixShrink : string = '';
    spaceShrink : string='';
    buttonCsShrink : string='';

    onScrolled(yPos : number) {
        this.navbarShrink = yPos ? "navbar-shrink" : "";
        this.listViewShrink = yPos ? "list-view-shrink" : "";
        this.icoQyubixShrink = yPos ? "ico-qyubix-shrink" : "";
        this.spaceShrink = yPos ? "space-shrink" : "";
        this.buttonCsShrink = yPos ? "button-cs-shrink" : "";
    }
}