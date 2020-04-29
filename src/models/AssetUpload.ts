export interface AssetUpload {
  ID?: string
  Title?: string
  Active?: boolean
  File: File
  UrlPathOveride?: string
  Type: 'Image' | 'Theme' | 'Attachment' | 'StructuredData'
  Tags?: string[]
  FileName?: string
}
