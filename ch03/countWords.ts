export class CountWords {
  public count(str: string): number {
    let words: number = 0
    let last: string = ' '

    for (let i = 0; i < str.length; i++) {
      if (!this.isLetter(str.charAt(i)) && (last === 's' || last === 'r')) {
        words++
      }
      last = str.charAt(i)
    }

    if (last === 'r') {
      words++
    }

    if (last === 's') {
      words++
    }

    return words
  }

  private isLetter(char: string): boolean {
    return /^[a-zA-Z]$/.test(char)
  }
}
