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
    this.log.push(Date());
  }

  getBackground(){
    console.log(this.log)
  }
  
}
