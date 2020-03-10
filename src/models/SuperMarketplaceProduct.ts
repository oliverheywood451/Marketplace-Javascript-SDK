import { MarketplaceProduct } from './MarketplaceProduct';
import { PriceSchedule } from './PriceSchedule';

export interface SuperMarketplaceProduct {
    Product?: MarketplaceProduct
    PriceSchedule?: PriceSchedule
    ID?: string
}