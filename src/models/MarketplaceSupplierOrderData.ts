import { MarketplaceOrderLineItemData } from './MarketplaceOrderLineItemData';
import { MarketplaceShipEstimate } from './MarketplaceShipEstimate';

export interface MarketplaceSupplierOrderData {
    SupplierOrder?: MarketplaceOrderLineItemData
    BuyerOrder?: MarketplaceOrderLineItemData
    ShipMethod?: MarketplaceShipEstimate
}