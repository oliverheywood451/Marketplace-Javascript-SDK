import { ListPage } from '../models/ListPage';
import { Asset } from '../models/Asset';
import { AssetAssignment } from '../models/AssetAssignment';
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
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
    }

   /**
    * @param containerID ID of the container.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List(containerID: string,  options: ListArgs<Asset> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Asset>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/containers/${containerID}/assets`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(containerID: string, assetID: string,  accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/containers/${containerID}/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetID ID of the asset.
    * @param asset Required fields: ContainerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Update(containerID: string, assetID: string, asset: Asset, accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/containers/${containerID}/assets/${assetID}`, asset, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(containerID: string, assetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/containers/${containerID}/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetID ID of the asset.
    * @param resourceType Resource type of the asset. Possible values: Products, Categories, Catalogs, Promotions, Suppliers, Buyers, Addresses, SupplierAddrresses, AdminAddresses, UserGrousp, SupplierUserGroups, AdminUserGroups, ProductFacets.
    * @param resourceID ID of the resource.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(containerID: string, assetID: string, resourceType: 'Products' | 'Categories' | 'Catalogs' | 'Promotions' | 'Suppliers' | 'Buyers' | 'Addresses' | 'SupplierAddrresses' | 'AdminAddresses' | 'UserGrousp' | 'SupplierUserGroups' | 'AdminUserGroups' | 'ProductFacets', resourceID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/containers/${containerID}/assets/${assetID}/assignments/${resourceType}/${resourceID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments(containerID: string,  options: ListArgs<AssetAssignment> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<AssetAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/containers/${containerID}/assets/assignments`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param containerID ID of the container.
    * @param assetAssignment Required fields: ResourceType, ResourceID, AssetID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(containerID: string, assetAssignment: AssetAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/containers/${containerID}/assets/assignments`, assetAssignment, { params: {  accessToken, impersonating } } );
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
