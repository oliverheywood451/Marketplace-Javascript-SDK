import { SupplierFilterConfig } from './SupplierFilterConfig';
import { History } from './History';

export interface SupplierFilterConfigDocument {
    ID?: string
    Doc?: SupplierFilterConfig
    readonly SchemaSpecUrl?: string
    readonly History?: History
}