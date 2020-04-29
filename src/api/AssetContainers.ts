import { ListPage } from '../models/ListPage';
import { AssetContainer } from '../models/AssetContainer';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class AssetContainers {
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
    public async List( options: ListArgs<AssetContainer> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<AssetContainer>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/containers`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param assetContainer Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create(assetContainer: AssetContainer, accessToken?: string ): Promise<RequiredDeep<AssetContainer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/containers`, assetContainer, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(containerID: string,  accessToken?: string ): Promise<RequiredDeep<AssetContainer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/containers/${containerID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetContainer Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Update(containerID: string, assetContainer: AssetContainer, accessToken?: string ): Promise<RequiredDeep<AssetContainer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/containers/${containerID}`, assetContainer, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(containerID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/containers/${containerID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AssetContainers.As().List() // lists AssetContainers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
