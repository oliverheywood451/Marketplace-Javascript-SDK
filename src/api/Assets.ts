import { ListPage } from '../models/ListPage';
import { Asset } from '../models/Asset';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Assets {
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
    public async List( options: ListArgs<Asset> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Asset>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(assetID: string,  accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param asset 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Update(assetID: string, asset: Asset, accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/assets/${assetID}`, asset, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(assetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Assets.As().List() // lists Assets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
