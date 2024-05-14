class Product {
  public id: number

  public price: number

  // ...
}

class Basket {
  public products: Product[] = []

  public totalValue = 0

  private invariants() {
    if (this.totalValue < 0) {
      throw new Error('Total value must be greater than or equal to 0')
    }
  }

  public add(product: Product, qtyToAdd: number) {
    if (product == null) {
      throw new Error('Product is required')
    }
    if (qtyToAdd <= 0) {
      throw new Error('Quantity must be greater than 0')
    }
    const oldTotalValue = this.totalValue

    // 제품 추가 & 합계 갱신

    if (oldTotalValue === this.totalValue) {
      throw new Error('Product does not exist in basket')
    }
    this.invariants()
  }

  public remove(product: Product) {
    if (product == null) {
      throw new Error('Product is required')
    }
    if (!this.products.find((p) => p.id === product.id) == null) {
      throw new Error('Product does not exist in basket')
    }
    // ...

    if (this.products.find((p) => p.id === product.id)) {
      throw new Error('Product does exist in basket')
    }
    if (this.totalValue <= 0) {
      throw new Error('Total value must be greater than 0')
    }
    this.invariants()
  }
}
