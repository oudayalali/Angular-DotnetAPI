import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  EmployeeList: any = [];
  ModalTitle: any;
  ActivateAddEditEmployeeComp: boolean = false;
  emp: any;
  searching: boolean = true;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  addClick() {
    this.emp = {
      id: 0,
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      phone: '',
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmployeeComp = true;
  }

  closeClick() {
    this.ActivateAddEditEmployeeComp = false;
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.service.getUserList().subscribe((data) => {
      this.EmployeeList = data;
      this.searching = false;
    });
  }
}
