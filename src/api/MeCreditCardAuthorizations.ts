import { CreditCardToken } from '../models/CreditCardToken';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class MeCreditCardAuthorizations {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.MePost = this.MePost.bind(this);
    }

   /**
    * @param creditCardToken Required fields: ExpirationDate
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async MePost<TBuyerCreditCard extends BuyerCreditCard>(creditCardToken: CreditCardToken, accessToken?: string ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, creditCardToken, { params: {  accessToken, impersonating } } );
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

export default new MeCreditCardAuthorizations();