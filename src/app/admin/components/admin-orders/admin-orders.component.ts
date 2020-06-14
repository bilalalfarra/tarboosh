import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  orders1$;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
    this.orders1$ = orderService.getOrders1();
  }
}
