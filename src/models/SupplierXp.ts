import { ProductImage } from './ProductImage';
import { Contact } from './Contact';
import { Currency } from './Currency';

export interface SupplierXp {
    Description?: string
    Images?: ProductImage[]
    SupportContact?: Contact
    SyncFreightPop?: boolean
    ApiClientID?: string
    Currency?: Currency
}