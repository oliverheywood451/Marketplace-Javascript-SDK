import { SuperMarketplaceMeProduct } from './SuperMarketplaceMeProduct';
import { ChiliSpec } from './ChiliSpec';

export interface MeChiliTemplate {
    Product?: SuperMarketplaceMeProduct
    TemplateSpecs?: ChiliSpec[]
    ChiliTemplateID?: string
    ChiliConfigID?: string
    Frame?: string
}