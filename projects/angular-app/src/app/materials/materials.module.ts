import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoTableComponent } from './pages/home/demo-table/demo-table.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [HomeComponent, DemoTableComponent],
  imports: [AppModule, MDBBootstrapModule.forRoot(), CommonModule, MaterialsRoutingModule]
})
export class MaterialsModule {}
