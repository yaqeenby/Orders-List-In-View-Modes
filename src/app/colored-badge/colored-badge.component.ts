import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-colored-badge',
  templateUrl: './colored-badge.component.html',
  styleUrls: ['./colored-badge.component.css']
})
export class ColoredBadgeComponent {
    @Input() rounded: 'pill' | '0' | '1'  | '2' | '3' | '4' | '5' = 'pill';
    @Input() color: string = '';
    @Input() text: string = '';
}
