
export interface RMALineItem {
    ID?: string
    Status?: 'Requested' | 'Processing' | 'RequestCanceled' | 'Approved' | 'Denied' | 'PartialQtyApproved'
    Reason?: string
    Comment?: string
    IsResolved?: boolean
}