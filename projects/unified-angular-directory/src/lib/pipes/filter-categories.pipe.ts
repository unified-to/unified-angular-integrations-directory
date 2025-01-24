import { Pipe, PipeTransform } from '@angular/core';
import { TIntegrationCategory } from '../models/Unified';
import { TIntegrationCategoryType } from 'projects/unified-angular-directory/src/lib/unified-angular-directory.component';

@Pipe({
    name: 'filterCategories',
    standalone: true,
})
export class FilterCategoriesPipe implements PipeTransform {
    transform(categories: TIntegrationCategory[], filter: TIntegrationCategoryType[]) {
        return categories.filter((cat) => filter.includes(cat as TIntegrationCategoryType)) as TIntegrationCategoryType[];
    }
}
