import { Shipment } from './Shipment';
import { ShipmentItem } from './ShipmentItem';

export interface ShipmentCreateResponse {
    Shipment?: Shipment
    ShipmentItems?: ShipmentItem[]
}