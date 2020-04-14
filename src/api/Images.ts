import { ListPage } from '../models/ListPage';
import { Image } from '../models/Image';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Images {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Post = this.Post.bind(this);
        this.Get = this.Get.bind(this);
        this.Delete = this.Delete.bind(this);
        this.GetProductImages = this.GetProductImages.bind(this);
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
    public async List( options: ListArgs<Image> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Image>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/content/images`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param image 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post(image: Image, accessToken?: string ): Promise<RequiredDeep<Image>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/content/images`, image, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the image.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(id: string,  accessToken?: string ): Promise<RequiredDeep<Image>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/content/images/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the image.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(id: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/content/images/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetProductImages(productID: string,  options: ListArgs<Image> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Image>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/content/images/product/${productID}`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Images.As().List() // lists Images using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
