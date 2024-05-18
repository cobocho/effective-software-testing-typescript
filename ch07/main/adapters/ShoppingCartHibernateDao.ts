import { ShoppingCart } from '../domain/ShoppingCart'
import { ShoppingCartRepository } from '../ports/ShoppingCartRepository'

export class ShoppingCartHibernateDao implements ShoppingCartRepository {
  public cartsPaidToday(): ShoppingCart[] {
    // a hibernate query to get the list of all
    // invoices that were paid today
    return [new ShoppingCart(1000)]
  }

  public persist(cart: ShoppingCart): void {
    // a hibernate code to persist the cart
    // in the database
  }
}
