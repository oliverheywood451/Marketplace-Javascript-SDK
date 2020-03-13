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

export default class OrchestrationUsers {
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
    * @param marketplaceAddressBuyer 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddress(buyerId: string, clientId: string, marketplaceAddressBuyer: MarketplaceAddressBuyer, accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/address`, marketplaceAddressBuyer, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace address assignment.
    * @param clientId Client id of the marketplace address assignment.
    * @param marketplaceAddressAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddressAssignment(buyerId: string, clientId: string, marketplaceAddressAssignment: MarketplaceAddressAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/addressassignment`, marketplaceAddressAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace cost center.
    * @param clientId Client id of the marketplace cost center.
    * @param marketplaceCostCenter 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCostCenter(buyerId: string, clientId: string, marketplaceCostCenter: MarketplaceCostCenter, accessToken?: string ): Promise<RequiredDeep<MarketplaceCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/costcenter`, marketplaceCostCenter, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user.
    * @param clientId Client id of the marketplace user.
    * @param marketplaceUser 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUser(buyerId: string, clientId: string, marketplaceUser: MarketplaceUser, accessToken?: string ): Promise<RequiredDeep<MarketplaceUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/user`, marketplaceUser, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group.
    * @param clientId Client id of the marketplace user group.
    * @param marketplaceUserGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroup(buyerId: string, clientId: string, marketplaceUserGroup: MarketplaceUserGroup, accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroup`, marketplaceUserGroup, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group assignment.
    * @param clientId Client id of the marketplace user group assignment.
    * @param marketplaceUserGroupAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroupAssignment(buyerId: string, clientId: string, marketplaceUserGroupAssignment: MarketplaceUserGroupAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroupAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/${buyerId}/usergroupassignment`, marketplaceUserGroupAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param clientId Client id of the marketplace buyer.
    * @param marketplaceBuyer 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostBuyer(clientId: string, marketplaceBuyer: MarketplaceBuyer, accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${clientId}/buyer`, marketplaceBuyer, { params: {  accessToken, impersonating } } );
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
