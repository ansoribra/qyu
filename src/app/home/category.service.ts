import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Home }           from './home';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CategoryService {
    constructor (private http: Http) {}

    private computerUrl = 'http://localhost:8090/product?product_category=computer&size=12&page=0';  // URL to web API
    private beautyUrl = 'http://localhost:8090/product?product_category=beauty&size=12&page=0';
    private bookUrl = 'http://localhost:8090/product?product_category=book&size=12&page=0';
    private clothingUrl = 'http://localhost:8090/product?product_category=clothing&size=12&page=0';
    private shoesUrl = 'http://localhost:8090/product?product_category=shoes&size=12&page=0';
    private electronicUrl = 'http://localhost:8090/product?product_category=electronic&size=12&page=0';
    private gamesUrl = 'http://localhost:8090/product?product_category=games&size=12&page=0';
    private gardenUrl = 'http://localhost:8090/product?product_category=garden&size=12&page=0';
    private healthUrl = 'http://localhost:8090/product?product_category=health&size=12&page=0';
    private homeUrl = 'http://localhost:8090/product?product_category=home&size=12&page=0';
    private jeweleryUrl = 'http://localhost:8090/product?product_category=jewelery&size=12&page=0';
    private kidsUrl = 'http://localhost:8090/product?product_category=kids&size=12&page=0';
    private moviesUrl = 'http://localhost:8090/product?product_category=movies&size=12&page=0';
    private outdoorsUrl = 'http://localhost:8090/product?product_category=outdoors&size=12&page=0';
    private sportUrl = 'http://localhost:8090/product?product_category=sport&size=12&page=0';

    getComputer (){
        return this.http.get(this.computerUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBeauty (){
        return this.http.get(this.beautyUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBook (){
        return this.http.get(this.bookUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getClothing (){
        return this.http.get(this.clothingUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getShoes (){
        return this.http.get(this.shoesUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getElectronic (){
        return this.http.get(this.electronicUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGames (){
        return this.http.get(this.gamesUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGarden (){
        return this.http.get(this.gardenUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHealth (){
        return this.http.get(this.healthUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getJewelery (){
        return this.http.get(this.jeweleryUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getKids (){
        return this.http.get(this.kidsUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getMovies (){
        return this.http.get(this.moviesUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getOutdoors (){
        return this.http.get(this.outdoorsUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getSport (){
        return this.http.get(this.sportUrl)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHome (){
        return this.http.get(this.homeUrl)
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
