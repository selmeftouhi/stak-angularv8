import { Observable } from 'rxjs';

export interface DAOPattern<T> {

    create(element: T): Observable<T>;

    update(element: T): Observable<T>;

    delete(element: T): Observable<boolean>;

    deleteElements(elements: Array<T>): Observable<boolean>;

    findAll(): Observable<Array<T>>;

    find(predicat: any): Observable<Array<T>>;

    findOne(predicat: any): Observable<T>;

    findById(id: number): Observable<T>;

}
