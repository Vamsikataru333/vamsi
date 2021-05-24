import { StudentService } from './../student.service';
import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.styl']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }
  studentData:Student[];

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data=>{
      this.studentData=data;
    });
  }
  title="Student Data";
 

}
