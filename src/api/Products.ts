import { ListPage } from '../models/ListPage';
import { SuperMarketplaceProduct } from '../models/SuperMarketplaceProduct';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Products {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Post = this.Post.bind(this);
        this.Get = this.Get.bind(this);
        this.Put = this.Put.bind(this);
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
    public async List<TSuperMarketplaceProduct extends SuperMarketplaceProduct>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSuperMarketplaceProduct>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSuperMarketplaceProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param superMarketplaceProduct 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post<TSuperMarketplaceProduct extends SuperMarketplaceProduct>(superMarketplaceProduct: SuperMarketplaceProduct, accessToken?: string ): Promise<RequiredDeep<TSuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products`, superMarketplaceProduct, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TSuperMarketplaceProduct extends SuperMarketplaceProduct>(id: string,  accessToken?: string ): Promise<RequiredDeep<TSuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Put<TSuperMarketplaceProduct extends SuperMarketplaceProduct>(id: string,  accessToken?: string ): Promise<RequiredDeep<TSuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(id: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${id}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Products.As().List() // lists Products using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Products();