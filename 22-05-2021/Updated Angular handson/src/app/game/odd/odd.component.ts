import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.styl']
})
export class OddComponent implements OnInit {

  constructor() { }

  @Input() oddnumber:string
  ngOnInit(): void {
  }

}
