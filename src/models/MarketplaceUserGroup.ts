import { UserGroupXp } from './UserGroupXp';

export interface MarketplaceUserGroup<TMarketplaceUserGroupXp = any> {
    xp?: TMarketplaceUserGroupXp
    ID?: string
    Name?: string
    Description?: string
}