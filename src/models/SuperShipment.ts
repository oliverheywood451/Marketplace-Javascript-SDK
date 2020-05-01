import { MarketplaceShipment } from './MarketplaceShipment';
import { ShipmentItem } from './ShipmentItem';

export interface SuperShipment {
    Shipment?: MarketplaceShipment
    ShipmentItems?: ShipmentItem[]
}