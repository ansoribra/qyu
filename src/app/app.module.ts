import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//noinspection TypeScriptCheckImport
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule,MdIconRegistry} from '@angular2-material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "./home/header/header.component";
import { TrackScrollDirective } from "./home/directives/trackscroll.directive";
import { SearchpopupComponent } from './home/searchpopup/searchpopup.component';
import { SearchPipe } from './search.pipe';
import { AppRoutesModule, routingComponents } from './app.routes';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { SeemoreComponent } from './seemore/seemore.component';
import { MidrouteComponent } from './midroute/midroute.component';
import { SidecategoryComponent } from './sidecategory/sidecategory.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent,TrackScrollDirective, SearchpopupComponent, SearchPipe,routingComponents, SeemoreComponent, MidrouteComponent, SidecategoryComponent],
  imports: [BrowserModule, FormsModule, HttpModule, MdCardModule,MdButtonModule,MdIconModule,MdInputModule,Ng2PageScrollModule,AppRoutesModule],
  bootstrap: [AppComponent],
  providers: [MdIconRegistry]
})
export class AppModule { }
