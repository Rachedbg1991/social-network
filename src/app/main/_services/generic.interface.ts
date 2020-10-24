import { Observable } from 'rxjs';

export interface IGenericServices<T>{

    postData(uriToPost: string, entityToCreate: T): Observable<T>;

    getOne(uriToGet: string, params?: Array<any>): Observable<T>;

    getAll(uriToGet: string, params?: Array<any>): Observable<Array<T>>;

    putData(uriToUpdate: string, entityToUpdate: T): Observable<T>;

    delete(uriToDelete: string ,id: number);

}