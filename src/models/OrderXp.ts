import { QuoteOrderInfo } from './QuoteOrderInfo';
import { OrderReturnInfo } from './OrderReturnInfo';
import { OrderCancelInfo } from './OrderCancelInfo';

export interface OrderXp {
    AvalaraTaxTransactionCode?: string
    ShipFromAddressIDs?: string[]
    SupplierIDs?: string[]
    NeedsAttention?: boolean
    StopShipSync?: boolean
    OrderType?: 'Standard' | 'Quote'
    QuoteOrderInfo?: QuoteOrderInfo
    OrderReturnInfo?: OrderReturnInfo
    OrderCancelInfo?: OrderCancelInfo
    Currency?: 'CAD' | 'HKD' | 'ISK' | 'PHP' | 'DKK' | 'HUF' | 'CZK' | 'GBP' | 'RON' | 'SEK' | 'IDR' | 'INR' | 'BRL' | 'RUB' | 'HRK' | 'JPY' | 'THB' | 'CHF' | 'EUR' | 'MYR' | 'BGN' | 'TRY' | 'CNY' | 'NOK' | 'NZD' | 'ZAR' | 'USD' | 'MXN' | 'SGD' | 'AUD' | 'ILS' | 'KRW' | 'PLN'
    ShippingStatus?: 'Shipped' | 'PartiallyShipped' | 'Canceled' | 'Processing' | 'Backordered'
    ClaimStatus?: 'NoClaim' | 'Pending' | 'Complete'
}