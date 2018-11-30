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
    define(['Sdk', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.OrderApproval = factory(root.OrderCloud.Sdk, root.OrderCloud.User);
  }
}(this, function(Sdk, User) {
  'use strict';




  /**
   * The OrderApproval model module.
   * @module model/OrderApproval
   */

  /**
   * Constructs a new <code>OrderApproval</code>.
   * @alias module:model/OrderApproval
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>OrderApproval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderApproval} obj Optional instance to populate.
   * @return {module:model/OrderApproval} The populated <code>OrderApproval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ApprovalRuleID')) {
        obj['ApprovalRuleID'] = Sdk.convertToType(data['ApprovalRuleID'], 'String');
      }
      if (data.hasOwnProperty('ApprovingGroupID')) {
        obj['ApprovingGroupID'] = Sdk.convertToType(data['ApprovingGroupID'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = Sdk.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('AllowResubmit')) {
        obj['AllowResubmit'] = Sdk.convertToType(data['AllowResubmit'], 'Boolean');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = Sdk.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('DateCompleted')) {
        obj['DateCompleted'] = Sdk.convertToType(data['DateCompleted'], 'String');
      }
      if (data.hasOwnProperty('Approver')) {
        obj['Approver'] = User.constructFromObject(data['Approver']);
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = Sdk.convertToType(data['Comments'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ApprovalRuleID
   */
  exports.prototype['ApprovalRuleID'] = undefined;
  /**
   * @member {String} ApprovingGroupID
   */
  exports.prototype['ApprovingGroupID'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {Boolean} AllowResubmit
   */
  exports.prototype['AllowResubmit'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} DateCompleted
   */
  exports.prototype['DateCompleted'] = undefined;
  /**
   * @member {module:model/User} Approver
   */
  exports.prototype['Approver'] = undefined;
  /**
   * @member {String} Comments
   */
  exports.prototype['Comments'] = undefined;



  return exports;
}));


