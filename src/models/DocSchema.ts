import { History } from './History';

export interface DocSchema {
    ID?: string
    RestrictedAssignmentTypes?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'ProductFacets'
    Schema?: any
    readonly History?: History
}