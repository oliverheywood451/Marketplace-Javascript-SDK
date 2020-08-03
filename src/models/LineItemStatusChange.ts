
export interface LineItemStatusChange {
    LineItemIDs?: string[]
    LineItemStatus?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'Returned' | 'ReturnRequested'
}