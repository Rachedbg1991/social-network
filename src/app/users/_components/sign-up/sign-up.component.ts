import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../_entities/user.entity';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output()
  createUser = new EventEmitter<User>();

  signUpForm: FormGroup;
  hide = true;
  hideConfirmation = true;
  user: User= {
    userName: null,
    password: null,
    email: null,
    birthDate: null
  };

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.signUpForm = new FormGroup({
      'userName': new FormControl(this.user.userName,[
        Validators.required,
        Validators.minLength(8)
      ]),
      'password': new FormControl(this.user.password,[
        Validators.minLength(8),
        Validators.required
      ]),
      'confirmPassword': new FormControl('',[
        Validators.minLength(8),
        Validators.required
      ]),
      'email': new FormControl(this.user.email,[
        Validators.required,
        Validators.email
      ]),
      'birthDate': new FormControl(this.user.birthDate,[
        Validators.required
      ]),
      'phoneNumber': new FormControl(this.user.phoneNumber)
    })
  }

  get userName(){
    return this.signUpForm.get('userName');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get birthDate(){
    return this.signUpForm.get('birthDate');
  }

  makeUser(): void{
    this.createUser.emit(this.signUpForm.value);
  }

  ngOnInit(): void {
  }

}
