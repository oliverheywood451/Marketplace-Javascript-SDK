import { MarketplaceSupplier } from '../models/MarketplaceSupplier';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Suppliers {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetMySupplier = this.GetMySupplier.bind(this);
        this.Create = this.Create.bind(this);
    }

   /**
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetMySupplier<TMarketplaceSupplier extends MarketplaceSupplier>( options: { supplierID?: string } = {}, accessToken?: string ): Promise<RequiredDeep<TMarketplaceSupplier>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/supplier`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceSupplier 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TMarketplaceSupplier extends MarketplaceSupplier>(marketplaceSupplier: MarketplaceSupplier, accessToken?: string ): Promise<RequiredDeep<TMarketplaceSupplier>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/supplier`, marketplaceSupplier, { params: {  accessToken, impersonating } } );
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

export default new Suppliers();