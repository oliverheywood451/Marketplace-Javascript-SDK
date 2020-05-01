import { MarketplaceProduct } from './MarketplaceProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { MarketplaceVariant } from './MarketplaceVariant';
import { Asset } from './Asset';

export interface SuperMarketplaceProduct {
    ID?: string
    Product?: MarketplaceProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    Variants?: MarketplaceVariant[]
    Images?: Asset[]
}