import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {SeemoreComponent} from "./seemore/seemore.component";
import {MidrouteComponent} from "./midroute/midroute.component";
import {DetailprodComponent} from "./detailprod/detailprod.component";
import {SearchresultComponent} from "./searchresult/searchresult.component";
import {SellerareaComponent} from "./sellerarea/sellerarea.component";
import {AuthGuard} from "./common/auth.guard";
import { AUTH_PROVIDERS } from 'angular2-jwt';


const APP_ROUTES:Routes = [
    { path: '', component: MidrouteComponent},
    { path: 'home', component: MidrouteComponent },
    { path: 'seemore/:id',component:SeemoreComponent },
    { path: 'searchresult/:name',component:SearchresultComponent },
    { path: 'sellerarea',component:SellerareaComponent, canActivate: [AuthGuard] },
    { path: 'detailprod/:id', component: DetailprodComponent }];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    providers:[AuthGuard, ...AUTH_PROVIDERS]
})
export class AppRoutesModule { }

export const routingComponents = [SeemoreComponent,HomeComponent];