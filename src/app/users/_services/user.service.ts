import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/main/_services/generic.service';
import { environment } from 'src/environments/environment';
import { User } from '../_entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User> {

  constructor(http: HttpClient) {
    super(http);
  }

  checkEmail(uriToGet: string, params?: Array<any>): Observable<boolean> {
    const httpPrams: HttpParams = this.buildParams(params);
    return this.http.get<boolean>( environment.baseUri + uriToGet, {params: httpPrams });
  }

}
