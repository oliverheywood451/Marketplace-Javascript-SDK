import { LineItemReturnInfo } from './LineItemReturnInfo';
import { LineItemCancelInfo } from './LineItemCancelInfo';

export interface LineItemXp {
    LineItemStatus?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'Returned' | 'ReturnRequested'
    LineItemReturnInfo?: LineItemReturnInfo
    LineItemCancelInfo?: LineItemCancelInfo
    LineItemImageUrl?: string
}