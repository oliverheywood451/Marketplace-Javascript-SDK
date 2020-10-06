
export interface TemplateProductFlat {
    ID?: string
    Active?: boolean
    ProductType?: 'Standard' | 'Quote' | 'PurchaseOrder' | 'Kit'
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipFromAddressID?: string
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    TaxCategory?: string
    TaxCode?: string
    TaxDescription?: string
    UnitOfMeasureQuantity?: number
    UnitOfMeasure?: string
    IsResale?: boolean
    ApplyTax?: boolean
    ApplyShipping?: boolean
    MinQuantity?: number
    MaxQuantity?: number
    UseCumulativeQuantity?: boolean
    RestrictedQuantity?: boolean
    Price?: number
    ImageTitle?: string
    Url?: string
    Type?: 'Image' | 'Theme' | 'Attachment' | 'Structured'
    Tags?: string
    FileName?: string
}