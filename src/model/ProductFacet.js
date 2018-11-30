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
    define(['Sdk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ProductFacet = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The ProductFacet model module.
   * @module model/ProductFacet
   */

  /**
   * Constructs a new <code>ProductFacet</code>.
   * @alias module:model/ProductFacet
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductFacet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductFacet} obj Optional instance to populate.
   * @return {module:model/ProductFacet} The populated <code>ProductFacet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = Sdk.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('XpPath')) {
        obj['XpPath'] = Sdk.convertToType(data['XpPath'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = Sdk.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('MinCount')) {
        obj['MinCount'] = Sdk.convertToType(data['MinCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = Sdk.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} XpPath
   */
  exports.prototype['XpPath'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {Number} MinCount
   */
  exports.prototype['MinCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


