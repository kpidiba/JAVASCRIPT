import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBComponent } from './form-b.component';

describe('FormBComponent', () => {
  let component: FormBComponent;
  let fixture: ComponentFixture<FormBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
