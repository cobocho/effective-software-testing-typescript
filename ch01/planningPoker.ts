export class Estimate {
  public constructor(
    public developer: string,
    public estimate: number,
  ) {
    this.developer = developer
    this.estimate = estimate
  }
}

export class IllegalArgumentException extends Error {}

export class PlanningPoker {
  public identifyExtremes(estimates: Estimate[] | null): string[] {
    if (!estimates) {
      throw new IllegalArgumentException("Estimates can't be null")
    }
    if (estimates.length <= 1) {
      throw new IllegalArgumentException(
        'There has to be more than 1 estimate in the list',
      )
    }

    let lowestEstimate: Estimate | null = null
    let highestEstimate: Estimate | null = null

    for (const estimate of estimates) {
      if (!highestEstimate || estimate.estimate > highestEstimate.estimate) {
        highestEstimate = estimate
      }
      if (!lowestEstimate || estimate.estimate < lowestEstimate.estimate) {
        lowestEstimate = estimate
      }
    }

    if (lowestEstimate === highestEstimate) {
      return []
    }

    return [lowestEstimate!.developer, highestEstimate!.developer]
  }
}
