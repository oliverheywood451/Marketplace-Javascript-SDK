import { Shipment } from './Shipment';
import { ShipmentItem } from './ShipmentItem';

export interface SuperShipment {
    Shipment?: Shipment
    ShipmentItems?: ShipmentItem[]
}