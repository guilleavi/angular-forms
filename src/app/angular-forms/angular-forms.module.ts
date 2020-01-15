import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormParentComponent } from './reactive-form-with-children/reactive-form-parent/reactive-form-parent.component';
import { ReactiveFormChildComponent } from './reactive-form-with-children/reactive-form-child/reactive-form-child.component';



@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormParentComponent,
    ReactiveFormChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormParentComponent
  ]
})
export class AngularFormsModule { }
