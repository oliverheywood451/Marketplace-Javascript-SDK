import { SupplierCategoriesFilter } from './SupplierCategoriesFilter';

export interface SupplierCategoryConfig {
    id?: string
    timeStamp?: string
    MarketplaceName?: string
    Filters?: SupplierCategoriesFilter[]
}