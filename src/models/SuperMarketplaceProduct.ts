import { MarketplaceProduct } from './MarketplaceProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { MarketplaceVariant } from './MarketplaceVariant';

export interface SuperMarketplaceProduct {
    Product?: MarketplaceProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    Variants?: MarketplaceVariant[]
    ID?: string
}