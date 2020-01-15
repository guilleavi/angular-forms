import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-parent',
  templateUrl: './reactive-form-parent.component.html',
  styleUrls: ['./reactive-form-parent.component.scss']
})
export class ReactiveFormParentComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
