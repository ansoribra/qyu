import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {SeemoreComponent} from "./seemore/seemore.component";
import {MidrouteComponent} from "./midroute/midroute.component";


const APP_ROUTES:Routes = [
    { path: '', component: MidrouteComponent},
    { path: 'home', component: MidrouteComponent },
    { path: 'seemore/:id',component:SeemoreComponent }];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule { }

export const routingComponents = [SeemoreComponent,HomeComponent];