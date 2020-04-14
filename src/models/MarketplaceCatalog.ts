import { CatalogXp } from './CatalogXp';

export interface MarketplaceCatalog {
    xp?: CatalogXp
    ID?: string
    readonly OwnerID?: string
    Name?: string
    Description?: string
    Active?: boolean
    readonly CategoryCount?: number
}