import { Observable } from 'rxjs';

export interface IGenericServices<T>{

    create(uriToPost: string, entityToCreate: T): Observable<T>;

    getOne(uriToGet: string, params?: Array<any>): Observable<T>;

    getAll(uriToGet: string, params?: Array<any>): Observable<Array<T>>;

    update(uriToUpdate: string, entityToUpdate: T): Observable<T>;

    delete(uriToDelete: string ,id: number);

}