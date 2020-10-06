import { Variant } from './Variant';
import { Spec } from './Spec';
import { MarketplaceMeProduct } from './MarketplaceMeProduct';

export interface MeProductInKit {
    ID?: string
    MinQty?: number
    MaxQty?: number
    Static?: boolean
    SpecCombo?: string
    Variants?: Variant[]
    Specs?: Spec[]
    Product?: MarketplaceMeProduct
}