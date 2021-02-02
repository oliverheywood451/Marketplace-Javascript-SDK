
export interface RMALog {
    Status?: 'Requested' | 'Denied' | 'Processing' | 'Approved' | 'Complete' | 'Canceled'
    Date?: string
    Comment?: string
    FromUserID?: string
}