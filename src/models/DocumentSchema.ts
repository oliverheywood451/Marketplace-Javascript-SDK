
export interface DocumentSchema {
    ID?: string
    RestrictedAssignmentTypes?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'ProductFacets'
    Schema?: any
}