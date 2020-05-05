import { StorageAccount } from './StorageAccount';

export interface AssetContainer {
    ID?: string
    Name: string
    HostUrlOverride?: string
    readonly StorageAccount?: StorageAccount
}