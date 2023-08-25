import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistersComponent } from './registers/registers.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterResolver } from './guards/register.resolver';

const routes: Routes = [
  { path:'', component: RegistersComponent },
  { path:'new', component: RegisterFormComponent, resolve: { register: RegisterResolver} },
  { path:'edit/:id', component: RegisterFormComponent, resolve: { register: RegisterResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
