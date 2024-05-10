import { Component } from '@angular/core';

@Component({
  selector: 'app-order-calender-board',
  templateUrl: './order-calender-board.component.html',
  styleUrls: ['./order-calender-board.component.css']
})
export class OrderCalenderBoardComponent {
  ORDERS_DATA = [
    {
      id: 1,
      order_id: 'yaqeen1',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users. They won\'t be looking for a save button or a search field over and over again.',
      status: 'pending'
    },
    {
      id: 2,
      order_id: 'yaqeen33',
      tags: [
        {
          tag: 'USA',
          color: 'primary'
        },
        {
          tag: 'Delivery',
          color: 'success'
        },
        {
          tag: 'In Order',
          color: 'warning'
        }
      ],
      status: 'accepted',
      location: 'Amman, c7th',
      brand: 'yaqeen',
      branch: 'yaqeen center'
    },
    {
      id: 3,
      order_id: 'yaqeen987',
      tags: [
        {
          tag: 'Warning',
          color: 'info'
        },
        {
          tag: 'Delivery',
          color: 'danger'
        },
        {
          tag: 'In Order',
          color: 'warning'
        }
      ],
      progress: 65,
      status: 'inProgress'
    },
    {
      id: 3,
      order_id: 'yaqeen987',
      tags: [
        {
          tag: 'Warning',
          color: 'info'
        },
        {
          tag: 'Delivery',
          color: 'danger'
        },
        {
          tag: 'In Order',
          color: 'warning'
        }
      ],
      remaining: 65,
      img: 'https://buzz16.com/wp-content/uploads/2016/01/Worth-Copying-Boho-Summer-Outfits-For-2016-2.jpg',
      status: 'notPaid'
    }
  ];

  pendingOrders = this.ORDERS_DATA.filter(o => o.status === 'pending');
  acceptedOrders = this.ORDERS_DATA.filter(o => o.status === 'accepted');
  inProgressOrders = this.ORDERS_DATA.filter(o => o.status === 'inProgress');
  notPaidOrders = this.ORDERS_DATA.filter(o => o.status === 'notPaid');

  row = [1, 2, 3];
}
