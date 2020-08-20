import { Filters } from './Filters';

export interface ReportTemplate {
    id?: string
    SellerID?: string
    ReportType?: 'BuyerLocation'
    Name?: string
    Description?: string
    Headers?: string[]
    Filters?: Filters
    AvailableToSuppliers?: boolean
}