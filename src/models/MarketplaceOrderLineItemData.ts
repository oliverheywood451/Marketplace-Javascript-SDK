import { MarketplaceOrder } from './MarketplaceOrder';
import { MarketplaceLineItem } from './MarketplaceLineItem';

export interface MarketplaceOrderLineItemData {
    Order?: MarketplaceOrder
    LineItems?: MarketplaceLineItem[]
}