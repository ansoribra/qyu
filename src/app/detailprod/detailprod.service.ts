import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Globals} from "../globals";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {DetailprodComponent} from './detailprod.component';
import {Home} from '../home/home';
import { ActivatedRoute,Router } from '@angular/router';

@Injectable()
export class DetailprodService {
    private id:string;
    constructor (private http: Http, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {let   id = params['id'];this.id = id;});
    }


    getDetail(){
        return this.http.get(Globals.server+'/product/'+this.id)
                    .map(res=> res.json());
    }

}
