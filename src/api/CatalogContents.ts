import { ListPage } from '../models/ListPage';
import { AssetForDelivery } from '../models/AssetForDelivery';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class CatalogContents {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.ListAssets = this.ListAssets.bind(this);
        this.SaveAssetAssignment = this.SaveAssetAssignment.bind(this);
        this.DeleteAssetAssignment = this.DeleteAssetAssignment.bind(this);
        this.MoveAssetAssignment = this.MoveAssetAssignment.bind(this);
        this.GetFirstImage = this.GetFirstImage.bind(this);
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssets(catalogID: string,  options: ListArgs<AssetForDelivery> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<AssetForDelivery>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/assets`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssetAssignment(catalogID: string, assetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/assets/${assetID}/assignments`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssetAssignment(catalogID: string, assetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/assets/${assetID}/assignments`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param assetID ID of the asset.
    * @param listOrderWithinType List order within type of the catalog content.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async MoveAssetAssignment(catalogID: string, assetID: string, listOrderWithinType: number,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/assets/${assetID}/assignments/moveto/${listOrderWithinType}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetFirstImage(catalogID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/image`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CatalogContents.As().List() // lists CatalogContents using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
