import { ListPage } from '../models/ListPage';
import { DocumentSchema } from '../models/DocumentSchema';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class DocumentSchemas {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List( options: ListArgs<DocumentSchema> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<DocumentSchema>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(schemaID: string,  accessToken?: string ): Promise<RequiredDeep<DocumentSchema>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/schemas/${schemaID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param documentSchema 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Update(schemaID: string, documentSchema: DocumentSchema, accessToken?: string ): Promise<RequiredDeep<DocumentSchema>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/schemas/${schemaID}`, documentSchema, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param schemaID ID of the schema.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(schemaID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/schemas/${schemaID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * DocumentSchemas.As().List() // lists DocumentSchemas using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
