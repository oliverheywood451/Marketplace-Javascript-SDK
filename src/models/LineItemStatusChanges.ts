import { LineItemStatusChange } from './LineItemStatusChange';

export interface LineItemStatusChanges {
    Status?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'Returned' | 'ReturnRequested'
    Changes?: LineItemStatusChange[]
}