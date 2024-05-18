import { DeliveryCenterRestApi } from '../adapters/DeliveryCenterRestApi'
import { SAPSoapWebService } from '../adapters/SAPSoapWebService'
import { ShoppingCartHibernateDao } from '../adapters/ShoppingCartHibernateDao'
import { SMTPCustomerNotifier } from '../adapters/SMTPCustomerNotifier'

export class VeryBadPaidShoppingCartsBatch {
  public processAll(): void {
    const db = new ShoppingCartHibernateDao()
    const paidShoppingCarts = db.cartsPaidToday()

    for (const cart of paidShoppingCarts) {
      const deliveryCenter = new DeliveryCenterRestApi()
      const estimatedDayOfDelivery = deliveryCenter.deliver(cart)

      cart.markAsReadyForDelivery(estimatedDayOfDelivery)
      db.persist(cart)

      const notifier = new SMTPCustomerNotifier()
      notifier.sendEstimatedDeliveryNotification(cart)

      const sap = new SAPSoapWebService()
      sap.cartReadyForDelivery(cart)
    }
  }
}
