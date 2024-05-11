import { StringUtils } from './substringBetween'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { substringsBetween } = StringUtils

describe('substringsBetween', () => {
  it('간단한 입력', () => {
    expect(substringsBetween('abcd', 'a', 'd')).toEqual(['bc'])
  })

  it('여러개의 입력', () => {
    expect(substringsBetween('abcdabcdab', 'a', 'd')).toEqual(['bc', 'bc'])
  })

  it('1글자보다 긴 open close 태그', () => {
    expect(substringsBetween('aabcddaabfddaab', 'aa', 'dd')).toEqual([
      'bc',
      'bf',
    ])
  })

  it('str이 null이거나 빈 문자열', () => {
    expect(substringsBetween(null, 'a', 'b')).toBeNull() // T1
    expect(substringsBetween('', 'a', 'b')).toEqual([]) // T2
  })

  it('open이 null이거나 빈 문자열', () => {
    expect(substringsBetween('abc', null, 'b')).toBeNull() // T3
    expect(substringsBetween('abc', '', 'b')).toBeNull() // T4
  })

  it('close가 null이거나 빈 문자열', () => {
    expect(substringsBetween('abc', 'a', null)).toBeNull() // T5
    expect(substringsBetween('abc', 'a', '')).toBeNull() // T6
  })

  it('str 길이가 1인 경우', () => {
    expect(substringsBetween('a', 'a', 'b')).toBeNull() // T7
    expect(substringsBetween('a', 'b', 'a')).toBeNull() // T8
    expect(substringsBetween('a', 'b', 'b')).toBeNull() // T9
    expect(substringsBetween('a', 'a', 'a')).toBeNull() // T10
  })

  it('open, close 길이가 1인 경우', () => {
    expect(substringsBetween('abc', 'x', 'y')).toBeNull() // T11
    expect(substringsBetween('abc', 'a', 'y')).toBeNull() // T12
    expect(substringsBetween('abc', 'x', 'c')).toBeNull() // T13
    expect(substringsBetween('abc', 'a', 'c')).toEqual(['b']) // T14
    expect(substringsBetween('abcabc', 'a', 'c')).toEqual(['b', 'b']) // T15
    expect(substringsBetween('abcabyt byrc', 'a', 'c')).toEqual([
      'b',
      'byt byr',
    ]) // T15
  })

  it('open, close 길이가 여러가지인 경우', () => {
    expect(substringsBetween('aabcc', 'xx', 'yy')).toBeNull() // T16
    expect(substringsBetween('aabcc', 'aa', 'yy')).toBeNull() // T17
    expect(substringsBetween('aabcc', 'xx', 'cc')).toBeNull() // T18
    expect(substringsBetween('aabbcc', 'aa', 'cc')).toEqual(['bb']) // T19
    expect(substringsBetween('aabbccaaeecc', 'aa', 'cc')).toEqual(['bb', 'ee']) // T20
    expect(substringsBetween('a abb ddc ca abbcc', 'a a', 'c c')).toEqual([
      'bb dd',
    ]) // T20
  })

  it('중간에 문자열이 없는 경우', () => {
    expect(substringsBetween('aabb', 'aa', 'bb')).toEqual(['']) // T21
  })
})
