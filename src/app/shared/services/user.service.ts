import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { PaginatePattern, DAOPattern } from '../interfaces';
import { UserModel, PaginateModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService implements DAOPattern<UserModel>, PaginatePattern<UserModel> {

  constructor() { }

  paginate(paginateModel: PaginateModel): Observable<UserModel[]> {
    throw new Error("Method not implemented.");
  }

  create(element: UserModel): Observable<UserModel> {
    throw new Error("Method not implemented.");
  }
  update(element: UserModel): Observable<UserModel> {
    throw new Error("Method not implemented.");
  }
  delete(element: UserModel): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteElements(elements: UserModel[]): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  findAll(): Observable<UserModel[]> {
    throw new Error("Method not implemented.");
  }
  find(predicat: any): Observable<UserModel[]> {
    throw new Error("Method not implemented.");
  }
  findOne(predicat: any): Observable<UserModel> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Observable<UserModel> {
    throw new Error("Method not implemented.");
  }
}
