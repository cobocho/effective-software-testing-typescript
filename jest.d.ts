import { MatcherFunction } from 'expect'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeSortedByDesc: () => R
    }

    interface ExpectExtendMap {
      toBeSortedByDesc: MatcherFunction
    }
  }
}
