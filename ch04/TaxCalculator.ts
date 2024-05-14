/**
 * 세금 계산기
 * @description 세금 계산을 위한 클래스
 */
export class TaxCalculator {
  /**
   * 세금 계산
   * @param value 세금 계산 대상 금액, 값은 양수여야 한다.
   * @returns 세금 계산 결과, 값은 양수여야 한다.
   */
  public calculateTax(value: number): number {
    // 사전 조건
    if (value < 0) {
      throw new Error('Value has to be positive')
    }

    // ...

    // 사후 조건
    const taxValue = value * 0.1
    if (taxValue < 0) {
      throw new Error('Calculated tax cannot be negative')
    }

    return taxValue
  }
}
