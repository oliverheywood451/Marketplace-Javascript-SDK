import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class MeCreditCardAuthorizations {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.MePost = this.MePost.bind(this);
    }

   /**
    * @param card Card of the credit card.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async MePost(card: any,  accessToken?: string ): Promise<RequiredDeep<BuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, {}, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * MeCreditCardAuthorizations.As().List() // lists MeCreditCardAuthorizations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
