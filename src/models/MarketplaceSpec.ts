import { SpecXp } from './SpecXp';
import { SpecOption } from './SpecOption';

export interface MarketplaceSpec<TMarketplaceSpecXp = any> {
    xp?: TMarketplaceSpecXp
    ID?: string
    ListOrder?: number
    Name?: string
    DefaultValue?: string
    Required?: boolean
    AllowOpenText?: boolean
    DefaultOptionID?: string
    DefinesVariant?: boolean
    OptionCount?: number
    Options?: SpecOption[]
}