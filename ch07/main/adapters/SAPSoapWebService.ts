import { ShoppingCart } from '../domain/ShoppingCart'
import { SAP } from '../ports/SAP'

export class SAPSoapWebService implements SAP {
  public cartReadyForDelivery(cart: ShoppingCart): void {}
}
