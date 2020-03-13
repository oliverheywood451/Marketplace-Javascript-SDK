import { MarketplaceCatalog } from '../models/MarketplaceCatalog';
import { MarketplaceCatalogAssignment } from '../models/MarketplaceCatalogAssignment';
import { MarketplacePriceSchedule } from '../models/MarketplacePriceSchedule';
import { MarketplaceProduct } from '../models/MarketplaceProduct';
import { MarketplaceProductAssignment } from '../models/MarketplaceProductAssignment';
import { MarketplaceProductFacet } from '../models/MarketplaceProductFacet';
import { MarketplaceSpec } from '../models/MarketplaceSpec';
import { MarketplaceSpecOption } from '../models/MarketplaceSpecOption';
import { MarketplaceSpecProductAssignment } from '../models/MarketplaceSpecProductAssignment';
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
        this.PostPriceSchedule = this.PostPriceSchedule.bind(this);
        this.PostProduct = this.PostProduct.bind(this);
        this.PostProductAssignment = this.PostProductAssignment.bind(this);
        this.PostProductFacet = this.PostProductFacet.bind(this);
        this.PostSpec = this.PostSpec.bind(this);
        this.PostSpecOption = this.PostSpecOption.bind(this);
        this.PostSpecProductAssignment = this.PostSpecProductAssignment.bind(this);
    }

   /**
    * @param clientId Client id of the marketplace catalog.
    * @param marketplaceCatalog 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalog(clientId: string, marketplaceCatalog: MarketplaceCatalog, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/catalog`, marketplaceCatalog, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace catalog assignment.
    * @param marketplaceCatalogAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalogProductAssignment(clientId: string, marketplaceCatalogAssignment: MarketplaceCatalogAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalogAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/catalogproductassignment`, marketplaceCatalogAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace price schedule.
    * @param marketplacePriceSchedule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostPriceSchedule(clientId: string, marketplacePriceSchedule: MarketplacePriceSchedule, accessToken?: string ): Promise<RequiredDeep<MarketplacePriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/priceschedule`, marketplacePriceSchedule, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product.
    * @param marketplaceProduct 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProduct(clientId: string, marketplaceProduct: MarketplaceProduct, accessToken?: string ): Promise<RequiredDeep<MarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/product`, marketplaceProduct, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product assignment.
    * @param marketplaceProductAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductAssignment(clientId: string, marketplaceProductAssignment: MarketplaceProductAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/productassignment`, marketplaceProductAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product facet.
    * @param marketplaceProductFacet 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductFacet(clientId: string, marketplaceProductFacet: MarketplaceProductFacet, accessToken?: string ): Promise<RequiredDeep<MarketplaceProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/productfacet`, marketplaceProductFacet, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec.
    * @param marketplaceSpec 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpec(clientId: string, marketplaceSpec: MarketplaceSpec, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/spec`, marketplaceSpec, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec option.
    * @param marketplaceSpecOption 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecOption(clientId: string, marketplaceSpecOption: MarketplaceSpecOption, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/specoption`, marketplaceSpecOption, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec product assignment.
    * @param marketplaceSpecProductAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecProductAssignment(clientId: string, marketplaceSpecProductAssignment: MarketplaceSpecProductAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/specproductassignment`, marketplaceSpecProductAssignment, { params: {  accessToken, impersonating } } );
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
