import { LineItemXp } from './LineItemXp';
import { HSLineItemProduct } from './HSLineItemProduct';
import { HSLineItemVariant } from './HSLineItemVariant';
import { HSAddressBuyer } from './HSAddressBuyer';
import { HSAddressSupplier } from './HSAddressSupplier';
import { LineItemSpec } from './LineItemSpec';

export interface HSLineItem {
    xp?: LineItemXp
    readonly Product?: HSLineItemProduct
    readonly Variant?: HSLineItemVariant
    readonly ShippingAddress?: HSAddressBuyer
    readonly ShipFromAddress?: HSAddressSupplier
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