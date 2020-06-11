import { Observable } from 'rxjs';
import { PaginateModel } from '@app/shared/models';

export interface PaginatePattern<T> {
    paginate(paginateModel: PaginateModel): Observable<Array<T>>;
}
