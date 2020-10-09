import { MarketplaceOrder } from './MarketplaceOrder';
import { MarketplaceLineItem } from './MarketplaceLineItem';

export interface MarketplaceLineItemOrder {
    MarketplaceOrder?: MarketplaceOrder
    MarketplaceLineItem?: MarketplaceLineItem
}