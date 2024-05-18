import { ShoppingCart } from '../domain/ShoppingCart'
import { CustomerNotifier } from '../ports/CustomerNotifier'

export class SMTPCustomerNotifier implements CustomerNotifier {
  public sendEstimatedDeliveryNotification(cart: ShoppingCart): void {
    // all the required code to
    // send an email via SMTP
  }
}
