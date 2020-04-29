import { StorageAccount } from './StorageAccount';

export interface AssetContainer {
    SinglePartitionID?: string
    InteropID?: string
    Name: string
    HostUrlOverride?: string
    readonly StorageAccount?: StorageAccount
    id?: string
    timeStamp?: string
}