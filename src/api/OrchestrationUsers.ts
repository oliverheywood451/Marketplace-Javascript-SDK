import { MarketplaceAddressBuyer } from '../models/MarketplaceAddressBuyer';
import { MarketplaceAddressAssignment } from '../models/MarketplaceAddressAssignment';
import { MarketplaceCostCenter } from '../models/MarketplaceCostCenter';
import { MarketplaceUser } from '../models/MarketplaceUser';
import { MarketplaceUserGroup } from '../models/MarketplaceUserGroup';
import { MarketplaceUserGroupAssignment } from '../models/MarketplaceUserGroupAssignment';
import { MarketplaceBuyer } from '../models/MarketplaceBuyer';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
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
    public async PostAddress(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/address`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace address assignment.
    * @param clientId Client id of the marketplace address assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddressAssignment(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/addressassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace cost center.
    * @param clientId Client id of the marketplace cost center.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCostCenter(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/costcenter`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user.
    * @param clientId Client id of the marketplace user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUser(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/user`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group.
    * @param clientId Client id of the marketplace user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroup(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroup`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group assignment.
    * @param clientId Client id of the marketplace user group assignment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroupAssignment(buyerId: string, clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroupAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroupassignment`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostBuyer(clientId: string,  accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyer>> {
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