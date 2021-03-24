import { RMALineItem } from './RMALineItem';
import { RMALog } from './RMALog';

export interface RMA {
    PartitionKey?: string
    SourceOrderID?: string
    TotalCredited?: number
    RMANumber?: string
    SupplierID?: string
    Type?: 'Cancellation' | 'Return'
    DateCreated?: string
    DateComplete?: string
    Status?: 'Requested' | 'Denied' | 'Processing' | 'Approved' | 'Complete'
    LineItems?: RMALineItem[]
    Logs?: RMALog[]
    FromBuyerID?: string
    FromBuyerUserID?: string
}