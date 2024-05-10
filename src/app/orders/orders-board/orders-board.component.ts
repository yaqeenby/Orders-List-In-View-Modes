import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})
export class OrdersBoardComponent {
  ORDERS_DATA = [
    {
      id: 1,
      order_id: 'yaqeen1',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users. They won\'t be looking for a save button or a search field over and over again.',
      status: 'pending'
    },
    {
      id: 100,
      order_id: 'yaqeen90',
      description: 'Making the general design and layout of your pages.',
      status: 'pending',
      location: 'Amman, c7th',
      brand: 'yaqeen',
      branch: 'yaqeen center'
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
      progress: 80,
      status: 'inProgress',
      img: '../../../assets/images/image7.jpg'
    },
    {
      id: 300,
      order_id: 'yaqeen300',
      description: 'Yaqeen baniyounes order',
      progress: 40,
      status: 'inProgress'
    },
    {
      id: 360,
      order_id: 'yaqeen376',
      description: 'Yaqeen baniyounes order',
      progress: 10,
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
      img: '../../../assets/images/image5.jpg',
      status: 'notPaid'
    },
    {
      id: 3999,
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
      img: '../../../assets/images/image1.jpg',
      status: 'notPaid2'
    }
  ];

  pendingOrders = this.ORDERS_DATA.filter(o => o.status === 'pending');
  acceptedOrders = this.ORDERS_DATA.filter(o => o.status === 'accepted');
  inProgressOrders = this.ORDERS_DATA.filter(o => o.status === 'inProgress');
  notPaidOrders = this.ORDERS_DATA.filter(o => o.status === 'notPaid');
  notPaidOrders2 = this.ORDERS_DATA.filter(o => o.status === 'notPaid2');
}
