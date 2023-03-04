import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  onSubmit(f:NgForm){
    console.log(f);
    
  }

  getVal(f:any){
    console.log(f);
  }
}
