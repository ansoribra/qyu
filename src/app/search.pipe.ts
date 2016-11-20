import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(service: any, term: any): any {
    if (term=== undefined) return null;

    return  service.filter(function(service){
      return  service.product_name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
