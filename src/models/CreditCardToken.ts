import { Address } from './Address';

export interface CreditCardToken {
    AccountNumber?: string
    ExpirationDate?: string
    CardholderName?: string
    CardType?: string
    CCBilingAddress?: Address
}