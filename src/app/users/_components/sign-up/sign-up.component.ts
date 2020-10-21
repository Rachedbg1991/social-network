import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../_entities/user.entity';
import { isValidConfirmation } from '../../_validators/valid-confirmation.validator';

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
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    birthDate: null
  };

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(this.user.firstName,[
        Validators.required
      ]),
      'lastName': new FormControl(this.user.lastName,[
        Validators.required
      ]),
      'password': new FormControl(this.user.password,[
        Validators.minLength(8),
        Validators.required
      ]),
      'confirmPassword': new FormControl('',[
        Validators.minLength(8),
        Validators.required,
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

    this.password.valueChanges.subscribe((value) => {
      this.confirmPassword.setValidators(
        [ 
          Validators.minLength(8),
          Validators.required,
          isValidConfirmation(value)
        ]
      )
    })
    
  }

  get firstName(){
    return this.signUpForm.get('firstName');
  }

  get lastName(){
    return this.signUpForm.get('lastName');
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

  inspectError(){
    console.log(this.confirmPassword.errors);
  }

  makeUser(): void{
    this.createUser.emit(this.signUpForm.value);
  }

  ngOnInit(): void {
  }

}
