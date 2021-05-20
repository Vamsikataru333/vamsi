import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'EmpolyeeManagement';
  count=104;
  ngOnInit():void{
    this.getFromChild(this.count);

  }
  getFromChild(event):void{
this.count=event;
  }
 
}
