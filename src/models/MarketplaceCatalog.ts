import { CatalogXp } from './CatalogXp';

export interface MarketplaceCatalog<TMarketplaceCatalogXp = any> {
    xp?: TMarketplaceCatalogXp
    ID?: string
    OwnerID?: string
    Name?: string
    Description?: string
    Active?: boolean
    CategoryCount?: number
}