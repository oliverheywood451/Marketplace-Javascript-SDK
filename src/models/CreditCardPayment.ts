import { CreditCardToken } from './CreditCardToken';

export interface CreditCardPayment {
    OrderID?: string
    PaymentID?: string
    CreditCardID?: string
    CreditCardDetails?: CreditCardToken
    Currency?: string
    CVV?: string
    MerchantID?: string
}