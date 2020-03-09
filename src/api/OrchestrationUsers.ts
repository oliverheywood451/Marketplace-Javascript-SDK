import { MarketplaceAddressBuyer } from '../models/MarketplaceAddressBuyer';
import { MarketplaceAddressAssignment } from '../models/MarketplaceAddressAssignment';
import { MarketplaceCostCenter } from '../models/MarketplaceCostCenter';
import { MarketplaceUser } from '../models/MarketplaceUser';
import { MarketplaceUserGroup } from '../models/MarketplaceUserGroup';
import { MarketplaceUserGroupAssignment } from '../models/MarketplaceUserGroupAssignment';
import { MarketplaceBuyer } from '../models/MarketplaceBuyer';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class OrchestrationUsers {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.PostAddress = this.PostAddress.bind(this);
        this.PostAddressAssignment = this.PostAddressAssignment.bind(this);
        this.PostCostCenter = this.PostCostCenter.bind(this);
        this.PostUser = this.PostUser.bind(this);
        this.PostUserGroup = this.PostUserGroup.bind(this);
        this.PostUserGroupAssignment = this.PostUserGroupAssignment.bind(this);
        this.PostBuyer = this.PostBuyer.bind(this);
    }

   /**
    * @param buyerId Buyer id of the marketplace address buyer.
    * @param clientId Client id of the marketplace address buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddress<TMarketplaceAddressBuyer extends MarketplaceAddressBuyer>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceAddressBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/address`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace address assignment.
    * @param clientId Client id of the marketplace address assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddressAssignment<TMarketplaceAddressAssignment extends MarketplaceAddressAssignment>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceAddressAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/addressassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace cost center.
    * @param clientId Client id of the marketplace cost center.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCostCenter<TMarketplaceCostCenter extends MarketplaceCostCenter>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/costcenter`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user.
    * @param clientId Client id of the marketplace user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUser<TMarketplaceUser extends MarketplaceUser>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/user`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group.
    * @param clientId Client id of the marketplace user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroup<TMarketplaceUserGroup extends MarketplaceUserGroup>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroup`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group assignment.
    * @param clientId Client id of the marketplace user group assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroupAssignment<TMarketplaceUserGroupAssignment extends MarketplaceUserGroupAssignment>(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceUserGroupAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroupassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostBuyer<TMarketplaceBuyer extends MarketplaceBuyer>(clientId: string,  accessToken?: string ): Promise<RequiredDeep<TMarketplaceBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/buyer`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * OrchestrationUsers.As().List() // lists OrchestrationUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new OrchestrationUsers();