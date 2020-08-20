import { MarketplaceCatalog } from '../models/MarketplaceCatalog';
import { MarketplaceCatalogAssignment } from '../models/MarketplaceCatalogAssignment';
import { SuperMarketplaceProduct } from '../models/SuperMarketplaceProduct';
import { MarketplacePriceSchedule } from '../models/MarketplacePriceSchedule';
import { MarketplaceProduct } from '../models/MarketplaceProduct';
import { MarketplaceProductAssignment } from '../models/MarketplaceProductAssignment';
import { MarketplaceProductFacet } from '../models/MarketplaceProductFacet';
import { MarketplaceSpec } from '../models/MarketplaceSpec';
import { MarketplaceSpecOption } from '../models/MarketplaceSpecOption';
import { MarketplaceSpecProductAssignment } from '../models/MarketplaceSpecProductAssignment';
import { TemplateProductFlat } from '../models/TemplateProductFlat';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class OrchestrationProducts {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.PostCatalog = this.PostCatalog.bind(this);
        this.PostCatalogProductAssignment = this.PostCatalogProductAssignment.bind(this);
        this.PostHydratedProduct = this.PostHydratedProduct.bind(this);
        this.PostPriceSchedule = this.PostPriceSchedule.bind(this);
        this.PostProduct = this.PostProduct.bind(this);
        this.PostProductAssignment = this.PostProductAssignment.bind(this);
        this.PostProductFacet = this.PostProductFacet.bind(this);
        this.PostSpec = this.PostSpec.bind(this);
        this.PostSpecOption = this.PostSpecOption.bind(this);
        this.PostSpecProductAssignment = this.PostSpecProductAssignment.bind(this);
        this.PostTemplateFlatProduct = this.PostTemplateFlatProduct.bind(this);
    }

   /**
    * @param marketplaceCatalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalog(marketplaceCatalog: MarketplaceCatalog, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/catalog`, marketplaceCatalog, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceCatalogAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalogProductAssignment(marketplaceCatalogAssignment: MarketplaceCatalogAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalogAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/catalogproductassignment`, marketplaceCatalogAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param superMarketplaceProduct 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostHydratedProduct(superMarketplaceProduct: SuperMarketplaceProduct, accessToken?: string ): Promise<RequiredDeep<SuperMarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/hydrated`, superMarketplaceProduct, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplacePriceSchedule Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostPriceSchedule(marketplacePriceSchedule: MarketplacePriceSchedule, accessToken?: string ): Promise<RequiredDeep<MarketplacePriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/priceschedule`, marketplacePriceSchedule, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceProduct Required fields: Name, QuantityMultiplier
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProduct(marketplaceProduct: MarketplaceProduct, accessToken?: string ): Promise<RequiredDeep<MarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/product`, marketplaceProduct, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceProductAssignment Required fields: ProductID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductAssignment(marketplaceProductAssignment: MarketplaceProductAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/productassignment`, marketplaceProductAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceProductFacet Required fields: Name, MinCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductFacet(marketplaceProductFacet: MarketplaceProductFacet, accessToken?: string ): Promise<RequiredDeep<MarketplaceProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/productfacet`, marketplaceProductFacet, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceSpec Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpec(marketplaceSpec: MarketplaceSpec, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/spec`, marketplaceSpec, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceSpecOption Required fields: Value
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecOption(marketplaceSpecOption: MarketplaceSpecOption, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/specoption`, marketplaceSpecOption, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param options.clientId Client id of the marketplace spec product assignment.
    * @param marketplaceSpecProductAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecProductAssignment(marketplaceSpecProductAssignment: MarketplaceSpecProductAssignment, clientId: string, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/specproductassignment`, marketplaceSpecProductAssignment, { params: { clientId,  accessToken, impersonating } } );
    }

   /**
    * @param templateProductFlat Required fields: ID, Name, TaxCategory, TaxCode, Price
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostTemplateFlatProduct(templateProductFlat: TemplateProductFlat, accessToken?: string ): Promise<RequiredDeep<TemplateProductFlat>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/templateproduct`, templateProductFlat, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * OrchestrationProducts.As().List() // lists OrchestrationProducts using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
