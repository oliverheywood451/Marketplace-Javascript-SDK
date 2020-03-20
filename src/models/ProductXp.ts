import { ProductImage } from './ProductImage';
import { TaxProperties } from './TaxProperties';
import { UnitOfMeasure } from './UnitOfMeasure';
import { StaticContent } from './StaticContent';

export interface ProductXp {
    Images?: ProductImage[]
    Status?: 'Draft' | 'Published'
    HasVariants?: boolean
    Note?: string
    Tax?: TaxProperties
    UnitOfMeasure?: UnitOfMeasure
    ProductType?: 'Standard' | 'Quote'
    StaticContent?: StaticContent[]
    IsResale?: boolean
}