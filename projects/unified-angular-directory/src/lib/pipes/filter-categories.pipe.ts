import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories',
  standalone: true,
})
export class FilterCategoriesPipe implements PipeTransform {
  transform(categories: string[], filter: string[]): string[] {
    return categories.filter((cat) => filter.includes(cat));
  }
}
