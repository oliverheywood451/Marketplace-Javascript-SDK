import { QuoteOrderInfo } from './QuoteOrderInfo';

export interface OrderXp {
    AvalaraTaxTransactionCode?: string
    ShipFromAddressIDs?: string[]
    SupplierIDs?: string[]
    NeedsAttention?: boolean
    StopShipSync?: boolean
    OrderType?: 'Standard' | 'Quote'
    QuoteOrderInfo?: QuoteOrderInfo
}