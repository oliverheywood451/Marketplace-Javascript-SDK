import { CreditCardPayment } from '../models/CreditCardPayment';
import { Payment } from '../models/Payment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class MePayments {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Post = this.Post.bind(this);
    }

   /**
    * @param creditCardPayment Required fields: OrderID, Currency, MerchantID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post<TPayment extends Payment>(creditCardPayment: CreditCardPayment, accessToken?: string ): Promise<RequiredDeep<TPayment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/payments`, creditCardPayment, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * MePayments.As().List() // lists MePayments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new MePayments();