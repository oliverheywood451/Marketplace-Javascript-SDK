import { SuperMarketplaceProduct } from './SuperMarketplaceProduct';
import { ChiliSpec } from './ChiliSpec';

export interface ChiliTemplate {
    Product?: SuperMarketplaceProduct
    TemplateSpecs?: ChiliSpec[]
    ChiliTemplateID?: string
    Frame?: string
}