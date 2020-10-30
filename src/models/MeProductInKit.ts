import { Variant } from './Variant';
import { Spec } from './Spec';
import { MarketplaceMeProduct } from './MarketplaceMeProduct';
import { Asset } from './Asset';

export interface MeProductInKit {
    ID?: string
    MinQty?: number
    MaxQty?: number
    Static?: boolean
    SpecCombo?: string
    Variants?: Variant[]
    Specs?: Spec[]
    Product?: MarketplaceMeProduct
    Images?: Asset[]
    Attachments?: Asset[]
}