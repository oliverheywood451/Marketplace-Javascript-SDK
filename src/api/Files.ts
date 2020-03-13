import { SuperMarketplaceProduct } from '../models/SuperMarketplaceProduct';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Files {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Post = this.Post.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param productID ID of the product.
    * @param options.file File of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post(marketplaceID: string, productID: string,  file: any, accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/${marketplaceID}/images/product/${productID}`, { params: { file,  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param productID ID of the product.
    * @param fileName File name of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(marketplaceID: string, productID: string, fileName: string,  accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/${marketplaceID}/images/product/${productID}/${fileName}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Files.As().List() // lists Files using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
