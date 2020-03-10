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

class OrchestrationProducts {
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
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalog(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/catalog`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace catalog assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCatalogProductAssignment(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceCatalogAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/catalogproductassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostPriceSchedule(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplacePriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/priceschedule`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProduct(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/product`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductAssignment(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/productassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace product facet.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostProductFacet(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/productfacet`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpec(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/spec`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec option.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecOption(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/specoption`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace spec product assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostSpecProductAssignment(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceSpecProductAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/specproductassignment`, { params: {  accessToken, impersonating } } );
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

export default new OrchestrationProducts();