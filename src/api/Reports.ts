import { ReportTemplate } from '../models/ReportTemplate';
import { ListPage } from '../models/ListPage';
import { ReportTypeResource } from '../models/ReportTypeResource';
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
        this.GetReportTemplate = this.GetReportTemplate.bind(this);
        this.UpdateReportTemplate = this.UpdateReportTemplate.bind(this);
        this.DeleteReportTemplate = this.DeleteReportTemplate.bind(this);
        this.PostReportTemplate = this.PostReportTemplate.bind(this);
        this.ListReportTemplatesByReportType = this.ListReportTemplatesByReportType.bind(this);
        this.DownloadBuyerLocation = this.DownloadBuyerLocation.bind(this);
        this.BuyerLocation = this.BuyerLocation.bind(this);
        this.GetSharedAccessSignature = this.GetSharedAccessSignature.bind(this);
        this.FetchAllReportTypes = this.FetchAllReportTypes.bind(this);
        this.DownloadPurchaseOrderDetail = this.DownloadPurchaseOrderDetail.bind(this);
        this.PurchaseOrderDetail = this.PurchaseOrderDetail.bind(this);
        this.DownloadSalesOrderDetail = this.DownloadSalesOrderDetail.bind(this);
        this.SalesOrderDetail = this.SalesOrderDetail.bind(this);
    }

   /**
    * @param id Id of the report template.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetReportTemplate(id: string,  accessToken?: string ): Promise<RequiredDeep<ReportTemplate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/${id}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param id Id of the report template.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async UpdateReportTemplate(id: string, reportTemplate: ReportTemplate, accessToken?: string ): Promise<RequiredDeep<ReportTemplate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/reports/${id}`, reportTemplate, { params: {  accessToken, impersonating } } );
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
    * @param reportType Report type of the report template. Possible values: BuyerLocation, SalesOrderDetail, PurchaseOrderDetail.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostReportTemplate(reportType: 'BuyerLocation' | 'SalesOrderDetail' | 'PurchaseOrderDetail', reportTemplate: ReportTemplate, accessToken?: string ): Promise<RequiredDeep<ReportTemplate>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/${reportType}`, reportTemplate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param reportType Report type of the report template. Possible values: BuyerLocation, SalesOrderDetail, PurchaseOrderDetail.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListReportTemplatesByReportType(reportType: 'BuyerLocation' | 'SalesOrderDetail' | 'PurchaseOrderDetail',  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/${reportType}/listtemplates`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DownloadBuyerLocation(templateID: string, reportTemplate: ReportTemplate, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/BuyerLocation/download/${templateID}`, reportTemplate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async BuyerLocation(templateID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/BuyerLocation/preview/${templateID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param fileName File name of the string.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSharedAccessSignature(fileName: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/download-shared-access/${fileName}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async FetchAllReportTypes( accessToken?: string ): Promise<RequiredDeep<ListPage<ReportTypeResource>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/fetchAllReportTypes`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param lowDateRange Low date range of the report template.
    * @param highDateRange High date range of the report template.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DownloadPurchaseOrderDetail(templateID: string, lowDateRange: string, highDateRange: string, reportTemplate: ReportTemplate, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/PurchaseOrderDetail/download/${templateID}/${lowDateRange}/${highDateRange}`, reportTemplate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param lowDateRange Low date range of the marketplace order.
    * @param highDateRange High date range of the marketplace order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PurchaseOrderDetail(templateID: string, lowDateRange: string, highDateRange: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/PurchaseOrderDetail/preview/${templateID}/${lowDateRange}/${highDateRange}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param lowDateRange Low date range of the report template.
    * @param highDateRange High date range of the report template.
    * @param reportTemplate 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DownloadSalesOrderDetail(templateID: string, lowDateRange: string, highDateRange: string, reportTemplate: ReportTemplate, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/reports/SalesOrderDetail/download/${templateID}/${lowDateRange}/${highDateRange}`, reportTemplate, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param templateID ID of the template.
    * @param lowDateRange Low date range of the marketplace order.
    * @param highDateRange High date range of the marketplace order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SalesOrderDetail(templateID: string, lowDateRange: string, highDateRange: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/reports/SalesOrderDetail/preview/${templateID}/${lowDateRange}/${highDateRange}`, { params: {  accessToken, impersonating } } );
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
