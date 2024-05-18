import { ShoppingCart } from '../domain/ShoppingCart'
import { DeliveryCenter } from '../ports/DeliveryCenter'

export class DeliveryCenterRestApi implements DeliveryCenter {
  public deliver(cart: ShoppingCart): Date {
    // all the code required to communicate
    // with the delivery API
    // and returns a LocalDate
    return new Date()
  }
}
