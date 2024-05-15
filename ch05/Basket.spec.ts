import { fc, it } from '@fast-check/jest'

import { Basket, Product } from './Basket'

const addAction = (basket: Basket, product: Product, qty: number) => {
  const currentValue = basket.getTotalValue()

  basket.add(product, qty)

  const newProductValue = product.price * qty
  const newValue = currentValue + newProductValue

  expect(basket.getTotalValue()).toBe(newValue)
}

const removeAction = (basket: Basket) => {
  const currentValue = basket.getTotalValue()
  const products = basket.products()

  if (products.size === 0) {
    return
  }

  const randomProduct = Array.from(products.keys())[
    Math.floor(Math.random() * products.size)
  ]
  const currentProductQty = basket.quantityOf(randomProduct)
  basket.remove(randomProduct)

  const basketValueWithoutRandomProduct =
    currentValue - randomProduct.price * currentProductQty

  expect(basket.getTotalValue()).toBe(basketValueWithoutRandomProduct)
}

describe('Basket', () => {
  const randomProduct = [
    new Product('TV', 100),
    new Product('Playstation', 150),
    new Product('Refrigerator', 180),
    new Product('Soda', 2),
  ]

  const basket = new Basket()

  it.prop([
    fc.array(fc.constantFrom(addAction, removeAction), { minLength: 10 }),
    fc.constantFrom(...randomProduct),
    fc.integer({ min: 1, max: 100 }),
  ])('add and remove', (actions, products, qty) => {
    actions.forEach((action) => {
      action(basket, products, qty)
    })
  })
})
