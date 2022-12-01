'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.chatMessageBroadcastPOST = function chatMessageBroadcastPOST (req, res, next, body) {
  Message.chatMessageBroadcastPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessageFilter_by_contentGET = function chatMessageFilter_by_contentGET (req, res, next, userId, filter) {
  Message.chatMessageFilter_by_contentGET(userId, filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessageFind_by_userGET = function chatMessageFind_by_userGET (req, res, next, userId, secondUserId) {
  Message.chatMessageFind_by_userGET(userId, secondUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessagesDELETE = function chatMessagesDELETE (req, res, next, messageId) {
  Message.chatMessagesDELETE(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessagesGET = function chatMessagesGET (req, res, next, userId) {
  Message.chatMessagesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessagesPOST = function chatMessagesPOST (req, res, next, body) {
  Message.chatMessagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatMessagesPUT = function chatMessagesPUT (req, res, next, body, messageId) {
  Message.chatMessagesPUT(body, messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
