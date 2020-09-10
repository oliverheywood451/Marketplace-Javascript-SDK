
export interface ReportTypeResource {
    ID?: 'BuyerLocation' | 'SalesOrderDetail' | 'PurchaseOrderDetail'
    Name?: string
    ReportCategory?: string
    AvailableToSuppliers?: boolean
    Value?: string
    AdHocFilters?: string[]
}