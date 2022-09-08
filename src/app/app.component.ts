import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count = 1;

  listOfNumbers = ['Gangtok','Namchi','Pakyong','Yangang','Changu'];
  

  decreaseCount = ()=>{
    console.log('Button Click')
    this.count--;
  }
  increaseCount = () =>{
    this.count++;
  }
  arr = [0,1,2,3,4,5,6,7,8,9];
  A = 0;
  B = 0;
  C = 0;
  add = () =>{
    this.C = this.A + this.B;
  }
  subtract = () =>{
    this.C = this.A - this.B;
  }
  multiply = () =>{
    this.C = this.A * this.B;
  }
  divide = () =>{
    this.C = this.A / this.B;
  }
  
}
