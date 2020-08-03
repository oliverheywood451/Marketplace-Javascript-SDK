import { Filter } from './Filter';

export interface SupplierFilterConfig {
    Display?: string
    Path?: string
    Items?: Filter[]
    AllowSupplierEdit?: boolean
    AllowSellerEdit?: boolean
    BuyerAppFilterType?: 'SelectOption' | 'NonUI'
}