import { Installment } from './Installment'

export interface InstallmentRepository {
  persist(installment: Installment): void
}
