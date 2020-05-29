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
    Currency?: string
}