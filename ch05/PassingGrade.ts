export class PassingGrade {
  public static passed(grade: number): boolean {
    if (grade < 1 || grade > 10) {
      throw new Error('Invalid grade. Grade must be between 1 and 10.')
    }
    return grade > 5
  }
}
