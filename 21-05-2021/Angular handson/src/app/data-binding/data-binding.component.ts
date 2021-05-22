

import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.styl']
})
export class DataBindingComponent 
 {

  constructor() { }
  courses=[1,2];
  isBold:boolean=true;
  fontSize=30;
  isItalic=false;
  applyBoldClass = true;  
  applyItalicsClass: boolean = true;  
  viewMode='Map';
   MyStyle()
   {
     let mystyles={
      'font-weight': this.isBold ? 'bold' : 'normal',    
      'font-style': this.isItalic ? 'italic' : 'normal',    
      'font-size.px': this.fontSize   
     };
     return mystyles;
   }
   applyClasses() 
   {    
        let classes = 
        {    
            boldClass: this.applyBoldClass,    
            italicsClass: this.applyItalicsClass    
        };    
    
        return classes;    
    }    
  }
