import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../../../_models/person';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormComponent implements OnInit {

  genders: string[] = ['Female', 'Male', 'Other'];
  model: Person = new Person(1, 'John', 'Doe', 'Male');

  constructor() { }

  ngOnInit() {
  }

  newPerson(): void {
    this.model = new Person(this.model.id + 1, '', '', '');
  }

  onSubmit(): void {
  }

}
