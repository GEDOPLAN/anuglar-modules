import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HelloWorldComponent, InputComponent],
  imports: [CommonModule, MDBBootstrapModule, ReactiveFormsModule],
  exports: [HelloWorldComponent, InputComponent]
})
export class AngularCommonModule {}
