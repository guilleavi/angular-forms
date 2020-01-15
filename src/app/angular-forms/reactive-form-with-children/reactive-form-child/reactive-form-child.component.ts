import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-child',
  templateUrl: './reactive-form-child.component.html',
  styleUrls: ['./reactive-form-child.component.scss']
})
export class ReactiveFormChildComponent implements OnInit {

  @Input() profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
