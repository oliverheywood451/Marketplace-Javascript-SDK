import { BuyerXp } from './BuyerXp';

export interface MarketplaceBuyer<TMarketplaceBuyerXp = any> {
    xp?: TMarketplaceBuyerXp
    ID?: string
    Name?: string
    DefaultCatalogID?: string
    Active?: boolean
}