export class Clumps {
  public static countClumps(nums: number[]): number {
    if (!nums || nums.length === 0) {
      return 0
    }

    let count: number = 0
    let prev: number = nums[0]
    let inClump: boolean = false

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === prev && !inClump) {
        inClump = true
        count += 1
      }
      if (nums[i] !== prev) {
        prev = nums[i]
        inClump = false
      }
    }

    return count
  }
}
