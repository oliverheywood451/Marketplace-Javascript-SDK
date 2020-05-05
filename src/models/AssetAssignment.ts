import { Asset } from './Asset';

export interface AssetAssignment {
    ResourceType?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'Addresses' | 'SupplierAddrresses' | 'AdminAddresses' | 'UserGrousp' | 'SupplierUserGroups' | 'AdminUserGroups' | 'ProductFacets'
    ResourceID?: string
    ResourceParentID?: string
    AssetID?: string
    AssetListOrder?: number
    readonly Asset?: Asset
}