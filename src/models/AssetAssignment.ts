
export interface AssetAssignment {
    AssetID?: string
    ResourceID?: string
    ResourceType?: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices'
    ParentResourceID?: string
    ParentResourceType?: 'Catalogs' | 'Buyers' | 'Suppliers'
}