import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  input1 = "";
  input2 = "";
  constructor(private service: DataServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  submitData(){
    this.service.data1 = this.input1;
    this.service.data2 = this.input2;

    this.router.navigate(['afterSubmit']);
  }
}
