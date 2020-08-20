import { ReportTemplate } from '../models/ReportTemplate';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Reports {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.DeleteReportTemplate = this.DeleteReportTemplate.bind(this);
        this.PostReportTemplate = this.PostReportTemplate.bind(this);
        this.ListReportTemplatesByReportType = this.ListReportTemplatesByReportType.bind(this);
        this.DownloadBuyerLocation = this.DownloadBuyerLocation.bind(this);
        this.BuyerLocation = this.BuyerLocation.bind(this);
    }

   /**
    * @param id Id of the report.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteReportTemplate(id: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/reports/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param reportType Report type of the report template. Possible values: BuyerLocation.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostReportTemplate(reportType: 'BuyerLocation', reportTemplate: ReportTemplate, accessToken?: string ): Promise<RequiredDeep<ReportTemplate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/${reportType}`, reportTemplate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param reportType Report type of the report template. Possible values: BuyerLocation.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListReportTemplatesByReportType(reportType: 'BuyerLocation',  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/${reportType}/listtemplates`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param options.requestBody Request body of the report.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DownloadBuyerLocation(templateID: string,  requestBody: any, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/buyerLocation/download/${templateID}`, {}, { params: { requestBody,  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async BuyerLocation(templateID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/buyerLocation/preview/${templateID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Reports.As().List() // lists Reports using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
