import { RMALineItem } from './RMALineItem';
import { RMALog } from './RMALog';
import { RMACredit } from './RMACredit';

export interface RMA {
    PartitionKey?: string
    SourceOrderNumber?: string
    RMANumber?: string
    SupplierID?: string
    Type?: 'Cancellation' | 'Return'
    DateCreated?: string
    DateComplete?: string
    Status?: 'Requested' | 'Denied' | 'Processing' | 'Approved' | 'Complete' | 'Canceled'
    LineItems?: RMALineItem[]
    Logs?: RMALog[]
    CreditsApplied?: RMACredit[]
    FromBuyerID?: string
    FromBuyerUserID?: string
}