import { MarketplaceOrder } from './MarketplaceOrder';
import { LineItem } from './LineItem';
import { OrderPromotion } from './OrderPromotion';
import { Payment } from './Payment';
import { OrderApproval } from './OrderApproval';

export interface OrderDetails {
    Order?: MarketplaceOrder
    LineItems?: LineItem[]
    Promotions?: OrderPromotion[]
    Payments?: Payment[]
    Approvals?: OrderApproval[]
}