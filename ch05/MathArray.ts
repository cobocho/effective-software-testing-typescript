export class MathArrays {
  public static unique(data: number[] | null): number[] {
    if (data === null) {
      throw new Error('data is null')
    }

    const values: Set<number> = new Set<number>(data)
    const sortedValues: number[] = Array.from(values).sort((a, b) => b - a)
    return sortedValues
  }
}
