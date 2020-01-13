import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';



@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ]
})
export class AngularFormsModule { }
