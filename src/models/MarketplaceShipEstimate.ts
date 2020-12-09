import { ShipEstimateXP } from './ShipEstimateXP';
import { MarketplaceShipMethod } from './MarketplaceShipMethod';
import { ShipEstimateItem } from './ShipEstimateItem';

export interface MarketplaceShipEstimate {
    xp?: ShipEstimateXP
    ShipMethods?: MarketplaceShipMethod[]
    ID?: string
    SelectedShipMethodID?: string
    ShipEstimateItems?: ShipEstimateItem[]
}