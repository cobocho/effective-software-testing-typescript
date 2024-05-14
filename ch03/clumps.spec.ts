import { Clumps } from './clumps'

describe('Clumps', () => {
  it.each([
    [[], 0], // empty
    [[1, 2, 2, 2, 1], 1], // one clump
    [[1], 0], // one element
    [[2, 2], 1], // example of a missing test case
  ])('countClumps(%p) should return %i', (nums, expectedNoOfClumps) => {
    expect(Clumps.countClumps(nums)).toBe(expectedNoOfClumps)
  })
})
