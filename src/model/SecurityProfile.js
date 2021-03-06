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
    define(['Sdk', 'model/PasswordConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('./PasswordConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SecurityProfile = factory(root.OrderCloud.Sdk, root.OrderCloud.PasswordConfig);
  }
}(this, function(Sdk, PasswordConfig) {
  'use strict';




  /**
   * The SecurityProfile model module.
   * @module model/SecurityProfile
   */

  /**
   * Constructs a new <code>SecurityProfile</code>.
   * @alias module:model/SecurityProfile
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SecurityProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityProfile} obj Optional instance to populate.
   * @return {module:model/SecurityProfile} The populated <code>SecurityProfile</code> instance.
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
      if (data.hasOwnProperty('Roles')) {
        obj['Roles'] = Sdk.convertToType(data['Roles'], ['String']);
      }
      if (data.hasOwnProperty('CustomRoles')) {
        obj['CustomRoles'] = Sdk.convertToType(data['CustomRoles'], ['String']);
      }
      if (data.hasOwnProperty('PasswordConfig')) {
        obj['PasswordConfig'] = PasswordConfig.constructFromObject(data['PasswordConfig']);
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
   * @member {Array.<String>} Roles
   */
  exports.prototype['Roles'] = undefined;
  /**
   * @member {Array.<String>} CustomRoles
   */
  exports.prototype['CustomRoles'] = undefined;
  /**
   * @member {module:model/PasswordConfig} PasswordConfig
   */
  exports.prototype['PasswordConfig'] = undefined;



  return exports;
}));


