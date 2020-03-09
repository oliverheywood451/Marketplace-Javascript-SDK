import { SupplierXp } from './SupplierXp';

export interface MarketplaceSupplier<TMarketplaceSupplierXp = any> {
    xp?: TMarketplaceSupplierXp
    ID?: string
    Name?: string
    Active?: boolean
}