import { ShipmentXp } from './ShipmentXp';
import { MarketplaceAddressSupplier } from './MarketplaceAddressSupplier';
import { MarketplaceAddressBuyer } from './MarketplaceAddressBuyer';

export interface MarketplaceShipment {
    xp?: ShipmentXp
    readonly FromAddress?: MarketplaceAddressSupplier
    readonly ToAddress?: MarketplaceAddressBuyer
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
}