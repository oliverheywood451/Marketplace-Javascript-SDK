import { Variant } from './Variant';
import { Spec } from './Spec';
import { MarketplaceProduct } from './MarketplaceProduct';

export interface ProductInKit {
    ID?: string
    MinQty?: number
    MaxQty?: number
    Static?: boolean
    SpecCombo?: string
    Variants?: Variant[]
    Specs?: Spec[]
    Product?: MarketplaceProduct
}