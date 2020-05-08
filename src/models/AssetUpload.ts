export interface AssetUpload {
  ID?: string
  Title?: string
  Active?: boolean
  File?: File
  Url?: string
  Type: 'Image' | 'Theme' | 'Attachment' | 'Structured'
  Tags?: string[]
  FileName?: string
}
