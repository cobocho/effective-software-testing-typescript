const isArray = <T>(arr: unknown): arr is Array<T> => Array.isArray(arr)

expect.extend({
  toBeSortedByDesc(actual) {
    if (!isArray<number>(actual)) {
      return {
        pass: false,
        message: () => 'toBeSortedByDesc only works with arrays',
      }
    }

    const sorted = [...actual].sort((a, b) => b - a)
    const pass = actual.every((v, i) => v === sorted[i])

    return {
      pass,
      message: () =>
        pass
          ? `expected ${actual.toString()} not to be sorted by desc`
          : `expected ${actual.toString()} to be sorted by desc`,
    }
  },
})
