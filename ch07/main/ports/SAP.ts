import { ShoppingCart } from '../domain/ShoppingCart';

export interface SAP {
  cartReadyForDelivery(cart: ShoppingCart): void;
}