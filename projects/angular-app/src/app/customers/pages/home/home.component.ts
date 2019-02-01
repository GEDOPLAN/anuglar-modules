import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges {
  constructor(public fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    firstname: ['...', [Validators.required, Validators.minLength(3)]],
    lastname: [''],
    mail: [''],
    password: ['']
  });

  ngOnChanges() {}

  save() {
    console.log(this.form.value);
  }
}
