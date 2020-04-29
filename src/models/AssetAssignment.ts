import { Asset } from './Asset';

export interface AssetAssignment {
    ContainerID?: string
    ResourceType?: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'Addresses' | 'SupplierAddrresses' | 'AdminAddresses' | 'UserGrousp' | 'SupplierUserGroups' | 'AdminUserGroups' | 'ProductFacets'
    ResourceID?: string
    ResourceParentID?: string
    AssetID?: string
    AssetListOrder?: number
    readonly Asset?: Asset
    id?: string
    timeStamp?: string
}