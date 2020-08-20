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
    * @param marketplaceAddressBuyer Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddress(buyerId: string, marketplaceAddressBuyer: MarketplaceAddressBuyer, accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/address`, marketplaceAddressBuyer, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace address assignment.
    * @param marketplaceAddressAssignment Required fields: AddressID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostAddressAssignment(buyerId: string, marketplaceAddressAssignment: MarketplaceAddressAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceAddressAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/addressassignment`, marketplaceAddressAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace cost center.
    * @param marketplaceCostCenter Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostCostCenter(buyerId: string, marketplaceCostCenter: MarketplaceCostCenter, accessToken?: string ): Promise<RequiredDeep<MarketplaceCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/costcenter`, marketplaceCostCenter, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user.
    * @param marketplaceUser Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUser(buyerId: string, marketplaceUser: MarketplaceUser, accessToken?: string ): Promise<RequiredDeep<MarketplaceUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/user`, marketplaceUser, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group.
    * @param marketplaceUserGroup Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroup(buyerId: string, marketplaceUserGroup: MarketplaceUserGroup, accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/usergroup`, marketplaceUserGroup, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param buyerId Buyer id of the marketplace user group assignment.
    * @param marketplaceUserGroupAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostUserGroupAssignment(buyerId: string, marketplaceUserGroupAssignment: MarketplaceUserGroupAssignment, accessToken?: string ): Promise<RequiredDeep<MarketplaceUserGroupAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/${buyerId}/usergroupassignment`, marketplaceUserGroupAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param marketplaceBuyer Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PostBuyer(marketplaceBuyer: MarketplaceBuyer, accessToken?: string ): Promise<RequiredDeep<MarketplaceBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orchestration/buyer`, marketplaceBuyer, { params: {  accessToken, impersonating } } );
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
