import { HSMeProduct } from './HSMeProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { HSVariant } from './HSVariant';
import { Asset } from './Asset';

export interface SuperHSMeProduct {
    ID?: string
    Product?: HSMeProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    TesterSpecs?: Spec[]
    Variants?: HSVariant[]
    TesterVariants?: HSVariant[]
    Images?: Asset[]
    Attachments?: Asset[]
    TesterProduct?: HSMeProduct
    TesterParentProduct?: HSMeProduct
}