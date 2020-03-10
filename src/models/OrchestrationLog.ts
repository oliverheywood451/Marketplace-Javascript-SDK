
export interface OrchestrationLog {
    timeStamp?: string
    id?: string
    ErrorType?: 'WorkItemDefinition' | 'QueuedGetError' | 'CachedGetError' | 'DiffCalculationError' | 'ActionEvaluationError' | 'CacheUpdateError' | 'QueueCleanupError' | 'SyncCommandError' | 'CreateExistsError' | 'CreateGeneralError' | 'UpdateGeneralError' | 'PatchGeneralError' | 'GetGeneralError'
    Message?: string
    Level?: 'Progress' | 'Error' | 'Warn' | 'Success'
    ResourceId?: string
    RecordId?: string
    RecordType?: 'Product' | 'PriceSchedule' | 'Spec' | 'SpecOption' | 'SpecProductAssignment' | 'ProductFacet' | 'Buyer' | 'User' | 'UserGroup' | 'Address' | 'CostCenter' | 'UserGroupAssignment' | 'AddressAssignment' | 'CatalogAssignment' | 'Catalog'
    Action?: 'Ignore' | 'Create' | 'Update' | 'Patch' | 'Delete' | 'Get'
}