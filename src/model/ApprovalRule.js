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
    root.OrderCloud.ApprovalRule = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The ApprovalRule model module.
   * @module model/ApprovalRule
   */

  /**
   * Constructs a new <code>ApprovalRule</code>.
   * @alias module:model/ApprovalRule
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ApprovalRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApprovalRule} obj Optional instance to populate.
   * @return {module:model/ApprovalRule} The populated <code>ApprovalRule</code> instance.
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
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = Sdk.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('ApprovingGroupID')) {
        obj['ApprovingGroupID'] = Sdk.convertToType(data['ApprovingGroupID'], 'String');
      }
      if (data.hasOwnProperty('RuleExpression')) {
        obj['RuleExpression'] = Sdk.convertToType(data['RuleExpression'], 'String');
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
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} ApprovingGroupID
   */
  exports.prototype['ApprovingGroupID'] = undefined;
  /**
   * @member {String} RuleExpression
   */
  exports.prototype['RuleExpression'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


