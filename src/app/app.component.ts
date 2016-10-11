import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue:string;
  visibility:string='visible';
  searchCalled(message:string):void{
    this.searchValue=message;
  }
}
