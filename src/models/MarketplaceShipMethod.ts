import { ShipMethodXP } from './ShipMethodXP';

export interface MarketplaceShipMethod {
    xp?: ShipMethodXP
    ID?: string
    Name?: string
    Cost?: number
    EstimatedTransitDays?: number
}