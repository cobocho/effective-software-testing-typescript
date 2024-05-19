import { RomanNumeralConverter } from './RomanNumeralConverter'

describe('RomanNumeralConverter', () => {
  it.each([
    { numberInRoman: 'I', expected: 1 },
    { numberInRoman: 'V', expected: 5 },
    { numberInRoman: 'X', expected: 10 },
  ])(`sould uneders stand Symbol`, ({ numberInRoman, expected }) => {
    const converter = new RomanNumeralConverter()

    const result = converter.convert(numberInRoman)

    expect(result).toBe(expected)
  })

  it.each([
    { numberInRoman: 'II', expected: 2 },
    { numberInRoman: 'III', expected: 3 },
    { numberInRoman: 'VI', expected: 6 },
    { numberInRoman: 'XVIII', expected: 18 },
    { numberInRoman: 'XXIII', expected: 23 },
    { numberInRoman: 'DCCLXVI', expected: 766 },
  ])(
    'should under stand multiple char numbers',
    ({ numberInRoman, expected }) => {
      const converter = new RomanNumeralConverter()

      const result = converter.convert(numberInRoman)

      expect(result).toBe(expected)
    },
  )

  it.each([
    { numberInRoman: 'IV', expected: 4 },
    { numberInRoman: 'XIV', expected: 14 },
    { numberInRoman: 'XL', expected: 40 },
    { numberInRoman: 'XLI', expected: 41 },
    { numberInRoman: 'CCXCIV', expected: 294 },
  ])(
    'should under stand subtractive notation',
    ({ numberInRoman, expected }) => {
      const converter = new RomanNumeralConverter()

      const result = converter.convert(numberInRoman)

      expect(result).toBe(expected)
    },
  )
})
