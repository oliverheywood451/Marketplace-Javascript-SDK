import { CreditCardToken } from '../models/CreditCardToken';
import { CreditCard } from '../models/CreditCard';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class CreditCardAuthorizations {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Post = this.Post.bind(this);
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardToken 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Post(buyerID: string, creditCardToken: CreditCardToken, accessToken?: string ): Promise<RequiredDeep<CreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/creditcards`, creditCardToken, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CreditCardAuthorizations.As().List() // lists CreditCardAuthorizations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
