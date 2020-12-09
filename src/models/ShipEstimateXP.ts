import { MarketplaceShipMethod } from './MarketplaceShipMethod';

export interface ShipEstimateXP {
    AllShipMethods?: MarketplaceShipMethod[]
    SupplierID?: string
    ShipFromAddressID?: string
}