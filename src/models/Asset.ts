import { AssetMetadata } from './AssetMetadata';
import { History } from './History';

export interface Asset {
    ID?: string
    Title?: string
    Active?: boolean
    Url?: string
    Type?: 'Image' | 'Theme' | 'Attachment' | 'Structured'
    Tags?: string[]
    FileName?: string
    readonly Metadata?: AssetMetadata
    readonly History?: History
}