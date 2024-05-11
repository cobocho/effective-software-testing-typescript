export const StringUtils = {
  isEmpty(cs: string | null): boolean {
    return cs === null || cs.length === 0
  },

  substringsBetween(
    str: string | null,
    open: string | null,
    close: string | null,
  ): string[] | null {
    if (
      str === null ||
      open === null ||
      close === null ||
      StringUtils.isEmpty(open) ||
      StringUtils.isEmpty(close)
    ) {
      return null
    }

    const strLen: number = str.length

    if (strLen === 0) {
      return []
    }

    const closeLen: number = close.length
    const openLen: number = open.length
    const list: string[] = []
    let pos: number = 0

    while (pos < strLen - closeLen) {
      let start: number = str.indexOf(open, pos)
      if (start < 0) {
        break
      }
      start += openLen
      const end: number = str.indexOf(close, start)
      if (end < 0) {
        break
      }
      list.push(str.substring(start, end))
      pos = end + closeLen
    }

    if (list.length === 0) {
      return null
    }

    return list
  },
}
