import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Home }           from './home';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CategoryService {
    constructor (private http: Http) {
        this.linkFull();
    }

    private page=0;

    private computerUrl = 'http://localhost:8090/product?product_category=computer&size=12&page=0';
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

    private computerUrlfull = "a";
    private beautyUrlfull = "a";
    private bookUrlfull= "a";
    private clothingUrlfull= "a";
    private shoesUrlfull= "a";
    private electronicUrlfull= "a";
    private gamesUrlfull= "a";
    private gardenUrlfull= "a";
    private healthUrlfull= "a";
    private homeUrlfull= "a";
    private jeweleryUrlfull= "a";
    private kidsUrlfull= "a";
    private moviesUrlfull= "a";
    private outdoorsUrlfull= "a";
    private sportUrlfull= "a";

    linkFull(){
        this.computerUrlfull     = 'http://localhost:8090/product?product_category=computer&size=60&page='+this.page;
        this.beautyUrlfull       = 'http://localhost:8090/product?product_category=beauty&size=120&page='+this.page;
        this.bookUrlfull         = 'http://localhost:8090/product?product_category=book&size=120&page='+this.page;
        this.clothingUrlfull     = 'http://localhost:8090/product?product_category=clothing&size=120&page='+this.page;
        this.shoesUrlfull        = 'http://localhost:8090/product?product_category=shoes&size=10&page='+this.page;
        this.electronicUrlfull   = 'http://localhost:8090/product?product_category=electronic&size=120&page='+this.page;
        this.gamesUrlfull        = 'http://localhost:8090/product?product_category=games&size=120&page='+this.page;
        this.gardenUrlfull       = 'http://localhost:8090/product?product_category=garden&size=120&page='+this.page;
        this.healthUrlfull       = 'http://localhost:8090/product?product_category=health&size=120&page='+this.page;
        this.homeUrlfull         = 'http://localhost:8090/product?product_category=home&size=120&page='+this.page;
        this.jeweleryUrlfull     = 'http://localhost:8090/product?product_category=jewelery&size=120&page='+this.page;
        this.kidsUrlfull         = 'http://localhost:8090/product?product_category=kids&size=120&page='+this.page;
        this.moviesUrlfull       = 'http://localhost:8090/product?product_category=movies&size=120&page='+this.page;
        this.outdoorsUrlfull     = 'http://localhost:8090/product?product_category=outdoors&size=120&page='+this.page;
        this.sportUrlfull        = 'http://localhost:8090/product?product_category=sport&size=120&page='+this.page;
    }


    changePage( pageNumber){
        this.page =pageNumber;
        this.linkFull();
        alert(this.computerUrlfull);
        this.getComputerFull();
    }
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

    getComputerFull (){
        return this.http.get(this.computerUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBeautyFull (){
        return this.http.get(this.beautyUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getBookFull (){
        return this.http.get(this.bookUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getClothingFull (){
        return this.http.get(this.clothingUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getShoesFull (){
        return this.http.get(this.shoesUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getElectronicFull (){
        return this.http.get(this.electronicUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGamesFull (){
        return this.http.get(this.gamesUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getGardenFull (){
        return this.http.get(this.gardenUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHealthFull (){
        return this.http.get(this.healthUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getJeweleryFull (){
        return this.http.get(this.jeweleryUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getKidsFull (){
        return this.http.get(this.kidsUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getMoviesFull (){
        return this.http.get(this.moviesUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getOutdoorsFull (){
        return this.http.get(this.outdoorsUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getSportFull (){
        return this.http.get(this.sportUrlfull)
            .map(res => <Home[]> res.json())
            .catch(this.handleError);
    }

    getHomeFull (){
        return this.http.get(this.homeUrlfull)
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
