import { ProductXp } from './ProductXp';
import { MarketplacePriceSchedule } from './MarketplacePriceSchedule';
import { Inventory } from './Inventory';

export interface MarketplaceMeProduct {
    xp?: ProductXp
    readonly PriceSchedule?: MarketplacePriceSchedule
    ID?: string
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Active?: boolean
    readonly SpecCount?: number
    readonly VariantCount?: number
    ShipFromAddressID?: string
    Inventory?: Inventory
    DefaultSupplierID?: string
}