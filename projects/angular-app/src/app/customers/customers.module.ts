import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularCommonModule } from 'angular-common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MDBBootstrapModule.forRoot(),
    CommonModule,
    CustomersRoutingModule,
    AngularCommonModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule {}
