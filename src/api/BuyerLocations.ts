import { MarketplaceBuyerLocation } from '../models/MarketplaceBuyerLocation';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class BuyerLocations {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * @param buyerID ID of the buyer.
    * @param marketplaceBuyerLocation 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create(buyerID: string, marketplaceBuyerLocation: MarketplaceBuyerLocation, accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyerLocation>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyerlocations/${buyerID}`, marketplaceBuyerLocation, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param buyerLocationID ID of the buyer location.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(buyerID: string, buyerLocationID: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyerLocation>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyerlocations/${buyerID}/${buyerLocationID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param buyerLocationID ID of the buyer location.
    * @param marketplaceBuyerLocation 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Update(buyerID: string, buyerLocationID: string, marketplaceBuyerLocation: MarketplaceBuyerLocation, accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyerLocation>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyerlocations/${buyerID}/${buyerLocationID}`, marketplaceBuyerLocation, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param buyerLocationID ID of the buyer location.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, buyerLocationID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyerlocations/${buyerID}/${buyerLocationID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * BuyerLocations.As().List() // lists BuyerLocations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
