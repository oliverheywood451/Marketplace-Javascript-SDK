import { Variant } from './Variant';
import { Spec } from './Spec';
import { MarketplaceProduct } from './MarketplaceProduct';
import { Asset } from './Asset';

export interface ProductInKit {
    ID?: string
    MinQty?: number
    MaxQty?: number
    Static?: boolean
    Optional?: boolean
    SpecCombo?: string
    Variants?: Variant[]
    Specs?: Spec[]
    Product?: MarketplaceProduct
    Images?: Asset[]
    Attachments?: Asset[]
}