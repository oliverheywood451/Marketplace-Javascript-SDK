import { ListPage } from '../models/ListPage';
import { JDocument } from '../models/JDocument';
import { DocumentAssignment } from '../models/DocumentAssignment';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Documents {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.ListDocumentsOnChild = this.ListDocumentsOnChild.bind(this);
        this.ListDocuments = this.ListDocuments.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
    }

   /**
    * @param schemaID ID of the schema.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List(schemaID: string,  options: ListArgs<JDocument> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<JDocument>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param jDocument 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create(schemaID: string, jDocument: JDocument, accessToken?: string ): Promise<RequiredDeep<JDocument>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/schemas/${schemaID}/documents`, jDocument, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param documentID ID of the document.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(schemaID: string, documentID: string,  accessToken?: string ): Promise<RequiredDeep<JDocument>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents/${documentID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param documentID ID of the document.
    * @param jDocument 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save(schemaID: string, documentID: string, jDocument: JDocument, accessToken?: string ): Promise<RequiredDeep<JDocument>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/schemas/${schemaID}/documents/${documentID}`, jDocument, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param documentID ID of the document.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(schemaID: string, documentID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/schemas/${schemaID}/documents/${documentID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param parentType Parent type of the j document. Possible values: Catalogs, Buyers, Suppliers.
    * @param parentID ID of the parent.
    * @param type Type of the j document. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the j document.
    * @param options.args Args of the j document.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListDocumentsOnChild(schemaID: string, parentType: 'Catalogs' | 'Buyers' | 'Suppliers', parentID: string, type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  options: ListArgs<JDocument> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<JDocument>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents/${parentType}/${parentID}/${type}/${ID}`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param type Type of the j document. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the j document.
    * @param options.args Args of the j document.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListDocuments(schemaID: string, type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  options: ListArgs<JDocument> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<JDocument>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents/${type}/${ID}`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments(schemaID: string,  options: ListArgs<DocumentAssignment> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<DocumentAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents/assignments`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param documentAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(schemaID: string, documentAssignment: DocumentAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/schemas/${schemaID}/documents/assignments`, documentAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param options.DocumentID 
    * @param options.ResourceID 
    * @param options.ResourceType 
    * @param options.ParentResourceID 
    * @param options.ParentResourceType 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(schemaID: string,  DocumentID: string, ResourceID: string, ResourceType: string, ParentResourceID: string, ParentResourceType: string, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/schemas/${schemaID}/documents/assignments`, { params: { DocumentID, ResourceID, ResourceType, ParentResourceID, ParentResourceType,  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Documents.As().List() // lists Documents using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
