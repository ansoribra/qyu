import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Home }           from './home';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Globals} from "../globals";

@Injectable()
export class CategoryService {
    constructor (private http: Http) {

    }

    private page=0;

    private computerUrl = Globals.server+'/product?product_category=computer&size=12&page=0';
    private beautyUrl = Globals.server+'/product?product_category=beauty&size=12&page=0';
    private bookUrl = Globals.server+'/product?product_category=book&size=12&page=0';
    private clothingUrl = Globals.server+'/product?product_category=clothing&size=12&page=0';
    private shoesUrl = Globals.server+'/product?product_category=shoes&size=12&page=0';
    private electronicUrl = Globals.server+'/product?product_category=electronic&size=12&page=0';
    private gamesUrl = Globals.server+'/product?product_category=games&size=12&page=0';
    private gardenUrl = Globals.server+'/product?product_category=garden&size=12&page=0';
    private healthUrl = Globals.server+'/product?product_category=health&size=12&page=0';
    private homeUrl = Globals.server+'/product?product_category=home&size=12&page=0';
    private jeweleryUrl = Globals.server+'/product?product_category=jewelery&size=12&page=0';
    private kidsUrl = Globals.server+'/product?product_category=kids&size=12&page=0';
    private moviesUrl = Globals.server+'/product?product_category=movies&size=12&page=0';
    private outdoorsUrl = Globals.server+'/product?product_category=outdoors&size=12&page=0';
    private sportUrl = Globals.server+'/product?product_category=sport&size=12&page=0';


        private computerUrlfull     = Globals.server+'/product?product_category=computer&size=60&page='+this.page;
        private beautyUrlfull       = Globals.server+'/product?product_category=beauty&size=120&page='+this.page;
        private bookUrlfull         = Globals.server+'/product?product_category=book&size=120&page='+this.page;
        private clothingUrlfull     = Globals.server+'/product?product_category=clothing&size=120&page='+this.page;
        private shoesUrlfull        = Globals.server+'/product?product_category=shoes&size=10&page='+this.page;
        private electronicUrlfull   = Globals.server+'/product?product_category=electronic&size=120&page='+this.page;
        private gamesUrlfull        = Globals.server+'/product?product_category=games&size=120&page='+this.page;
        private gardenUrlfull       = Globals.server+'/product?product_category=garden&size=120&page='+this.page;
        private healthUrlfull       = Globals.server+'/product?product_category=health&size=120&page='+this.page;
        private homeUrlfull         = Globals.server+'/product?product_category=home&size=120&page='+this.page;
        private jeweleryUrlfull     = Globals.server+'/product?product_category=jewelery&size=120&page='+this.page;
        private kidsUrlfull         = Globals.server+'/product?product_category=kids&size=120&page='+this.page;
        private moviesUrlfull       = Globals.server+'/product?product_category=movies&size=120&page='+this.page;
        private outdoorsUrlfull     = Globals.server+'/product?product_category=outdoors&size=120&page='+this.page;
        private sportUrlfull        = Globals.server+'/product?product_category=sport&size=120&page='+this.page;

    private headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("id_token")});
    changePage( pageNumber){
        this.page =pageNumber;
        this.getComputerFull();
    }
    getComputer (){
        return this.http.get(this.computerUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBeauty (){
        return this.http.get(this.beautyUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBook (){
        return this.http.get(this.bookUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getClothing (){
        return this.http.get(this.clothingUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getShoes (){
        return this.http.get(this.shoesUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getElectronic (){
        return this.http.get(this.electronicUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGames (){
        return this.http.get(this.gamesUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGarden (){
        return this.http.get(this.gardenUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHealth (){
        return this.http.get(this.healthUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getJewelery (){
        return this.http.get(this.jeweleryUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getKids (){
        return this.http.get(this.kidsUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getMovies (){
        return this.http.get(this.moviesUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getOutdoors (){
        return this.http.get(this.outdoorsUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getSport (){
        return this.http.get(this.sportUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHome (){
        return this.http.get(this.homeUrl,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getComputerFull (){
        return this.http.get(this.computerUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBeautyFull (){
        return this.http.get(this.beautyUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBookFull (){
        return this.http.get(this.bookUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getClothingFull (){
        return this.http.get(this.clothingUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getShoesFull (){
        return this.http.get(this.shoesUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getElectronicFull (){
        return this.http.get(this.electronicUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGamesFull (){
        return this.http.get(this.gamesUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGardenFull (){
        return this.http.get(this.gardenUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHealthFull (){
        return this.http.get(this.healthUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getJeweleryFull (){
        return this.http.get(this.jeweleryUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getKidsFull (){
        return this.http.get(this.kidsUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getMoviesFull (){
        return this.http.get(this.moviesUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getOutdoorsFull (){
        return this.http.get(this.outdoorsUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getSportFull (){
        return this.http.get(this.sportUrlfull,{headers: this.headers1})
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHomeFull (){
        return this.http.get(this.homeUrlfull,{headers: this.headers1})
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
