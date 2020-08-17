import { ListPage } from '../models/ListPage';
import { Asset } from '../models/Asset';
import { AssetAssignment } from '../models/AssetAssignment';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Assets {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.ListAssetsOnChild = this.ListAssetsOnChild.bind(this);
        this.GetThumbnailOnChild = this.GetThumbnailOnChild.bind(this);
        this.ListAssets = this.ListAssets.bind(this);
        this.GetThumbnail = this.GetThumbnail.bind(this);
        this.SaveAssetAssignment = this.SaveAssetAssignment.bind(this);
        this.DeleteAssetAssignment = this.DeleteAssetAssignment.bind(this);
        this.ReorderAssetAssignment = this.ReorderAssetAssignment.bind(this);
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
    public async List( options: ListArgs<Asset> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Asset>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get(assetID: string,  accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param asset 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save(assetID: string, asset: Asset, accessToken?: string ): Promise<RequiredDeep<Asset>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/assets/${assetID}`, asset, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param assetID ID of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(assetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/assets/${assetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param parentType Parent type of the asset. Possible values: Catalogs, Buyers, Suppliers.
    * @param parentID ID of the parent.
    * @param type Type of the asset. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the asset.
    * @param options.args Args of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssetsOnChild(parentType: 'Catalogs' | 'Buyers' | 'Suppliers', parentID: string, type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  options: ListArgs<Asset> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Asset>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${parentType}/${parentID}/${type}/${ID}`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param parentType Parent type of the asset. Possible values: Catalogs, Buyers, Suppliers.
    * @param parentID ID of the parent.
    * @param type Type of the asset. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the asset.
    * @param options.size Size of the asset. Possible values: S, M.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetThumbnailOnChild(parentType: 'Catalogs' | 'Buyers' | 'Suppliers', parentID: string, type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  size: 'S' | 'M', accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${parentType}/${parentID}/${type}/${ID}/thumbnail`, { params: { size,  accessToken, impersonating } } );
    }

   /**
    * @param type Type of the asset. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the asset.
    * @param options.args Args of the asset.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssets(type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  options: ListArgs<Asset> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Asset>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${type}/${ID}`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param type Type of the asset. Possible values: Catalogs, Categories, Products, PriceSchedules, ProductFacets, Specs, SecurityProfiles, PasswordResets, OpenIdConnects, ImpersonationConfigs, Buyers, Users, UserGroups, Addresses, CostCenters, CreditCards, SpendingAccounts, ApprovalRules, Suppliers, SupplierUsers, SupplierUserGroups, SupplierAddresses, Promotions, AdminUsers, AdminAddresses, AdminUserGroups, MessageSenders, Webhooks, ApiClients, Incrementors, IntegrationEvents, XpIndices.
    * @param ID ID of the asset.
    * @param options.size Size of the asset. Possible values: S, M.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetThumbnail(type: 'Catalogs' | 'Categories' | 'Products' | 'PriceSchedules' | 'ProductFacets' | 'Specs' | 'SecurityProfiles' | 'PasswordResets' | 'OpenIdConnects' | 'ImpersonationConfigs' | 'Buyers' | 'Users' | 'UserGroups' | 'Addresses' | 'CostCenters' | 'CreditCards' | 'SpendingAccounts' | 'ApprovalRules' | 'Suppliers' | 'SupplierUsers' | 'SupplierUserGroups' | 'SupplierAddresses' | 'Promotions' | 'AdminUsers' | 'AdminAddresses' | 'AdminUserGroups' | 'MessageSenders' | 'Webhooks' | 'ApiClients' | 'Incrementors' | 'IntegrationEvents' | 'XpIndices', ID: string,  size: 'S' | 'M', accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/assets/${type}/${ID}/thumbnail`, { params: { size,  accessToken, impersonating } } );
    }

   /**
    * @param assetAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssetAssignment(assetAssignment: AssetAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/assets/assignments`, assetAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param options.AssetID 
    * @param options.ResourceID 
    * @param options.ResourceType 
    * @param options.ParentResourceID 
    * @param options.ParentResourceType 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssetAssignment( AssetID: string, ResourceID: string, ResourceType: string, ParentResourceID: string, ParentResourceType: string, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/assets/assignments`, { params: { AssetID, ResourceID, ResourceType, ParentResourceID, ParentResourceType,  accessToken, impersonating } } );
    }

   /**
    * @param listOrderWithinType List order within type of the asset assignment.
    * @param assetAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ReorderAssetAssignment(listOrderWithinType: number, assetAssignment: AssetAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/assets/assignments/moveto/${listOrderWithinType}`, assetAssignment, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Assets.As().List() // lists Assets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
