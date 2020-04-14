import { MarketplaceVariantXp } from './MarketplaceVariantXp';
import { VariantInventory } from './VariantInventory';
import { VariantSpec } from './VariantSpec';

export interface MarketplaceVariant {
    xp?: MarketplaceVariantXp
    ID?: string
    Name?: string
    Description?: string
    Active?: boolean
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Inventory?: VariantInventory
    readonly Specs?: VariantSpec[]
}