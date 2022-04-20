import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, filterValue?: string) {
    if( !filterValue ){
      return data;
    }
    const text = [];
    for(const note of data){
        if(note.title.toLocaleLowerCase().includes(filterValue) || note.description.toLocaleLowerCase().includes(filterValue)) {
          text.push(note);
        }
    }
    return text;
  }

}
