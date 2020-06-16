import { LineItemReturnInfo } from './LineItemReturnInfo';

export interface LineItemXp {
    LineItemStatus?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Cancelled' | 'Returned'
    LineItemReturnInfo?: LineItemReturnInfo
    LineItemImageUrl?: string
    UnitPriceInProductCurrency?: number
}