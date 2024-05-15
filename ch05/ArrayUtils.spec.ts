import { fc, it } from '@fast-check/jest'

import { ArrayUtils } from './ArrayUtils'

describe('ArrayUtils', () => {
  it.prop([
    fc.uniqueArray(
      fc.integer({
        min: -1000,
        max: 1000,
      }),
      {
        minLength: 100,
        maxLength: 100,
      },
    ),
    fc.integer({
      min: 1001,
      max: 2000,
    }),
    fc.nat(99),
    fc.nat(99),
  ])(
    'indexOf는 항상 첫번째 값을 찾아낸다.',
    (numbers, value, indexToAddElement, startIndex) => {
      numbers.splice(indexToAddElement, 0, value)

      const expectedIndex =
        indexToAddElement >= startIndex ? indexToAddElement : -1

      expect(ArrayUtils.indexOf(numbers, value, startIndex)).toBe(expectedIndex)
    },
  )
})
