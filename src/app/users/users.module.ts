import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { SignUpContainerComponent } from './_containers/sign-up-container/sign-up-container.component';



@NgModule({
  declarations: [SignUpComponent, SignUpContainerComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
