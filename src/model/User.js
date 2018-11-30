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
    root.OrderCloud.User = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Username')) {
        obj['Username'] = Sdk.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('Password')) {
        obj['Password'] = Sdk.convertToType(data['Password'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = Sdk.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = Sdk.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = Sdk.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = Sdk.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('TermsAccepted')) {
        obj['TermsAccepted'] = Sdk.convertToType(data['TermsAccepted'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = Sdk.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = Sdk.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('AvailableRoles')) {
        obj['AvailableRoles'] = Sdk.convertToType(data['AvailableRoles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} Password
   */
  exports.prototype['Password'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} TermsAccepted
   */
  exports.prototype['TermsAccepted'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Array.<String>} AvailableRoles
   */
  exports.prototype['AvailableRoles'] = undefined;



  return exports;
}));


