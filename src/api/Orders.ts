import { OrderDetails } from '../models/OrderDetails';
import { MarketplaceLineItem } from '../models/MarketplaceLineItem';
import { Order } from '../models/Order';
import { ListPage } from '../models/ListPage';
import { RequiredDeep } from '../models/RequiredDeep';
import { ListArgs } from '../models/ListArgs'
import httpClient from '../utils/HttpClient';

export default class Orders {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetOrderDetails = this.GetOrderDetails.bind(this);
        this.UpsertLineItem = this.UpsertLineItem.bind(this);
        this.GetOrderShipmentsWithItems = this.GetOrderShipmentsWithItems.bind(this);
        this.AcknowledgeQuoteOrder = this.AcknowledgeQuoteOrder.bind(this);
        this.ListLocationOrders = this.ListLocationOrders.bind(this);
        this.RequestReturnEmail = this.RequestReturnEmail.bind(this);
    }

   /**
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetOrderDetails(orderID: string,  accessToken?: string ): Promise<RequiredDeep<OrderDetails>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/order/${orderID}/details`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param orderID ID of the order.
    * @param marketplaceLineItem Required fields: ProductID, Quantity
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async UpsertLineItem(orderID: string, marketplaceLineItem: MarketplaceLineItem, accessToken?: string ): Promise<RequiredDeep<MarketplaceLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/order/${orderID}/lineitems`, marketplaceLineItem, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetOrderShipmentsWithItems(orderID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/order/${orderID}/shipmentswithitems`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async AcknowledgeQuoteOrder(orderID: string,  accessToken?: string ): Promise<RequiredDeep<Order>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/order/acknowledgequote/${orderID}`, {}, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param locationID ID of the location.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListLocationOrders(locationID: string,  options: ListArgs<Order> = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<Order>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/order/location/${locationID}`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async RequestReturnEmail(orderID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/order/requestreturn/${orderID}`, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Orders.As().List() // lists Orders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}
