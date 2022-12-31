import { Component, Input, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 registerForm: FormGroup | undefined;
 @Input() formName?: string;
 @Input() input?: Input;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = new FormGroup({
      medicin: new FormControl(''),
      address: new FormControl(''),
    });
  }
}
