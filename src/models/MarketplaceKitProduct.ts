import { Product } from './Product';
import { AssetForDelivery } from './AssetForDelivery';
import { KitProduct } from './KitProduct';

export interface MarketplaceKitProduct {
    Product?: Product
    Images?: AssetForDelivery[]
    Attachments?: AssetForDelivery[]
    ProductAssignments?: KitProduct
}