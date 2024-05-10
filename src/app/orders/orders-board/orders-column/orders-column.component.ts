import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-orders-column',
  templateUrl: './orders-column.component.html',
  styleUrls: ['./orders-column.component.css']
})
export class OrdersColumnComponent {
   @Input() title: 'pending' | 'inProgress' | 'accepted' | 'notPaid' = 'pending';
   @Input() data: any[] = [];
}
