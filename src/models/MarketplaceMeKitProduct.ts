import { MarketplaceMeProduct } from './MarketplaceMeProduct';
import { Asset } from './Asset';
import { MeKitProduct } from './MeKitProduct';

export interface MarketplaceMeKitProduct {
    ID?: string
    Name?: string
    Product?: MarketplaceMeProduct
    Images?: Asset[]
    Attachments?: Asset[]
    ProductAssignments?: MeKitProduct
}