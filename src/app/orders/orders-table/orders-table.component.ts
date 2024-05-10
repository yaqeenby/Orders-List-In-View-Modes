import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
  styles: [

    `
      .orders-grid {
            grid-template-columns: 10% 10% auto 20% 20% 20% 5%;

          /*@screen [min-widht: 30] {*/
          /*  grid-template-columns: 5% 20% 20% 10% 10% 10% 10%;*/
          /*}*/

          /*@screen md {*/
          /*  grid-template-columns: 5% 20% 20% 15% 15% 10% 10%;*/
          /*}*/

          /*@screen lg {*/
          /*  grid-template-columns: 5% 20% 20% 15% 15% 10% 10%;*/
          /*}*/
      }
    `
  ]
})
export class OrdersTableComponent {
  ORDERS_DATA = [
    {
      id: 1,
      order_id: 'LT1',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users.',
      status: 'pending',
      location: 'Amman, c7th',
      brand: 'Looney Tunes',
      branch: 'yaqeen center',
      customer_id: 1,
      customer_name: 'ali baniyounes',
      customer_number: '962777412924',
      driver_id: 1,
      driver_name: 'abdullah baniyounes',
      driver_number: '962779436479',
      delivery_id: 1,
      delivery_name: 'talabat',
      img: '../../../assets/images/image1.jpg',
      current_phase: 'Need Review'
    },
    {
      id: 100,
      order_id: 'Ss1',
      description: 'Making the general design and layout of your pages similar will make them easier to learn for your users. They won\'t be looking for a save button or a search field over and over again.',
      status: 'pending',
      location: 'Amman, c7th',
      brand: 'Simpsons',
      branch: 'yaqeen center',
      customer_id: 1,
      customer_name: 'ali baniyounes',
      customer_number: '962777412924',
      driver_id: 1,
      driver_name: 'abdullah baniyounes',
      driver_number: '962779436479',
      delivery_id: 1,
      delivery_name: 'talabat',
      img: '../../../assets/images/image2.jpeg',
      current_phase: 'Need Review'
    },
    {
      id: 2,
      order_id: 'SG1',
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
      brand: 'Soylent Green',
      branch: 'yaqeen center',
      current_phase: 'Order Accepted'
    },
    {
      id: 3,
      order_id: 'OS1',
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
      brand: 'Office Space',
      progress: 80,
      status: 'inProgress',
      location: 'Irbid, BaytYafa',
      current_phase: 'preparation now..'
    },
    {
      id: 300,
      order_id: 'RE1',
      description: 'Yaqeen baniyounes order',
      progress: 40,
      status: 'inProgress',
      brand: 'Resident Evil',
      location: 'Amman, lwaibdeh',
      current_phase: 'finished soon..',
      img: '../../../assets/images/image5.jpg',
    },
    {
      id: 360,
      order_id: 'SV1',
      description: 'Yaqeen baniyounes order',
      progress: 10,
      status: 'inProgress',
      location: 'Irbid, Swafieh mall',
      brand: 'Silicon Valley',
      current_phase: 'preparation now..',
      img: '../../../assets/images/image6.jpg',
    },
    {
      id: 3,
      order_id: 'WS1',
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
      location: 'Amman, c7th',
      remaining: 65,
      brand: 'Weeds',
      img: '../../../assets/images/image7.jpg',
      status: 'notPaid'
    }
  ];

  pendingOrders = this.ORDERS_DATA.filter(o => o.status === 'pending');
  acceptedOrders = this.ORDERS_DATA.filter(o => o.status === 'accepted');
  inProgressOrders = this.ORDERS_DATA.filter(o => o.status === 'inProgress');
  notPaidOrders = this.ORDERS_DATA.filter(o => o.status === 'notPaid');
}
