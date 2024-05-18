import { ShoppingCart } from '../domain/ShoppingCart';

export interface CustomerNotifier {
  sendEstimatedDeliveryNotification(cart: ShoppingCart): void;
}