import { Order } from '../models/Order';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Orders {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.AcknowledgeQuoteOrder = this.AcknowledgeQuoteOrder.bind(this);
    }

   /**
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async AcknowledgeQuoteOrder(orderID: string,  accessToken?: string ): Promise<RequiredDeep<Order>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/order/acknowledgequote/${orderID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Orders.As().List() // lists Orders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
