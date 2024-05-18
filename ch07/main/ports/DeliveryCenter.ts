import { ShoppingCart } from '../domain/ShoppingCart';

export interface DeliveryCenter {
  deliver(cart: ShoppingCart): Date;
}