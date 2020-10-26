import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './_containers/sign-up-container/sign-up-container.component';
import { UserValidationContainerComponent } from './_containers/user-validation-container/user-validation-container.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignUpContainerComponent
  },
  {
    path: 'validate/:id',
    component: UserValidationContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

