import { fc, it } from '@fast-check/jest'

import { PassingGrade } from './PassingGrade'

describe('PassingGrade', () => {
  it.prop([fc.float({ min: 1, max: 5, maxExcluded: true, noNaN: true })])(
    'fail',
    (grade) => {
      const result = PassingGrade.passed(grade)
      expect(result).toBe(false)
    },
  )

  it.prop([fc.float({ min: 5, max: 10, noNaN: true })])('pass', (grade) => {
    const result = PassingGrade.passed(grade)
    expect(result).toBe(true)
  })

  it.prop([
    fc.double({
      min: Number.MIN_SAFE_INTEGER,
      max: 1,
      maxExcluded: true,
      noNaN: true,
    }),
    fc.double({
      min: 10,
      max: Number.MAX_SAFE_INTEGER,
      minExcluded: true,
      noNaN: true,
    }),
  ])('invalid', (grade) => {
    expect(() => {
      PassingGrade.passed(grade)
    }).toThrow()
  })
})
