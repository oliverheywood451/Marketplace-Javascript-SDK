import { ProductFacetXp } from './ProductFacetXp';

export interface MarketplaceProductFacet<TMarketplaceProductFacetXp = any> {
    xp?: TMarketplaceProductFacetXp
    ID?: string
    Name?: string
    XpPath?: string
    ListOrder?: number
    MinCount?: number
}