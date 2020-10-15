/**
 * Author
 * Rached Ben Ghorbel
 * benghorbelrached@gmail.com
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenericServices } from './generic.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> implements IGenericServices<T>{

  constructor(private http: HttpClient) { }

  // building the request prameters genericly
  private buildParams(params: Array<Object>): HttpParams{
    const httpParamsToBuild : HttpParams = new HttpParams();
    if(params.length <= 0) return httpParamsToBuild;
    params.forEach( (param) => {
      Object.keys(param).forEach( (key) => {
        httpParamsToBuild.set(key, param[key]);
      })
    })
    return httpParamsToBuild;
  } 
  
  //perform any post request
  create(uriToPost: string, entityToCreate: T): Observable<T> {
    return this.http.post<T>(uriToPost, entityToCreate);
  }
  
  //perform any get request if we have parameters we pass it threw
  getOne(uriToGet: string, params?: Array<any>): Observable<T> {
    const httpPrams: HttpParams = this.buildParams(params);
    return this.http.get<T>(uriToGet, {params: httpPrams });
  }
  
  getAll(uriToGet: string, params?: Array<any>): Observable<T[]> {
    const httpPrams: HttpParams = this.buildParams(params);
    return this.http.get<Array<T>>(uriToGet, {params: httpPrams });
  }
  
  //perform any update request
  update(uriToUpdate: string, entityToUpdate: T): Observable<T> {
    return this.http.put<T>(uriToUpdate, entityToUpdate);
  }
  
  //perform any delete request
  delete(uriToDelete: string, id: number) {
    throw new Error('Method not implemented.');
  }

}
