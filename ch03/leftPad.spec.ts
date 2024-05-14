import { LeftPadUtils } from './leftPad'

describe('LeftPadUtils', () => {
  it.each([
    [null, 10, '-', null], // T1
    ['', 5, '-', '-----'], // T2
    ['abc', -1, '-', 'abc'], // T3
    ['abc', 5, undefined, '  abc'], // T4
    ['abc', 5, '', '  abc'], // T5
    ['abc', 5, '-', '--abc'], // T6
    ['abc', 3, '-', 'abc'], // T7
    ['abc', 0, '-', 'abc'], // T8
    ['abc', 2, '-', 'abc'], // T9
    ['abc', 5, '--', '--abc'], // T10
    ['abc', 5, '---', '--abc'], // T11
    ['abc', 5, '-', '--abc'], // T12
  ])(
    'leftPad("%s", %i, "%s") should return "%s"',
    (originalStr, size, padString, expectedStr) => {
      expect(LeftPadUtils.leftPad(originalStr, size, padString)).toBe(
        expectedStr,
      )
    },
  )

  it('leftPad should return the same instance if padding is not required', () => {
    const str = 'sometext'
    expect(LeftPadUtils.leftPad(str, 5, '-')).toBe(str)
  })
})
