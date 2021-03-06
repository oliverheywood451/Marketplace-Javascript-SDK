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
    define(['Sdk', 'model/Address', 'model/ListAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/Address'), require('../model/ListAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SupplierAddresses = factory(root.OrderCloud.Sdk, root.OrderCloud.Address, root.OrderCloud.ListAddress);
  }
}(this, function(Sdk, Address, ListAddress) {
  'use strict';

  /**
   * SupplierAddress service.
   * @module api/SupplierAddresses
   */

  /**
   * Constructs a new SupplierAddresses. 
   * @alias module:api/SupplierAddresses
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Create = function(supplierID, address, accessToken ) {
      var postBody = address;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Create");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Create");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.sdk.callApi(
        '/suppliers/{supplierID}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(supplierID, addressID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Delete");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Delete");
      }


      var pathParams = {
        'supplierID': supplierID,
        'addressID': addressID
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
        '/suppliers/{supplierID}/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Get = function(supplierID, addressID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Get");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Get");
      }


      var pathParams = {
        'supplierID': supplierID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.sdk.callApi(
        '/suppliers/{supplierID}/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddress}
     */
    this.List = function(supplierID, opts, accessToken ) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling List");
      }


      var pathParams = {
        'supplierID': supplierID
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
      var returnType = ListAddress;

      return this.sdk.callApi(
        '/suppliers/{supplierID}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} partialAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Patch = function(supplierID, addressID, partialAddress, accessToken ) {
      var postBody = partialAddress;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Patch");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Patch");
      }

      // verify the required parameter 'partialAddress' is set
      if (partialAddress == undefined || partialAddress == null) {
        throw new Error("Missing the required parameter 'partialAddress' when calling Patch");
      }


      var pathParams = {
        'supplierID': supplierID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.sdk.callApi(
        '/suppliers/{supplierID}/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Save = function(supplierID, addressID, address, accessToken ) {
      var postBody = address;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Save");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Save");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Save");
      }


      var pathParams = {
        'supplierID': supplierID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.sdk.callApi(
        '/suppliers/{supplierID}/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }
  };

  return exports;
}));
