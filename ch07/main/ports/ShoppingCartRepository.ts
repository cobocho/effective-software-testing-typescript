import { ShoppingCart } from '../domain/ShoppingCart';

export interface ShoppingCartRepository {
  cartsPaidToday(): ShoppingCart[];
  persist(cart: ShoppingCart): void;
}