export class Product {
  public constructor(
    public name: string,
    public price: number,
  ) {
    name = this.name
    price = this.price
  }
}

export class Basket {
  private totalValue: number = 0

  private basket: Map<Product, number> = new Map()

  public add(product: Product, qtyToAdd: number): void {
    if (!product) {
      throw new Error('Product is required')
    }
    if (qtyToAdd <= 0) {
      throw new Error('Quantity has to be greater than zero')
    }

    const oldTotalValue: number = this.totalValue
    const existingQuantity: number = this.basket.get(product) || 0
    const newQuantity: number = existingQuantity + qtyToAdd
    this.basket.set(product, newQuantity)

    const valueAlreadyInTheCart: number = product.price * existingQuantity
    const newFinalValueForTheProduct: number = product.price * newQuantity

    this.totalValue =
      this.totalValue - valueAlreadyInTheCart + newFinalValueForTheProduct

    if (!this.basket.has(product)) {
      throw new Error('Product was not inserted in the basket')
    }

    if (this.totalValue <= oldTotalValue) {
      throw new Error('Total value should be greater than previous total value')
    }

    if (!this.invariant()) {
      throw new Error('Invariant does not hold')
    }
  }

  public remove(product: Product): void {
    if (!product) {
      throw new Error("Product can't be null")
    }
    if (!this.basket.has(product)) {
      throw new Error('Product must already be in the basket')
    }

    const qty: number = this.basket.get(product) || 0

    this.totalValue -= product.price * qty

    this.basket.delete(product)

    if (this.basket.has(product)) {
      throw new Error('Product is still in the basket')
    }
    if (!this.invariant()) {
      throw new Error('Invariant does not hold')
    }
  }

  public getTotalValue(): number {
    return this.totalValue
  }

  public quantityOf(product: Product): number {
    if (!this.basket.has(product)) {
      throw new Error('Product not found in basket')
    }
    return this.basket.get(product) || 0
  }

  public products() {
    return new Map(this.basket.entries())
  }

  private invariant(): boolean {
    return this.totalValue >= 0
  }
}
