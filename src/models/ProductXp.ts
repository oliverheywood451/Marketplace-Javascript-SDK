import { ProductImage } from './ProductImage';
import { TaxProperties } from './TaxProperties';
import { UnitOfMeasure } from './UnitOfMeasure';

export interface ProductXp {
    Images?: ProductImage[]
    Status?: 'Draft' | 'Published'
    HasVariants?: boolean
    Note?: string
    Tax?: TaxProperties
    UnitOfMeasure?: UnitOfMeasure
    ProductType?: 'Standard' | 'Quote'
}