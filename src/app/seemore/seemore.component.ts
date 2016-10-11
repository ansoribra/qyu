import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Home} from "../home/home";
import {CategoryService} from "../home/category.service";


@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.component.html',
  styleUrls: ['./seemore.component.css'],
  providers: [CategoryService]
})
export class SeemoreComponent implements OnInit {
  id:string;
  idCat:string;
  categories:Home[];

  errorMessage: string;
  private sub: any;

  constructor(private categoryService:CategoryService,private route: ActivatedRoute, private router: Router) {
    this.id = '?';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {let   id = params['id'];this.id = id;});
    this.getHomes();
  }

  getHomes(){
    if (this.id==='1') {
      this.categoryService.getBeautyFull()
          .subscribe(categories => this.categories = categories.content,
              error => this.errorMessage = <any>error);

    }else if (this.id==='2'){
    this.categoryService.getBookFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='3'){
    this.categoryService.getClothingFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='4'){
    this.categoryService.getGardenFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='5'){
    this.categoryService.getElectronicFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='6'){
    this.categoryService.getGamesFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='7'){
    this.categoryService.getHealthFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='8'){
    this.categoryService.getHomeFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='9'){
    this.categoryService.getJeweleryFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='10'){
    this.categoryService.getKidsFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='11'){
    this.categoryService.getMoviesFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='12'){
    this.categoryService.getOutdoorsFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='13'){
    this.categoryService.getSportFull()
        .subscribe(categories => this.categories = categories.content,
            error => this.errorMessage = <any>error);

    }else if (this.id==='14') {
      this.categoryService.getShoesFull()
          .subscribe(categories => this.categories = categories.content,
              error => this.errorMessage = <any>error);
    }
  }
}
