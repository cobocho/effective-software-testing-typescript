import {
  PlanningPoker,
  Estimate,
  IllegalArgumentException,
} from './planningPoker'

describe('PlanningPoker', () => {
  let planningPoker: PlanningPoker

  beforeEach(() => {
    planningPoker = new PlanningPoker()
  })

  it('null 입력을 거부한다.', () => {
    expect(() => planningPoker.identifyExtremes(null)).toThrow(
      IllegalArgumentException,
    )
  })

  it('빈 입력을 거부한다.', () => {
    const emptyList: Estimate[] = []
    expect(() => planningPoker.identifyExtremes(emptyList)).toThrow()
  })

  it('요소가 하나인 입력을 거부한다.', () => {
    const list: Estimate[] = [new Estimate('Eleanor', 1)]
    expect(() => planningPoker.identifyExtremes(list)).toThrow()
  })

  it('두개의 추정', () => {
    const list: Estimate[] = [
      new Estimate('Mauricio', 10),
      new Estimate('Frank', 5),
    ]

    const devs: string[] = planningPoker.identifyExtremes(list)

    expect(devs).toEqual(expect.arrayContaining(['Mauricio', 'Frank']))
  })

  it('여러개의 추정', () => {
    const list: Estimate[] = [
      new Estimate('Mauricio', 10),
      new Estimate('Arie', 5),
      new Estimate('Frank', 7),
    ]

    const devs: string[] = planningPoker.identifyExtremes(list)

    expect(devs).toEqual(expect.arrayContaining(['Mauricio', 'Arie']))
  })

  it('랜덤 추정', () => {
    function shuffle(array: unknown[]) {
      array.sort(() => Math.random() - 0.5)
    }

    function generateEstimate() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      let name = ''
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length)
        name += alphabet[randomIndex]
      }

      const value = Math.floor(Math.random() * (99 - 2 + 1)) + 2

      return new Estimate(name, value)
    }

    const list: Estimate[] = [
      new Estimate('최저 추정', 1),
      new Estimate('최대 추정', 100),
    ]

    for (let i = 0; i < 50; i++) {
      list.push(generateEstimate())
    }

    shuffle(list)

    const devs: string[] = planningPoker.identifyExtremes(list)

    expect(devs).toEqual(expect.arrayContaining(['최저 추정', '최대 추정']))
  })

  it('중복이 존재하는 추정', () => {
    const list: Estimate[] = [
      new Estimate('Mauricio', 10),
      new Estimate('Arie', 5),
      new Estimate('Andy', 10),
      new Estimate('Frank', 7),
      new Estimate('Annibale', 5),
    ]

    const devs: string[] = planningPoker.identifyExtremes(list)

    expect(devs).toEqual(expect.arrayContaining(['Mauricio', 'Arie']))
  })

  it('allDevelopersWithTheSameEstimate', () => {
    const list: Estimate[] = [
      new Estimate('Mauricio', 10),
      new Estimate('Arie', 10),
      new Estimate('Andy', 10),
      new Estimate('Frank', 10),
      new Estimate('Annibale', 10),
    ]

    const devs: string[] = planningPoker.identifyExtremes(list)

    expect(devs).toEqual([])
  })
})
