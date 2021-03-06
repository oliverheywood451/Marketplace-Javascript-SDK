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
    define(['Sdk', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminUsers = factory(root.OrderCloud.Sdk, root.OrderCloud.ListUser, root.OrderCloud.User);
  }
}(this, function(Sdk, ListUser, User) {
  'use strict';

  /**
   * AdminUser service.
   * @module api/AdminUsers
   */

  /**
   * Constructs a new AdminUsers. 
   * @alias module:api/AdminUsers
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Create = function(user, accessToken ) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Create");
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
      var returnType = User;

      return this.sdk.callApi(
        '/adminusers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(userID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Delete");
      }


      var pathParams = {
        'userID': userID
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
        '/adminusers/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function(userID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Get");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.sdk.callApi(
        '/adminusers/{userID}', 'GET',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
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
      var returnType = ListUser;

      return this.sdk.callApi(
        '/adminusers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} partialUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(userID, partialUser, accessToken ) {
      var postBody = partialUser;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Patch");
      }

      // verify the required parameter 'partialUser' is set
      if (partialUser == undefined || partialUser == null) {
        throw new Error("Missing the required parameter 'partialUser' when calling Patch");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.sdk.callApi(
        '/adminusers/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Save = function(userID, user, accessToken ) {
      var postBody = user;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Save");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Save");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.sdk.callApi(
        '/adminusers/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }
  };

  return exports;
}));
