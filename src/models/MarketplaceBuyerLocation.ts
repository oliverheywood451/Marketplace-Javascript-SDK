import { MarketplaceUserGroup } from './MarketplaceUserGroup';
import { MarketplaceAddressBuyer } from './MarketplaceAddressBuyer';

export interface MarketplaceBuyerLocation {
    UserGroup?: MarketplaceUserGroup
    Address?: MarketplaceAddressBuyer
}