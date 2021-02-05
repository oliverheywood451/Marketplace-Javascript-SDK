import { HSProduct } from './HSProduct';
import { PriceSchedule } from './PriceSchedule';
import { Spec } from './Spec';
import { HSVariant } from './HSVariant';
import { Asset } from './Asset';

export interface SuperHSProduct {
    ID?: string
    Product?: HSProduct
    PriceSchedule?: PriceSchedule
    Specs?: Spec[]
    Variants?: HSVariant[]
    TesterVariants?: HSVariant[]
    Images?: Asset[]
    Attachments?: Asset[]
    TesterProduct?: HSProduct
    TesterParentProduct?: HSProduct
}