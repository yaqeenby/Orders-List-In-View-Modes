import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit{
    @Input() status: 'pending' | 'inProgress' | 'accepted' | 'notPaid' = 'pending';
    @Input() data: any;
    @Input() collapseDetails: boolean = false;
    @Input() showColor: boolean = false;
    @Input() showBorder: boolean = true;
    @Input() hasShadow: boolean = true;
    expanded: boolean = true;

    ngOnInit() {
        this.expanded = !this.collapseDetails;
    }

  expand(){
     this.expanded = true;
    }

    collapse(){
      this.expanded = false;
    }
}
