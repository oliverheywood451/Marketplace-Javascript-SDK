import { MarketplaceLocationUserGroup } from './MarketplaceLocationUserGroup';
import { MarketplaceAddressBuyer } from './MarketplaceAddressBuyer';

export interface MarketplaceBuyerLocation {
    UserGroup?: MarketplaceLocationUserGroup
    Address?: MarketplaceAddressBuyer
}