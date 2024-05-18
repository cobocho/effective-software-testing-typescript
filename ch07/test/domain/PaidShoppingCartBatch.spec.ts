/* eslint-disable @typescript-eslint/unbound-method */
import { mock } from 'jest-mock-extended'

import { PaidShoppingCartsBatch } from '../../main/domain/PaidShoppingCartsBatch'
import { CustomerNotifier } from '../../main/ports/CustomerNotifier'
import { DeliveryCenter } from '../../main/ports/DeliveryCenter'
import { SAP } from '../../main/ports/SAP'
import { ShoppingCartRepository } from '../../main/ports/ShoppingCartRepository'
import { ShoppingCart } from '../../main/domain/ShoppingCart'

describe('PaidShoppingCartsBatch', () => {
  const db = mock<ShoppingCartRepository>()
  const deliveryCenter = mock<DeliveryCenter>()
  const notifier = mock<CustomerNotifier>()
  const sap = mock<SAP>()

  it('should process all paid shopping carts', () => {
    const batch = new PaidShoppingCartsBatch(db, deliveryCenter, notifier, sap)

    const someCart = new ShoppingCart(100)
    const someDate = new Date()

    db.cartsPaidToday.mockReturnValue([someCart])
    deliveryCenter.deliver.mockReturnValue(someDate)

    batch.processAll()

    expect(deliveryCenter.deliver).toHaveBeenCalledWith(someCart)
    expect(notifier.sendEstimatedDeliveryNotification).toHaveBeenCalledWith(
      someCart,
    )
    expect(db.persist).toHaveBeenCalledWith(someCart)
    expect(sap.cartReadyForDelivery).toHaveBeenCalledWith(someCart)
    expect(someCart.isReadyForDelivery()).toBe(true)
  })
})
