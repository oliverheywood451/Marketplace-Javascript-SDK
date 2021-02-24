import { ListFilter } from './ListFilter';

export interface CosmosListOptions {
    PageSize?: number
    ContinuationToken?: string
    Filters?: ListFilter[]
}