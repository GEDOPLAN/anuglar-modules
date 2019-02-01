import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { FormControlName, DefaultValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'appc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(public renderer: Renderer2, public ele: ElementRef) {}

  @Input()
  label: string;

  @Input()
  type: string = 'text';

  control: FormControl;

  rid: string;

  @ContentChild(FormControlName)
  cc: FormControlName;

  ngAfterContentInit() {
    this.rid = this.cc.name;
    this.control = this.cc.control;
  }

  getMessage() {
    console.log(this.control.errors);
    if (this.control.getError('required')) {
      return 'Pflichtfeld';
    }
    if (this.control.getError('minLength')) {
      return 'Min...';
    }
  }
}
