import { ListPageFacet } from '../models/ListPageFacet';
import { MarketplaceMeProduct } from '../models/MarketplaceMeProduct';
import { SuperMarketplaceMeProduct } from '../models/SuperMarketplaceMeProduct';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Mes {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.ListMeProducts = this.ListMeProducts.bind(this);
        this.GetSuperProduct = this.GetSuperProduct.bind(this);
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
    public async ListMeProducts( options: ListArgs<MarketplaceMeProduct> = {}, accessToken?: string ): Promise<RequiredDeep<ListPageFacet<MarketplaceMeProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSuperProduct(productID: string,  accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceMeProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Mes.As().List() // lists Mes using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
