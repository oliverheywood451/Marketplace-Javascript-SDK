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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.PartialWebhook();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PartialWebhook', function() {
    it('should create an instance of PartialWebhook', function() {
      // uncomment below and update the code to test PartialWebhook
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be.a(OrderCloud.PartialWebhook);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "Url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property hashKey (base name: "HashKey")', function() {
      // uncomment below and update the code to test the property hashKey
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property elevatedRoles (base name: "ElevatedRoles")', function() {
      // uncomment below and update the code to test the property elevatedRoles
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property configData (base name: "ConfigData")', function() {
      // uncomment below and update the code to test the property configData
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property beforeProcessRequest (base name: "BeforeProcessRequest")', function() {
      // uncomment below and update the code to test the property beforeProcessRequest
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property apiClientIDs (base name: "ApiClientIDs")', function() {
      // uncomment below and update the code to test the property apiClientIDs
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

    it('should have the property webhookRoutes (base name: "WebhookRoutes")', function() {
      // uncomment below and update the code to test the property webhookRoutes
      //var instane = new OrderCloud.PartialWebhook();
      //expect(instance).to.be();
    });

  });

}));
