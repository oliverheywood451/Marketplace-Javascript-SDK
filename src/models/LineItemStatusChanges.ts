import { LineItemStatusChange } from './LineItemStatusChange';
import { SuperHSShipment } from './SuperHSShipment';

export interface LineItemStatusChanges {
    Status?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'CancelDenied' | 'Returned' | 'ReturnRequested' | 'ReturnDenied'
    Changes?: LineItemStatusChange[]
    SuperShipment?: SuperHSShipment
}