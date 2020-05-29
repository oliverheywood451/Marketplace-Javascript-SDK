import { LineItemXp } from './LineItemXp';
import { MarketplaceLineItemProduct } from './MarketplaceLineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { MarketplaceAddressBuyer } from './MarketplaceAddressBuyer';
import { MarketplaceAddressSupplier } from './MarketplaceAddressSupplier';
import { LineItemSpec } from './LineItemSpec';

export interface MarketplaceLineItem {
    xp?: LineItemXp
    readonly Product?: MarketplaceLineItemProduct
    readonly Variant?: LineItemVariant
    readonly ShippingAddress?: MarketplaceAddressBuyer
    readonly ShipFromAddress?: MarketplaceAddressSupplier
    ID?: string
    ProductID?: string
    Quantity?: number
    readonly DateAdded?: string
    readonly QuantityShipped?: number
    UnitPrice?: number
    readonly PromotionDiscount?: number
    readonly LineTotal?: number
    readonly LineSubtotal?: number
    CostCenter?: string
    DateNeeded?: string
    ShippingAccount?: string
    ShippingAddressID?: string
    ShipFromAddressID?: string
    readonly SupplierID?: string
    Specs?: LineItemSpec[]
}