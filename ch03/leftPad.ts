export class LeftPadUtils {
  private static readonly SPACE: string = ' '

  public static leftPad(
    str: string | null,
    size: number,
    padStr: string = LeftPadUtils.SPACE,
  ): string | null {
    if (str === null) {
      return null
    }

    if (padStr === '') {
      padStr = LeftPadUtils.SPACE
    }

    const padLen: number = padStr.length
    const strLen: number = str.length
    const pads: number = size - strLen

    if (pads <= 0) {
      return str // returns original string when possible
    }

    if (pads === padLen) {
      return padStr.concat(str)
    } else if (pads < padLen) {
      return padStr.substring(0, pads).concat(str)
    } else {
      const padding: string =
        padStr.repeat(Math.floor(pads / padLen)) +
        padStr.substring(0, pads % padLen)
      return padding.concat(str)
    }
  }
}
