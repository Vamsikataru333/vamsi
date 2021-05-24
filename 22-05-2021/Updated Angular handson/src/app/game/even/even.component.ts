import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.styl']
})
export class EvenComponent implements OnInit {

  constructor() { }
@Input() evennumber:string;
  ngOnInit(): void {
  }

}
