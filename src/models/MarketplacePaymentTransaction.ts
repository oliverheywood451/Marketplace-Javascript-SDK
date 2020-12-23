import { TransactionXP } from './TransactionXP';

export interface MarketplacePaymentTransaction {
    xp?: TransactionXP
    ID?: string
    Type?: string
    DateExecuted?: string
    Amount?: number
    Succeeded?: boolean
    ResultCode?: string
    ResultMessage?: string
}