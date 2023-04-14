import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .text-color {
    color: white
  }
  `]
})
export class AppComponent {
  show=false;
  log=[]

  onClick() {
    this.show = !this.show
    this.log.push(new Date());
  }

  getBackground(){
    console.log(this.log)
  }

  // Max's solution 
  // showSecret = false;
 // onToggleDetails(){
//     this.showSecret = !this.showSecret
//   }
  
 }
