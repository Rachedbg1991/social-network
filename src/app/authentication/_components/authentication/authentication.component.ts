import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../_entities/auth.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  authenticationForm: FormGroup;
  authUser: Auth= {
    userName: '',
    password: ''
  };
  hide = true;
  isSubmitted = false;

  constructor() {
    this.createForm();
  }

  get userName(){
    return this.authenticationForm.get('userName');
  }

  get password(){
    return this.authenticationForm.get('password');
  }

  createForm(): void {
    this.authenticationForm = new FormGroup({
      'userName': new FormControl(this.authUser.userName,[
        Validators.required,
        Validators.minLength(8)
      ]),
      'password': new FormControl(this.authUser.password,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ])
    })
  }

  ngOnInit(): void {
  }

}
