import { TaxProperties } from './TaxProperties';
import { UnitOfMeasure } from './UnitOfMeasure';

export interface ProductXp {
    Status?: 'Draft' | 'Published'
    HasVariants?: boolean
    Note?: string
    Tax?: TaxProperties
    UnitOfMeasure?: UnitOfMeasure
    ProductType?: 'Standard' | 'Quote' | 'PurchaseOrder'
    IsResale?: boolean
    Accessorials?: 'Freezable' | 'Hazmat' | 'KeepFromFreezing'
}