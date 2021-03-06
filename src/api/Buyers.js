/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Sdk', 'model/Buyer', 'model/ListBuyer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/Buyer'), require('../model/ListBuyer'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Buyers = factory(root.OrderCloud.Sdk, root.OrderCloud.Buyer, root.OrderCloud.ListBuyer);
  }
}(this, function(Sdk, Buyer, ListBuyer) {
  'use strict';

  /**
   * Buyer service.
   * @module api/Buyers
   */

  /**
   * Constructs a new Buyers. 
   * @alias module:api/Buyers
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {module:model/Buyer} buyer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Create = function(buyer, accessToken ) {
      var postBody = buyer;

      // verify the required parameter 'buyer' is set
      if (buyer == undefined || buyer == null) {
        throw new Error("Missing the required parameter 'buyer' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.sdk.callApi(
        '/buyers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.sdk.callApi(
        '/buyers/{buyerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Get = function(buyerID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.sdk.callApi(
        '/buyers/{buyerID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyer}
     */
    this.List = function(opts, accessToken ) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyer;

      return this.sdk.callApi(
        '/buyers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} partialBuyer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Patch = function(buyerID, partialBuyer, accessToken ) {
      var postBody = partialBuyer;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'partialBuyer' is set
      if (partialBuyer == undefined || partialBuyer == null) {
        throw new Error("Missing the required parameter 'partialBuyer' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.sdk.callApi(
        '/buyers/{buyerID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} buyer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Save = function(buyerID, buyer, accessToken ) {
      var postBody = buyer;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Save");
      }

      // verify the required parameter 'buyer' is set
      if (buyer == undefined || buyer == null) {
        throw new Error("Missing the required parameter 'buyer' when calling Save");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.sdk.callApi(
        '/buyers/{buyerID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }
  };

  return exports;
}));
