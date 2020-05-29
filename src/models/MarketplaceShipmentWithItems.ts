import { MarketplaceShipmentItemWithLineItem } from './MarketplaceShipmentItemWithLineItem';
import { Address } from './Address';

export interface MarketplaceShipmentWithItems {
    ShipmentItems?: MarketplaceShipmentItemWithLineItem[]
    ID?: string
    BuyerID?: string
    Shipper?: string
    DateShipped?: string
    DateDelivered?: string
    TrackingNumber?: string
    Cost?: number
    Account?: string
    FromAddressID?: string
    ToAddressID?: string
    readonly FromAddress?: Address
    readonly ToAddress?: Address
}