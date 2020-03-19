import { SuperMarketplaceProduct } from '../models/SuperMarketplaceProduct';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class ContentManagements {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.PostImage = this.PostImage.bind(this);
        this.DeleteImage = this.DeleteImage.bind(this);
        this.PostStaticContent = this.PostStaticContent.bind(this);
        this.DeleteStaticContent = this.DeleteStaticContent.bind(this);
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param productID ID of the product.
    * @param options.file File of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostImage(marketplaceID: string, productID: string,  file: any, accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
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
    public async DeleteImage(marketplaceID: string, productID: string, fileName: string,  accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/${marketplaceID}/images/product/${productID}/${fileName}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param file File of the super marketplace product.
    * @param productID ID of the product.
    * @param fileName File name of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostStaticContent(marketplaceID: string, file: any, productID: string, fileName: string,  accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/${marketplaceID}/static-content/${productID}/${fileName}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param productID ID of the product.
    * @param fileName File name of the super marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteStaticContent(marketplaceID: string, productID: string, fileName: string,  accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/${marketplaceID}/static-content/${productID}/${fileName}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ContentManagements.As().List() // lists ContentManagements using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
