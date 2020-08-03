
export interface DocumentAssignment {
    ResourceID?: string
    ResourceType?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'ProductFacets'
    ParentResourceID?: string
    DocumentID?: string
}