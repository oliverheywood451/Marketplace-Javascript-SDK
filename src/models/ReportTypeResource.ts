
export interface ReportTypeResource {
    ID?: 'BuyerLocation' | 'SalesOrderDetail'
    Name?: string
    ReportCategory?: string
    AvailableToSuppliers?: boolean
    Value?: string
    AdHocFilters?: string[]
}