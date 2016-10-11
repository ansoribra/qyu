import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Home }           from './home';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HomeService {
    constructor (private http: Http) {}

    private homesUrl = 'http://localhost:8090/product?product_category=computer&size=500';  // URL to web API

    getHomes (){
        return this.http.get(this.homesUrl)
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
