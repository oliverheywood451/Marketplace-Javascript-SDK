import { Product } from './Product';
import { Asset } from './Asset';
import { KitProduct } from './KitProduct';

export interface MarketplaceKitProduct {
    ID?: string
    Name?: string
    Product?: Product
    Images?: Asset[]
    Attachments?: Asset[]
    ProductAssignments?: KitProduct
}