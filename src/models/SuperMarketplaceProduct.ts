import { MarketplaceProduct } from './MarketplaceProduct';
import { PriceSchedule } from './PriceSchedule';

export interface SuperMarketplaceProduct<TProductXp = any> {
    Product?: MarketplaceProduct<TProductXp>
    PriceSchedule?: PriceSchedule
    ID?: string
}