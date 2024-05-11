export class CartItem {
  public constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }
}

export class ShoppingCart {
  private items: CartItem[] = []

  public add(item: CartItem): void {
    this.items.push(item)
  }

  public totalPrice(): number {
    let totalPrice: number = 0
    for (const item of this.items) {
      totalPrice += item.price * item.quantity
    }
    return totalPrice
  }
}
