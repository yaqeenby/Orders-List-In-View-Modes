import { Component } from '@angular/core';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css']
})
export class ActiveOrdersComponent {
  ORDERS_DATA = [
    {
      id: 1,
      order_id: 'yaqeen1',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users.',
      status: 'pending',
      location: 'Amman, c7th',
      brand: 'yaqeen',
      branch: 'yaqeen center',
      customer_id: 1,
      customer_name: 'ali baniyounes',
      customer_number: '962777412924',
      driver_id: 1,
      driver_name: 'abdullah baniyounes',
      driver_number: '962779436479',
      delivery_id: 1,
      delivery_name: 'talabat',
      img: '../../../assets/images/image1.jpg'
    },
    {
      id: 100,
      order_id: 'yaqeen90',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users. They won\'t be looking for a save button or a search field over and over again.',
      status: 'pending',
      location: 'Amman, c7th',
      brand: 'yaqeen',
      branch: 'yaqeen center',
      customer_id: 1,
      customer_name: 'ali baniyounes',
      customer_number: '962777412924',
      driver_id: 1,
      driver_name: 'abdullah baniyounes',
      driver_number: '962779436479',
      delivery_id: 1,
      delivery_name: 'talabat',
      img: '../../../assets/images/image2.jpeg'
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
      status: 'inProgress'
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
      img: 'https://buzz16.com/wp-content/uploads/2016/01/Worth-Copying-Boho-Summer-Outfits-For-2016-2.jpg',
      status: 'notPaid'
    }
  ];

  pendingOrders = this.ORDERS_DATA.filter(o => o.status === 'pending');
  acceptedOrders = this.ORDERS_DATA.filter(o => o.status === 'accepted');
  inProgressOrders = this.ORDERS_DATA.filter(o => o.status === 'inProgress');
  notPaidOrders = this.ORDERS_DATA.filter(o => o.status === 'notPaid');
}
