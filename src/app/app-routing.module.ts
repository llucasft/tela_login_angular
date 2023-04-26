import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formRegister',
    pathMatch: 'full'
  },
  {
    path: 'formLogin',
    component: FormLoginComponent
  },
  {
    path: 'formRegister',
    component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
