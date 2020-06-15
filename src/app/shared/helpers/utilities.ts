import { FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { PaginatePattern } from '@app/shared/interfaces';
import { PaginateModel } from '@app/shared/models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export function loadMore(serviceImpl: PaginatePattern<any>, paginateModel: PaginateModel,
                         currElements: Array<any>): Observable<Array<any>> {

  if (paginateModel.totalPages) {
    if (paginateModel.page >= paginateModel.totalPages) {
      return of(currElements);
    }
    paginateModel.page++;
  }

  return serviceImpl.paginate(paginateModel).pipe(
    map((newElements: Array<any>) => currElements.concat(newElements))
  );

}

export function getHttpParams(queryParams: any) {

  let httpParams = new HttpParams();

  switch (typeof queryParams) {
    case 'object':
      Object.keys(queryParams).forEach((key: string) => {
        httpParams = httpParams.append(key, queryParams[key] !== undefined ? queryParams[key] : '');
      });
      break;
    case 'string': httpParams = httpParams.append(queryParams, queryParams); break;
  }
  return httpParams;
}


export function cleanObject(obj: any) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      cleanObject(obj[key]);
    } else if (obj[key] === '') {
      delete obj[key];
    }
  });
}

export function getNestedObjectProperty(nestedObj: any, path: [string]) {
  return path.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

export function generateRandom() {
  return Date.now() + Math.floor((Math.random() * 1000) + 1);
}
