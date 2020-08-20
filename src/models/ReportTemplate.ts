import { ReportFilters } from './ReportFilters';

export interface ReportTemplate {
    id?: string
    SellerID?: string
    ReportType?: 'BuyerLocation'
    Name?: string
    Description?: string
    Headers?: string[]
    Filters?: ReportFilters
    AvailableToSuppliers?: boolean
}