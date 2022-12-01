'use strict';


/**
 * Send a message to all known users.
 * Send a message to all known users.
 *
 * body Message  (optional)
 * returns String
 **/
exports.chatMessageBroadcastPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Message Broadcasted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all messages given that its content matches the specified string.
 * Retrieve all messages given that its content matches the specified string.
 *
 * userId String The identifier of the user querying the API
 * filter String The string used to match the desired message
 * returns List
 **/
exports.chatMessageFilter_by_contentGET = function(userId,filter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "messageId" : 1002001111,
  "receiverUserId" : "200",
  "messageContent" : "What's up friend?",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "messageId" : 1002001111,
  "receiverUserId" : "200",
  "messageContent" : "What's up friend?",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all messages sent to or received from an specific user.
 * Retrieve all messages sent to or received from an specific user.
 *
 * userId String The identifier of the user querying the API
 * secondUserId String The identifier of the user whose comments are wanted.
 * returns List
 **/
exports.chatMessageFind_by_userGET = function(userId,secondUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "messageId" : 1002001111,
  "receiverUserId" : "200",
  "messageContent" : "What's up friend?",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "messageId" : 1002001111,
  "receiverUserId" : "200",
  "messageContent" : "What's up friend?",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a sent message.
 * Delete a sent message.
 *
 * messageId Integer The identifier of a sent message.
 * returns String
 **/
exports.chatMessagesDELETE = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Message deleted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch all the messages sent to an user.
 * Fetch all the messages sent to an user.
 *
 * userId Integer The identifier of the user querying the API
 * returns List
 **/
exports.chatMessagesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a message to an user
 * Send a message to an user
 *
 * body Message  (optional)
 * returns String
 **/
exports.chatMessagesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Message sent.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify a sent message.
 * Modify a sent message.
 *
 * body Message  (optional)
 * messageId Integer The identifier of a sent message.
 * returns String
 **/
exports.chatMessagesPUT = function(body,messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Message modified.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

