import { AssetMetadata } from './AssetMetadata';

export interface Asset {
    ID?: string
    Title?: string
    Active?: boolean
    Url?: string
    Type?: 'Image' | 'Theme' | 'Attachment' | 'Structured'
    Tags?: string[]
    FileName?: string
    readonly Metadata?: AssetMetadata
    id?: string
    timeStamp?: string
}