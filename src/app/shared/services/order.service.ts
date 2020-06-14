import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.db.list('/orders');
  }
 
  getOrders1() { 
    return this.db.object('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }
  
  getOrderById(orderId: number) {
    // return this.db.object(`/orders/${orderId}`);
    debugger;
    return this.db.list('/orders', {
      query: {
        orderByChild: 'datePlaced',
        equalTo: orderId        
      }
    });
  }
}
