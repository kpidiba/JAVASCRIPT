import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  //NOTE: reactive form
  form: any;
  emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(fb: FormBuilder) {
    fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      adress : ['', [Validators.required]],
      skills:  fb.array([])
    });

    this.form = new FormGroup({
      fullName: new FormControl('' /* default value */, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),
      adress: new FormControl('', [Validators.required]),
      skills: new FormArray([]),
    });
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get Adress() {
    return this.form.get('adress');
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  //NOTE:Template Driven Form
  onSubmit(f: NgForm) {
    console.log(f);
  }

  getVal(f: any) {
    console.log(f);
  }

  addSkills(skills: HTMLInputElement) {
    this.Skills.push(new FormControl(skills.value));
    console.log(this.form.value);
    skills.value = '';
  }

  removeSkill(value: number) {
    this.Skills.removeAt(value);
  }
}
