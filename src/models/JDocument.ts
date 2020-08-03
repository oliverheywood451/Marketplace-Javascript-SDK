import { History } from './History';

export interface JDocument {
    ID?: string
    Doc?: any
    readonly SchemaSpecUrl?: string
    readonly History?: History
}