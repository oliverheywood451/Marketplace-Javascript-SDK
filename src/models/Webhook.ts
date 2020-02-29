import { WebhookRoute } from './WebhookRoute';

export interface Webhook {
    ID?: string
    Name: string
    Description?: string
    Url: string
    HashKey: string
    ElevatedRoles?: 'DevCenter' | 'DevCenterPasswordReset' | 'DevCenterValidateEmail' | 'GrantForAnyRole' | 'ApiClientAdmin' | 'ApiClientReader' | 'AddressAdmin' | 'AddressReader' | 'AdminAddressAdmin' | 'AdminAddressReader' | 'AdminUserAdmin' | 'AdminUserGroupAdmin' | 'AdminUserGroupReader' | 'AdminUserReader' | 'ApprovalRuleAdmin' | 'ApprovalRuleReader' | 'BuyerAdmin' | 'BuyerImpersonation' | 'BuyerReader' | 'BuyerUserAdmin' | 'BuyerUserReader' | 'CatalogAdmin' | 'CatalogReader' | 'CategoryAdmin' | 'CategoryReader' | 'CostCenterAdmin' | 'CostCenterReader' | 'CreditCardAdmin' | 'CreditCardReader' | 'FullAccess' | 'IncrementorAdmin' | 'IncrementorReader' | 'InventoryAdmin' | 'MeAddressAdmin' | 'MeAdmin' | 'MeCreditCardAdmin' | 'MessageConfigAssignmentAdmin' | 'MeXpAdmin' | 'OrderAdmin' | 'OrderReader' | 'OverrideShipping' | 'OverrideTax' | 'OverrideUnitPrice' | 'PasswordReset' | 'PriceScheduleAdmin' | 'PriceScheduleReader' | 'ProductAdmin' | 'ProductAssignmentAdmin' | 'ProductFacetAdmin' | 'ProductFacetReader' | 'ProductReader' | 'PromotionAdmin' | 'PromotionReader' | 'SecurityProfileAdmin' | 'SecurityProfileReader' | 'SetSecurityProfile' | 'ShipmentAdmin' | 'ShipmentReader' | 'Shopper' | 'SpendingAccountAdmin' | 'SpendingAccountReader' | 'SupplierAddressAdmin' | 'SupplierAddressReader' | 'SupplierAdmin' | 'SupplierReader' | 'SupplierUserAdmin' | 'SupplierUserGroupAdmin' | 'SupplierUserGroupReader' | 'SupplierUserReader' | 'UnsubmittedOrderReader' | 'UserGroupAdmin' | 'UserGroupReader' | 'OpenIDConnectReader' | 'OpenIDConnectAdmin' | 'MessageSenderReader' | 'MessageSenderAdmin' | 'XpIndexAdmin' | 'WebhookReader' | 'WebhookAdmin'
    ConfigData?: any
    BeforeProcessRequest?: boolean
    ApiClientIDs?: string[]
    WebhookRoutes?: WebhookRoute[]
}