'use strict';

var utils = require('../utils/writer.js');
var Friend = require('../service/FriendService');

module.exports.usersFriendsDELETE = function usersFriendsDELETE (req, res, next, userId, unfriendUserId) {
  Friend.usersFriendsDELETE(userId, unfriendUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersFriendsGET = function usersFriendsGET (req, res, next, userId) {
  Friend.usersFriendsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersFriendsPOST = function usersFriendsPOST (req, res, next, newFriendId) {
  Friend.usersFriendsPOST(newFriendId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
