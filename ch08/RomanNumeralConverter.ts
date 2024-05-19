export class RomanNumeralConverter {
  public static table: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  public convert(numberInRoman: string): number {
    let finalNumber = 0
    let lastNeighbour = 0

    for (let i = numberInRoman.length - 1; i >= 0; i--) {
      const current = RomanNumeralConverter.table[numberInRoman[i]]

      let multiplier = 1

      if (current < lastNeighbour) {
        multiplier = -1
      }

      finalNumber += current * multiplier

      lastNeighbour = current
    }

    return finalNumber
  }
}
