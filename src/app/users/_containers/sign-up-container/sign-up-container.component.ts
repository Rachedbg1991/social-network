import { Component, OnInit } from '@angular/core';
import { User } from '../../_entities/user.entity';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss']
})
export class SignUpContainerComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  signUp(user: User): void{
    this.userService.postData('users', user).subscribe(
      response => console.log(response),
      err => console.log(err)
    )
  }

}
