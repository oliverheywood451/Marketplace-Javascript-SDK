import { ChiliSpecForm } from '../models/ChiliSpecForm';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class TecraSpecForms {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * @param chiliSpecForm 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save(chiliSpecForm: ChiliSpecForm, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/tecra/specform`, chiliSpecForm, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param formID ID of the form.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(formID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/tecra/specform/${formID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * TecraSpecForms.As().List() // lists TecraSpecForms using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
