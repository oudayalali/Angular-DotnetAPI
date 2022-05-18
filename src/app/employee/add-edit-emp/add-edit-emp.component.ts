import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  alert:boolean=false;
  constructor(private service:SharedService) { }

  @Input() emp:any;

  id:any;
  first_name:any;
  last_name:any;
  gender:any;
  email:any;
  phone:any;


  ngOnInit(): void {
      this.id=this.emp.id;
      this.first_name=this.emp.first_name;
      this.last_name=this.emp.last_name;
      this.gender=this.emp.gender;
      this.email=this.emp.email;
      this.phone=this.emp.phone;
  }

  addEmployee(){
    if(this.first_name =="" || this.email =="" || this.last_name == "" || this.phone == ""){
      this.alert=true;
    }else{
      var val = {
        first_name:this.first_name,
        last_name:this.last_name,
        gender:this.gender,
        email:this.email,
        phone:this.phone
      };
      this.service.addUser(val).subscribe(res=>{
        alert("Success");
      })
    }

  }


}
