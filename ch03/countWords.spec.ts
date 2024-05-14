import { CountWords } from './countWords'

describe('CountWords', () => {
  let counter: CountWords

  beforeEach(() => {
    counter = new CountWords()
  })

  it('s로 끝나는 단어 두가지', () => {
    const words = counter.count('dogs cats')
    expect(words).toBe(2)
  })

  it('r로 끝나는 단어 두가지', () => {
    const words = counter.count('car bar')
    expect(words).toBe(2)
  })

  it('단어가 없는 경우', () => {
    const words = counter.count('dog cat')
    expect(words).toBe(0)
  })
})
