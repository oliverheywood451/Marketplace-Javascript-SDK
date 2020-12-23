import { PaymentXP } from './PaymentXP';
import { MarketplacePaymentTransaction } from './MarketplacePaymentTransaction';

export interface MarketplacePayment {
    xp?: PaymentXP
    readonly Transactions?: MarketplacePaymentTransaction[]
    ID?: string
    Type?: 'PurchaseOrder' | 'CreditCard' | 'SpendingAccount'
    readonly DateCreated?: string
    CreditCardID?: string
    SpendingAccountID?: string
    Description?: string
    Amount?: number
    Accepted?: boolean
}