import { fc, it } from '@fast-check/jest'

import { MathArrays } from './MathArray'

describe('MathUtils', () => {
  it.prop([
    fc.array(
      fc.integer({
        min: 0,
        max: 100,
      }),
      {
        minLength: 50,
      },
    ),
  ])('test', (nums) => {
    const result = MathArrays.unique(nums)
    expect(nums).toEqual(expect.arrayContaining(result))
    expect(result.length).toBe(new Set(nums).size)
    expect(result).toBeSortedByDesc()
  })
})
