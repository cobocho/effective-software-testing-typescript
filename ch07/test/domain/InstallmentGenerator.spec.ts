/* eslint-disable @typescript-eslint/unbound-method */
import { mock } from 'jest-mock-extended'

import { InstallmentRepository } from '../../main/domain/InstallmentRepository'
import { InstallmentGenerator } from '../../main/domain/InstallmentGenerator'
import { ShoppingCart } from '../../main/domain/ShoppingCart'

describe('InstallmentGenerator', () => {
  const repository = mock<InstallmentRepository>()

  it('checkInstallments', () => {
    const generator = new InstallmentGenerator(repository)

    const cart = new ShoppingCart(100)
    generator.generateInstallments(cart, 10)

    expect(repository.persist).toHaveBeenCalledTimes(10)

    const allInstallments = generator.getGeneratedInstallments()
    expect(allInstallments).toHaveLength(10)

    allInstallments.forEach((installment, idx) => {
      expect(installment.getValue()).toBe(10)
      const dueDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + idx + 1,
        new Date().getDate(),
      )
      expect(installment.getDate()).toEqual(dueDate)
    })
  })
})
