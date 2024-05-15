export class ArrayUtils {
  public static indexOf(
    array: number[] | null,
    valueToFind: number,
    startIndex: number,
  ): number {
    if (array === null) {
      return -1
    }
    if (startIndex < 0) {
      startIndex = 0
    }
    for (let i = startIndex; i < array.length; i++) {
      if (valueToFind === array[i]) {
        return i
      }
    }
    return -1
  }
}
