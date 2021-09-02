import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {
  output1 = '';
  output2 = '';
  constructor(private service: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.output1 = this.service.data1;
    this.output2 = this.service.data2;
  }
  goBack()
  {
    this.router.navigate(['input']);
  }

}
