import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/_entities/user.entity';
import { Auth } from '../../_entities/auth.interface';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-authentication-container',
  templateUrl: './authentication-container.component.html',
  styleUrls: ['./authentication-container.component.scss']
})
export class AuthenticationContainerComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  authenticate(authObject: Auth): void {
    this.authService.authenticate('authentication', authObject).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
