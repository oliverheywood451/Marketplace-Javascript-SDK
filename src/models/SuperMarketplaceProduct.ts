import { MarketplaceProduct } from './MarketplaceProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { MarketplaceVariant } from './MarketplaceVariant';

export interface SuperMarketplaceProduct {
    Product?: MarketplaceProduct
    PriceSchedule?: PriceSchedule
    ID?: string
    Specs?: Spec[]
    Variants?: MarketplaceVariant[]
}