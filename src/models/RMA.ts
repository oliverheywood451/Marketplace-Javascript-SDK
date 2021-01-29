import { RMALineItem } from './RMALineItem';
import { RMALog } from './RMALog';
import { RMACredit } from './RMACredit';

export interface RMA {
    PartitionKey?: string
    RMANumber?: string
    SupplierID?: string
    Type?: 'Cancellation' | 'Return'
    DateCreated?: string
    Status?: 'Requested' | 'Denied' | 'Processing' | 'Complete' | 'Canceled'
    LineItems?: RMALineItem[]
    Logs?: RMALog[]
    CreditsApplied?: RMACredit[]
    FromBuyerID?: string
    FromBuyerUserID?: string
}