import { LineItemReturnInfo } from './LineItemReturnInfo';

export interface LineItemXp {
    LineItemStatus?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'Returned' | 'ReturnRequested'
    LineItemReturnInfo?: LineItemReturnInfo
    LineItemImageUrl?: string
    UnitPriceInProductCurrency?: number
}