import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './_containers/sign-up-container/sign-up-container.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignUpContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

