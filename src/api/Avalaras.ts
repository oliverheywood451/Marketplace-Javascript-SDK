import { TaxCertificate } from '../models/TaxCertificate';
import { Authentication } from '../models/Authentication';
import { ListPage } from '../models/ListPage';
import { TaxCode } from '../models/TaxCode';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Avalaras {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.CreateCertificate = this.CreateCertificate.bind(this);
        this.GetCertificate = this.GetCertificate.bind(this);
        this.UpdateCertificate = this.UpdateCertificate.bind(this);
        this.DownloadCertificate = this.DownloadCertificate.bind(this);
        this.ListTaxCodes = this.ListTaxCodes.bind(this);
    }

   /**
    * @param companyID ID of the company.
    * @param taxCertificate Required fields: SignedDate, ExpirationDate, ExposureZoneName, Base64UrlEncodedPDF
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateCertificate(companyID: number, taxCertificate: TaxCertificate, accessToken?: string ): Promise<RequiredDeep<TaxCertificate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/avalara/${companyID}/certificate`, taxCertificate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param companyID ID of the company.
    * @param certificateID ID of the certificate.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCertificate(companyID: number, certificateID: number,  accessToken?: string ): Promise<RequiredDeep<TaxCertificate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/avalara/${companyID}/certificate/${certificateID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param companyID ID of the company.
    * @param certificateID ID of the certificate.
    * @param taxCertificate Required fields: SignedDate, ExpirationDate, ExposureZoneName, Base64UrlEncodedPDF
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async UpdateCertificate(companyID: number, certificateID: number, taxCertificate: TaxCertificate, accessToken?: string ): Promise<RequiredDeep<TaxCertificate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/avalara/${companyID}/certificate/${certificateID}`, taxCertificate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param companyID ID of the company.
    * @param certificateID ID of the certificate.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DownloadCertificate(companyID: number, certificateID: number,  accessToken?: string ): Promise<RequiredDeep<Authentication>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/avalara/${companyID}/certificate/${certificateID}/pdf`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListTaxCodes( options: ListArgs<TaxCode> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TaxCode>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/avalara/code`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Avalaras.As().List() // lists Avalaras using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}