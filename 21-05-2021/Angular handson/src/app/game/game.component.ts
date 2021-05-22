import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.styl']
})
export class GameComponent implements OnInit {
num:number=0;
even:string='';
odd:string='';
flag:boolean=true;
evenNum:string='';
oddNum:string='';
  constructor() { }

  ngOnInit(): void {
  }
  setinterval():void{
 let timerId=setInterval(()=>{
   if(this.flag){
     if(this.num%2==0){
      this.evenNum= this.even+=this.num.toString();
     }
     else{
      this.oddNum= this.odd+=this.num.toString();
     }
     this.num+=1;
    // console.log(this.num);
   }
 },1000);
 if(!this.flag){
  setTimeout(()=>clearInterval(timerId),1000);
  this.num=0;
  this.even='';
  this.odd='';
  this.flag=true;
  this.evenNum='';
this.oddNum='';

}
  }
  clearinterval():void{
   this.flag=false;
  }
 

}
