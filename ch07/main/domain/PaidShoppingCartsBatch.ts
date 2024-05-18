import { DeliveryCenter } from '../ports/DeliveryCenter'
import { CustomerNotifier } from '../ports/CustomerNotifier'
import { SAP } from '../ports/SAP'
import { ShoppingCartRepository } from '../ports/ShoppingCartRepository'

import { ShoppingCart } from './ShoppingCart'

export class PaidShoppingCartsBatch {
  private db: ShoppingCartRepository
  private deliveryCenter: DeliveryCenter
  private notifier: CustomerNotifier
  private sap: SAP

  public constructor(
    db: ShoppingCartRepository,
    deliveryCenter: DeliveryCenter,
    notifier: CustomerNotifier,
    sap: SAP,
  ) {
    this.db = db
    this.deliveryCenter = deliveryCenter
    this.notifier = notifier
    this.sap = sap // 1
  }

  public processAll(): void {
    const paidShoppingCarts: Array<ShoppingCart> = this.db.cartsPaidToday()

    for (const cart of paidShoppingCarts) {
      // 2
      const estimatedDayOfDelivery: Date = this.deliveryCenter.deliver(cart) // 3

      cart.markAsReadyForDelivery(estimatedDayOfDelivery)
      this.db.persist(cart) // 4

      this.notifier.sendEstimatedDeliveryNotification(cart) // 5

      this.sap.cartReadyForDelivery(cart) // 6
    }
  }
}
