import { SupplierCategoryConfig } from '../models/SupplierCategoryConfig';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class SupplierCategoryConfigs {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Get = this.Get.bind(this);
    }

   /**
    * @param marketplaceID ID of the marketplace.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(marketplaceID: string,  accessToken?: string ): Promise<RequiredDeep<SupplierCategoryConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/marketplace/${marketplaceID}/supplier/category/config`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierCategoryConfigs.As().List() // lists SupplierCategoryConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
