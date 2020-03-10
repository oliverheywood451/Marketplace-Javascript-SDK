import { PriceScheduleXp } from './PriceScheduleXp';
import { PriceBreak } from './PriceBreak';

export interface MarketplacePriceSchedule {
    xp?: PriceScheduleXp
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