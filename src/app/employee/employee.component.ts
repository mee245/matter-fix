import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getcomments()
    .subscribe
    (
      data=>
      {
       this.employee = data;
      }
    );
  }
  }


