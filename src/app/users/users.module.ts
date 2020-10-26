import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { SignUpContainerComponent } from './_containers/sign-up-container/sign-up-container.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialFormsModule } from '../material-modules/material-forms/material-forms.module';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserValidationComponent } from './_components/user-validation/user-validation.component';
import { UserValidationContainerComponent } from './_containers/user-validation-container/user-validation-container.component';



@NgModule({
  declarations: [SignUpComponent, SignUpContainerComponent, UserValidationComponent, UserValidationContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
