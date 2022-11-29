'use strict';

var utils = require('../utils/writer.js');
var Subscription = require('../service/SubscriptionService');

module.exports.usersUserIdSubscriptionTierDELETE = function usersUserIdSubscriptionTierDELETE (req, res, next, userId) {
  Subscription.usersUserIdSubscriptionTierDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdSubscriptionTierGET = function usersUserIdSubscriptionTierGET (req, res, next, userId) {
  Subscription.usersUserIdSubscriptionTierGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdSubscriptionTierPUT = function usersUserIdSubscriptionTierPUT (req, res, next, userId, newSubscription) {
  Subscription.usersUserIdSubscriptionTierPUT(userId, newSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
