
export interface RMALog {
    Status?: 'Requested' | 'Denied' | 'Processing' | 'Complete' | 'Canceled'
    Date?: string
    Comment?: string
    FromUserID?: string
}