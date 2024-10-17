import { Pipe, PipeTransform } from '@angular/core';
import { TIntegrationCategory } from '../models/Unified';

@Pipe({
  name: 'filterCategories',
  standalone: true,
})
export class FilterCategoriesPipe implements PipeTransform {
  transform(
    categories: TIntegrationCategory[],
    filter: TIntegrationCategory[]
  ) {
    return categories.filter((cat) => filter.includes(cat));
  }
}
