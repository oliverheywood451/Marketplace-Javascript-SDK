
export interface AssetAssignment {
    ResourceID?: string
    ResourceType?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'ProductFacets'
    ParentResourceID?: string
    AssetID?: string
}