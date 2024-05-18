export class ShoppingCart {
  private readyForDelivery: boolean = false
  private value: number = 0

  public constructor(value: number) {
    this.value = value
  }

  public markAsReadyForDelivery(estimatedDayOfDelivery: Date): void {
    this.readyForDelivery = true
  }

  public isReadyForDelivery(): boolean {
    return this.readyForDelivery
  }

  public getValue(): number {
    return this.value
  }
}
