import { ListPage } from '../models/ListPage';
import { MarketplaceCatalog } from '../models/MarketplaceCatalog';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Catalogs {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
        this.Put = this.Put.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Post = this.Post.bind(this);
    }

   /**
    * @param buyerID ID of the buyer.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List(buyerID: string,  options: ListArgs<MarketplaceCatalog> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<MarketplaceCatalog>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/catalogs`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(buyerID: string, catalogID: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/catalogs/${catalogID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param catalogID ID of the catalog.
    * @param marketplaceCatalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Put(buyerID: string, catalogID: string, marketplaceCatalog: MarketplaceCatalog, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/catalogs/${catalogID}`, marketplaceCatalog, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, catalogID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/catalogs/${catalogID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param marketplaceCatalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post(buyerID: string, marketplaceCatalog: MarketplaceCatalog, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/buyers/${buyerID}/catalogs`, marketplaceCatalog, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Catalogs.As().List() // lists Catalogs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
