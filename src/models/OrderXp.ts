import { QuoteOrderInfo } from './QuoteOrderInfo';
import { OrderReturnInfo } from './OrderReturnInfo';

export interface OrderXp {
    AvalaraTaxTransactionCode?: string
    ShipFromAddressIDs?: string[]
    SupplierIDs?: string[]
    NeedsAttention?: boolean
    StopShipSync?: boolean
    OrderType?: 'Standard' | 'Quote'
    QuoteOrderInfo?: QuoteOrderInfo
    OrderReturnInfo?: OrderReturnInfo
    Currency?: 'CAD' | 'HKD' | 'ISK' | 'PHP' | 'DKK' | 'HUF' | 'CZK' | 'GBP' | 'RON' | 'SEK' | 'IDR' | 'INR' | 'BRL' | 'RUB' | 'HRK' | 'JPY' | 'THB' | 'CHF' | 'EUR' | 'MYR' | 'BGN' | 'TRY' | 'CNY' | 'NOK' | 'NZD' | 'ZAR' | 'USD' | 'MXN' | 'SGD' | 'AUD' | 'ILS' | 'KRW' | 'PLN'
    ShippingStatus?: 'Shipped' | 'PartiallyShipped' | 'Cancelled' | 'Processing'
    LineItemStatus?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Cancelled' | 'Returned'
    ClaimStatus?: 'NoClaim' | 'Pending' | 'Complete'
}