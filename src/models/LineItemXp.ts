import { LineItemClaim } from './LineItemClaim';

export interface LineItemXp {
    StatusByQuantity?: 'Complete' | 'Submitted' | 'Open' | 'Backordered' | 'Canceled' | 'CancelRequested' | 'Returned' | 'ReturnRequested'
    Returns?: LineItemClaim[]
    Cancelations?: LineItemClaim[]
    ImageUrl?: string
    PrintArtworkURL?: string
    KitProductImageUrl?: string
    KitProductID?: string
    KitProductName?: string
}