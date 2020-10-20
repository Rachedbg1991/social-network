import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './_components/authentication/authentication.component';
import { AuthenticationContainerComponent } from './_containers/authentication-container/authentication-container.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialFormsModule } from '../material-modules/material-forms/material-forms.module';


@NgModule({
  declarations: [AuthenticationComponent, AuthenticationContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule,
    MaterialFormsModule
  ]
})
export class AuthenticationModule { }
