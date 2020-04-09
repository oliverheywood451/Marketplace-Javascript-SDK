import { SuperShipment } from '../models/SuperShipment';
import { ShipmentCreateResponse } from '../models/ShipmentCreateResponse';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Shipments {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Create = this.Create.bind(this);
    }

   /**
    * @param superShipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create(superShipment: SuperShipment, accessToken?: string ): Promise<RequiredDeep<ShipmentCreateResponse>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipment`, superShipment, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Shipments.As().List() // lists Shipments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
