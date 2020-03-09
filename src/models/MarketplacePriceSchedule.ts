import { PriceScheduleXp } from './PriceScheduleXp';
import { PriceBreak } from './PriceBreak';

export interface MarketplacePriceSchedule<TMarketplacePriceScheduleXp = any> {
    xp?: TMarketplacePriceScheduleXp
    ID?: string
    Name?: string
    ApplyTax?: boolean
    ApplyShipping?: boolean
    MinQuantity?: number
    MaxQuantity?: number
    UseCumulativeQuantity?: boolean
    RestrictedQuantity?: boolean
    PriceBreaks?: PriceBreak[]
}