import { AssetMetadata } from './AssetMetadata';

export interface Asset {
    InteropID?: string
    ContainerID?: string
    Title?: string
    Active?: boolean
    readonly Url?: string
    UrlPathOveride?: string
    Type?: 'Image' | 'Theme' | 'Attachment' | 'StructuredData'
    Tags?: string[]
    FileName?: string
    readonly Metadata?: AssetMetadata
    id?: string
    timeStamp?: string
}