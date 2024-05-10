import { Component } from '@angular/core';
import {CounterService} from "./services/counterService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendAngularProject';
  view = true;
  counter: {active: number; inactive: number; total: number} = {
    active: 0,
    inactive: 0,
    total: 0
  };

  constructor(private counterService: CounterService) {
    // this.counterService.onCounterChanged.subscribe(res =>{
    //   if(res){
         this.counter = this.counterService.counter;
    //   }
    // });
  }

  hide(){
    this.view = !this.view;
  }
}
