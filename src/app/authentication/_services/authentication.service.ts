import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/users/_entities/user.entity';
import { environment } from 'src/environments/environment';
import { Auth } from '../_entities/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  authenticate(uriToPost: string, entityToCreate: Auth): void {
    this.http.post(environment.baseUri + uriToPost, entityToCreate, {observe: 'response'}).subscribe(
      (res: HttpResponse<any>) => {
        sessionStorage.setItem('token', res.headers.get('token'));
        const connectedUser: User = res.body as User;
        sessionStorage.setItem('user', JSON.stringify(connectedUser));
      }
    );
  }
}
