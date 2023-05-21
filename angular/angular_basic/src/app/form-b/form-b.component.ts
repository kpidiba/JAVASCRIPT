import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';
@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required,noSpace.noSpaceValidations]],

    });
  }

  get fc(){
    return this.form.controls;
  }
}
