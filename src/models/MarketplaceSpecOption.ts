import { SpecOptionXp } from './SpecOptionXp';

export interface MarketplaceSpecOption<TMarketplaceSpecOptionXp = any> {
    xp?: TMarketplaceSpecOptionXp
    ID?: string
    Value?: string
    ListOrder?: number
    IsOpenText?: boolean
    PriceMarkupType?: 'NoMarkup' | 'AmountPerQuantity' | 'AmountTotal' | 'Percentage'
    PriceMarkup?: number
}