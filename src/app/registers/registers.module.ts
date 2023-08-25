import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers/registers.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistersComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class RegistersModule { }
