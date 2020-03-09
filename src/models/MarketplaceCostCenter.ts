import { CostCenterXp } from './CostCenterXp';

export interface MarketplaceCostCenter<TMarketplaceCostCenterXp = any> {
    xp?: TMarketplaceCostCenterXp
    ID?: string
    Name?: string
    Description?: string
}