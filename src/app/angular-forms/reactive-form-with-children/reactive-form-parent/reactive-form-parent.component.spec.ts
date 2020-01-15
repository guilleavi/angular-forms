import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormParentComponent } from './reactive-form-parent.component';

describe('ReactiveFormParentComponent', () => {
  let component: ReactiveFormParentComponent;
  let fixture: ComponentFixture<ReactiveFormParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
