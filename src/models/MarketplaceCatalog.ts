import { CatalogXp } from './CatalogXp';

export interface MarketplaceCatalog {
    xp?: CatalogXp
    ID?: string
    OwnerID?: string
    Name?: string
    Description?: string
    Active?: boolean
    CategoryCount?: number
}