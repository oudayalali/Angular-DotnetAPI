import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-sal',
  templateUrl: './show-sal.component.html',
  styleUrls: ['./show-sal.component.css']
})
export class ShowSalComponent implements OnInit {
  
  constructor(private service:SharedService) { }

  
  SalaryList:any=[];
  ngOnInit(): void {
    this.refreshSalList();
  }
  refreshSalList(){
    this.service.getSalaries().subscribe(data=>{
        this.SalaryList=data;
    });
  }

}
