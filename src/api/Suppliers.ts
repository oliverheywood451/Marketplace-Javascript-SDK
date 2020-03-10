import { MarketplaceSupplier } from '../models/MarketplaceSupplier';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Suppliers {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Create = this.Create.bind(this);
        this.GetMySupplier = this.GetMySupplier.bind(this);
    }

   /**
    * @param marketplaceSupplier 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create(marketplaceSupplier: MarketplaceSupplier, accessToken?: string ): Promise<RequiredDeep<MarketplaceSupplier>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/supplier`, marketplaceSupplier, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetMySupplier(supplierID: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceSupplier>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/supplier/me/${supplierID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Suppliers.As().List() // lists Suppliers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
