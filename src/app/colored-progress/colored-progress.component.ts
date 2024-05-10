import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colored-progress',
  templateUrl: './colored-progress.component.html',
  styleUrls: ['./colored-progress.component.css']
})
export class ColoredProgressComponent {
    @Input() color: string = '';
    @Input() progress: number = 0;
}
