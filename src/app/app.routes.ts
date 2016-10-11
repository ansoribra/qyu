import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {SeemoreComponent} from "./seemore/seemore.component";

const APP_ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'seemore',component:SeemoreComponent }];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule { }

export const routingComponents = [SeemoreComponent,HomeComponent];