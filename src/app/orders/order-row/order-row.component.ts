import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css']
})
export class OrderRowComponent {
  @Input() status: 'pending' | 'inProgress' | 'accepted' | 'notPaid' = 'pending';
  @Input() data: any;
  @Input() circular: boolean = true;
}
