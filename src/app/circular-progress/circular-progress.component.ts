import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit{
  color: 'yellow' | 'blue' = 'yellow';
  @Input() progress: number = 0;
  @HostBinding('style.--progress_value') pro: string = '0deg';

  constructor() {
  }

  ngOnInit() {

    console.log(70 * 360 / 100 );
    if(this.progress <= 50){
      this.pro = this.progress * 360 / 100 + 'deg';
      this.color = 'yellow';
    }else{
      this.pro = (180 + (this.progress * 360 / 100)) + 'deg';
      this.color = 'blue'
    }
    console.log(this.pro);
  }
}
