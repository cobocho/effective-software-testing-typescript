import { ShoppingCart, CartItem } from './shoppingCart'

describe('ShoppingCart', () => {
  let cart: ShoppingCart

  beforeEach(() => {
    cart = new ShoppingCart()
  })

  test('아이템이 없는 경우', () => {
    expect(cart.totalPrice()).toEqual(0)
  })

  test('아이템이 있는 경우', () => {
    cart.add(new CartItem('TV', 1, 120))
    expect(cart.totalPrice()).toEqual(120)

    cart.add(new CartItem('Chocolate', 2, 2.5))
    expect(cart.totalPrice()).toEqual(120 + 2.5 * 2)
  })
})
