import { gen } from 'fast-check'

import { InstallmentRepository } from './InstallmentRepository'
import { ShoppingCart } from './ShoppingCart'
import { Installment } from './Installment'

export class InstallmentGenerator {
  private repository: InstallmentRepository

  private generatedInstallments: Installment[] = []

  public constructor(repository: InstallmentRepository) {
    this.repository = repository
  }

  public generateInstallments(
    cart: ShoppingCart,
    numberOfInstallments: number,
  ): void {
    let nextInstallmentDueDate = new Date()
    const amountPerInstallment: number = cart.getValue() / numberOfInstallments

    for (let i = 1; i <= numberOfInstallments; i++) {
      nextInstallmentDueDate = new Date(
        nextInstallmentDueDate.getFullYear(),
        nextInstallmentDueDate.getMonth() + 1,
        nextInstallmentDueDate.getDate(),
      )

      const newInstallment = new Installment(
        nextInstallmentDueDate,
        amountPerInstallment,
      )

      this.generatedInstallments.push(newInstallment)
      this.repository.persist(newInstallment)
    }
  }

  public getGeneratedInstallments() {
    return this.generatedInstallments
  }
}
