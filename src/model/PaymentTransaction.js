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
    root.OrderCloud.PaymentTransaction = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The PaymentTransaction model module.
   * @module model/PaymentTransaction
   */

  /**
   * Constructs a new <code>PaymentTransaction</code>.
   * @alias module:model/PaymentTransaction
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentTransaction} obj Optional instance to populate.
   * @return {module:model/PaymentTransaction} The populated <code>PaymentTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = Sdk.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('DateExecuted')) {
        obj['DateExecuted'] = Sdk.convertToType(data['DateExecuted'], 'String');
      }
      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = Sdk.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Succeeded')) {
        obj['Succeeded'] = Sdk.convertToType(data['Succeeded'], 'Boolean');
      }
      if (data.hasOwnProperty('ResultCode')) {
        obj['ResultCode'] = Sdk.convertToType(data['ResultCode'], 'String');
      }
      if (data.hasOwnProperty('ResultMessage')) {
        obj['ResultMessage'] = Sdk.convertToType(data['ResultMessage'], 'String');
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
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} DateExecuted
   */
  exports.prototype['DateExecuted'] = undefined;
  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {Boolean} Succeeded
   */
  exports.prototype['Succeeded'] = undefined;
  /**
   * @member {String} ResultCode
   */
  exports.prototype['ResultCode'] = undefined;
  /**
   * @member {String} ResultMessage
   */
  exports.prototype['ResultMessage'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


