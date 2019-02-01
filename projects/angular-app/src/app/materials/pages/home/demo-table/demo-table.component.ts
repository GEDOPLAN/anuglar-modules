import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../services/material-service.service';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  data$: any;

  constructor(service: MaterialService) {
    this.data$ = service.getDemoData();
  }

  ngOnInit() {}
}
