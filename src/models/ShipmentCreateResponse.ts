import { MarketplaceShipment } from './MarketplaceShipment';
import { ShipmentItem } from './ShipmentItem';

export interface ShipmentCreateResponse {
    Shipment?: MarketplaceShipment
    ShipmentItems?: ShipmentItem[]
}