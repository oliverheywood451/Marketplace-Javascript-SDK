
export interface LineItemStatusChange {
    ID?: string
    PreviousQuantities?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'Returned' | 'ReturnRequested'
    Reason?: string
    Comment?: string
}