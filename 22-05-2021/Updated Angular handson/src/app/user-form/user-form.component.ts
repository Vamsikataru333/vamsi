import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.styl']
})
export class UserFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: ElementRef){
    
console.log(form);
  }

}
