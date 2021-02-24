import { RMA } from '../models/RMA';
import { CosmosListOptions } from '../models/CosmosListOptions';
import { CosmosListPage } from '../models/CosmosListPage';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class RmAs {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GenerateRMA = this.GenerateRMA.bind(this);
        this.ListBuyerRMAs = this.ListBuyerRMAs.bind(this);
        this.ListMeRMAs = this.ListMeRMAs.bind(this);
    }

   /**
    * @param rMA 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GenerateRMA(rMA: RMA, accessToken?: string ): Promise<RequiredDeep<RMA>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/rma`, rMA, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param cosmosListOptions 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListBuyerRMAs(cosmosListOptions: CosmosListOptions, accessToken?: string ): Promise<RequiredDeep<CosmosListPage<RMA>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/rma/list/buyer`, cosmosListOptions, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param cosmosListOptions 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListMeRMAs(cosmosListOptions: CosmosListOptions, accessToken?: string ): Promise<RequiredDeep<CosmosListPage<RMA>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/rma/list/me`, cosmosListOptions, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * RmAs.As().List() // lists RmAs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
