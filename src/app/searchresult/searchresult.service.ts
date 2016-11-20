import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Globals} from "../globals";
import { ActivatedRoute,Router } from '@angular/router';
import {Home} from "../home/home";

@Injectable()
export class SearchResultService{
    name:string;
    pageNumber:string;
    private searchUrl;
    constructor (private http: Http,private route: ActivatedRoute) {
        this.route.params.subscribe(params => {let name = params['name'];this.name = name;});
    }

    private page=0;



    changePage( pageNumber){
        this.page =pageNumber;
        this.getSearch();
    }

    getSearch (){
    this.searchUrl = Globals.server+'/product?product_name='+this.name+'&page='+this.page+'&size=60';
        return this.http.get(this.searchUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
