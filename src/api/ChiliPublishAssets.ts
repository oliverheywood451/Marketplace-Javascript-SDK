import { ChiliAPIUploadRequest } from '../models/ChiliAPIUploadRequest';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class ChiliPublishAssets {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Save = this.Save.bind(this);
    }

   /**
    * @param chiliAPIUploadRequest 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save(chiliAPIUploadRequest: ChiliAPIUploadRequest, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/chilipublish/asset`, chiliAPIUploadRequest, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ChiliPublishAssets.As().List() // lists ChiliPublishAssets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}