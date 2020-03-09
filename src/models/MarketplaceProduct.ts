import { ProductXp } from './ProductXp';
import { Inventory } from './Inventory';

export interface MarketplaceProduct<TMarketplaceProductXp = any> {
    xp?: TMarketplaceProductXp
    OwnerID?: string
    DefaultPriceScheduleID?: string
    AutoForward?: boolean
    ID?: string
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Active?: boolean
    SpecCount?: number
    VariantCount?: number
    ShipFromAddressID?: string
    Inventory?: Inventory
    DefaultSupplierID?: string
}