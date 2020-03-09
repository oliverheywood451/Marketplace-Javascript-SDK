import { OrderCalculateResponse } from '../models/OrderCalculateResponse';
import { ProposedShipmentResponse } from '../models/ProposedShipmentResponse';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Integrations {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.CalculateOrder = this.CalculateOrder.bind(this);
        this.GetShippingRates = this.GetShippingRates.bind(this);
    }

   /**
    * @param options.orderCalculationRequest Order calculation request of the order calculate response.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CalculateOrder<TOrderCalculateResponse extends OrderCalculateResponse>( options: { orderCalculationRequest?: any } = {}, accessToken?: string ): Promise<RequiredDeep<TOrderCalculateResponse>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/ordercalculate`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param options.orderCalculationRequest Order calculation request of the proposed shipment response.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetShippingRates<TProposedShipmentResponse extends ProposedShipmentResponse>( options: { orderCalculationRequest?: any } = {}, accessToken?: string ): Promise<RequiredDeep<TProposedShipmentResponse>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shippingrates`, { params: { ...options,  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Integrations.As().List() // lists Integrations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Integrations();