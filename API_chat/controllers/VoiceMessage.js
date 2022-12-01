'use strict';

var utils = require('../utils/writer.js');
var VoiceMessage = require('../service/VoiceMessageService');

module.exports.chatVoice_messageFilter_by_userGET = function chatVoice_messageFilter_by_userGET (req, res, next, userId, secondUserId) {
  VoiceMessage.chatVoice_messageFilter_by_userGET(userId, secondUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesBroadcastPOST = function chatVoice_messagesBroadcastPOST (req, res, next, body) {
  VoiceMessage.chatVoice_messagesBroadcastPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesDELETE = function chatVoice_messagesDELETE (req, res, next, voiceMessageId) {
  VoiceMessage.chatVoice_messagesDELETE(voiceMessageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesFilter_by_contentGET = function chatVoice_messagesFilter_by_contentGET (req, res, next, userId, filter) {
  VoiceMessage.chatVoice_messagesFilter_by_contentGET(userId, filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesGET = function chatVoice_messagesGET (req, res, next, userId) {
  VoiceMessage.chatVoice_messagesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesPOST = function chatVoice_messagesPOST (req, res, next, body) {
  VoiceMessage.chatVoice_messagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatVoice_messagesPUT = function chatVoice_messagesPUT (req, res, next, body, voiceMessageId) {
  VoiceMessage.chatVoice_messagesPUT(body, voiceMessageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
