import { OrderXp } from './OrderXp';
import { MarketplaceUser } from './MarketplaceUser';
import { MarketplaceAddressBuyer } from './MarketplaceAddressBuyer';

export interface MarketplaceOrder {
    xp?: OrderXp
    readonly FromUser?: MarketplaceUser
    readonly BillingAddress?: MarketplaceAddressBuyer
    ID?: string
    FromCompanyID?: string
    ToCompanyID?: string
    FromUserID?: string
    BillingAddressID?: string
    ShippingAddressID?: string
    Comments?: string
    readonly LineItemCount?: number
    readonly Status?: 'Unsubmitted' | 'AwaitingApproval' | 'Declined' | 'Open' | 'Completed' | 'Canceled'
    readonly DateCreated?: string
    readonly DateSubmitted?: string
    readonly DateApproved?: string
    readonly DateDeclined?: string
    readonly DateCanceled?: string
    readonly DateCompleted?: string
    readonly Subtotal?: number
    ShippingCost?: number
    TaxCost?: number
    readonly PromotionDiscount?: number
    readonly Total?: number
    readonly IsSubmitted?: boolean
}