import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  show = false;

  students =[
    {
      sid: "1",
      name: "rupesh",
      city:"nanded",
      age:18
      

    },
    {
      sid: "2",
      name: "Sager",
      city:"Sangola",
      age:22
    },
    { 
      sid: "3",
      name: "Onkar",
      city:"Sangola",
      age:21
    },
    { 
      sid: "1",
      name: "Harish",
      city:"Sangola",
      age:8
    },
    { 
      sid: "4",
      name: "Om",
      city:"Sangola",
      age:16
    },


  ]
  
}
