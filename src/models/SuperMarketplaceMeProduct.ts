import { MarketplaceMeProduct } from './MarketplaceMeProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { MarketplaceVariant } from './MarketplaceVariant';
import { Asset } from './Asset';

export interface SuperMarketplaceMeProduct {
    ID?: string
    Product?: MarketplaceMeProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    Variants?: MarketplaceVariant[]
    Images?: Asset[]
    Attachments?: Asset[]
}