import { AssetMetadata } from './AssetMetadata';

export interface Asset {
    ID?: string
    Title?: string
    Active?: boolean
    readonly Url?: string
    UrlPathOveride?: string
    Type?: 'Image' | 'Theme' | 'Attachment' | 'StructuredData'
    Tags?: string[]
    FileName?: string
    readonly Metadata?: AssetMetadata
}