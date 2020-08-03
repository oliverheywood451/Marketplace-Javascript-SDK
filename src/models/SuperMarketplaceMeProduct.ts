import { MarketplaceMeProduct } from './MarketplaceMeProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { MarketplaceVariant } from './MarketplaceVariant';
import { AssetForDelivery } from './AssetForDelivery';

export interface SuperMarketplaceMeProduct {
    ID?: string
    Product?: MarketplaceMeProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    Variants?: MarketplaceVariant[]
    Images?: AssetForDelivery[]
    Attachments?: AssetForDelivery[]
}