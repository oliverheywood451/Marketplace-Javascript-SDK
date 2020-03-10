import { ListPage } from '../models/ListPage';
import { MarketplaceTaxCode } from '../models/MarketplaceTaxCode';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

class TaxCodes {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetTaxCodes = this.GetTaxCodes.bind(this);
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
    public async GetTaxCodes( options: ListArgs<MarketplaceTaxCode> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<MarketplaceTaxCode>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/taxcodes`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * TaxCodes.As().List() // lists TaxCodes using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new TaxCodes();