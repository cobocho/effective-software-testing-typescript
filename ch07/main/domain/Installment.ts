export class Installment {
  private readonly date: Date
  private readonly value: number

  public constructor(date: Date, value: number) {
    this.date = date
    this.value = value
  }

  public getValue(): number {
    return this.value
  }

  public getDate(): Date {
    return this.date
  }
}
