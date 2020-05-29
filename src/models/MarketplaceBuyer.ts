import { BuyerXp } from './BuyerXp';

export interface MarketplaceBuyer {
    xp?: BuyerXp
    ID?: string
    Name?: string
    DefaultCatalogID?: string
    Active?: boolean
    readonly DateCreated?: string
}