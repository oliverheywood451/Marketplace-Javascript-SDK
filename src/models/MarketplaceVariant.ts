import { VariantXp } from './VariantXp';
import { VariantInventory } from './VariantInventory';

export interface MarketplaceVariant {
    xp?: VariantXp
    ID?: string
    Name?: string
    Description?: string
    Active?: boolean
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Inventory?: VariantInventory
}