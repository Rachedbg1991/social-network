import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../_entities/auth.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @Output()
  performAuth: EventEmitter<Auth> = new EventEmitter();
  authenticationForm: FormGroup;
  authUser: Auth= {
    email: '',
    password: ''
  };
  hide = true;
  isSubmitted = false;

  constructor() {
    this.createForm();
  }

  get email(){
    return this.authenticationForm.get('email');
  }

  get password(){
    return this.authenticationForm.get('password');
  }

  createForm(): void {
    this.authenticationForm = new FormGroup({
      'email': new FormControl(this.authUser.email,[
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.authUser.password,[
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  startAuth(): void{
    this.performAuth.emit(this.authenticationForm.value);
  }

  ngOnInit(): void {
  }

}
