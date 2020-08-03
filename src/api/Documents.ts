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
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
        this.ListDocuments = this.ListDocuments.bind(this);
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
    public async Update(schemaID: string, documentID: string, jDocument: JDocument, accessToken?: string ): Promise<RequiredDeep<JDocument>> {
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
    * @param options.ResourceID 
    * @param options.ResourceType 
    * @param options.ParentResourceID 
    * @param options.DocumentID 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(schemaID: string,  ResourceID: string, ResourceType: string, ParentResourceID: string, DocumentID: string, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/schemas/${schemaID}/documents/assignments`, { params: { ResourceID, ResourceType, ParentResourceID, DocumentID,  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param options.ResourceID 
    * @param options.ParentResourceID 
    * @param options.ResourceType 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListDocuments(schemaID: string,  ResourceID: string, ParentResourceID: string, ResourceType: string, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}/documents/resource`, { params: { ResourceID, ParentResourceID, ResourceType,  accessToken, impersonating } } );
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
