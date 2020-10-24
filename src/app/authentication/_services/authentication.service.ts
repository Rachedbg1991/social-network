import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/main/_services/generic.service';
import { User } from 'src/app/users/_entities/user.entity';
import { environment } from 'src/environments/environment';
import { Auth } from '../_entities/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends GenericService<User> {

  constructor(http: HttpClient) {
    super(http);
  }

  postData(uriToPost: string, entityToCreate: Auth): Observable<User> {
    return this.http.post<User>(environment.baseUri + uriToPost, entityToCreate);
  }
}
