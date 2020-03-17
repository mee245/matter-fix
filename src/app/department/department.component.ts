import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Posts } from '../posts'; 


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  objPosts:Posts[];


constructor(private userService:UserService) { }

  ngOnInit() {
    var opost = new Posts();
    opost.body="Testbody";
    opost.title="Testtitle"
    opost.userId=5;

    this.userService.post(opost)
    .subscribe
    (
      data=>
      {
        this.objPosts = data;
      }
    )

  }
  }


