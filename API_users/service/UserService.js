'use strict';


/**
 * Submit the username and password to log in the aplication
 * Submit the username and password to log in the aplication
 *
 * username String The name of an user.
 * password String The password of the user.
 * returns String
 **/
exports.login = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User logged in.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ban or unban an user depending on the value of banFlag
 *
 * userId Integer The identifier of an user.
 * banFlag Boolean Flag to ban (true) or unban (false) an user
 * returns String
 **/
exports.usersBanUserIdbanFlagPUT = function(userId,banFlag) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User banned.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return all users that match the optional filter.
 *
 * username String The string to filter by username. (optional)
 * returns User
 **/
exports.usersFilterByNameGET = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "juanito.diaz@email.com",
  "username" : "Juanito_2000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Log out of the account currently logged in
 * Log out of the account currently logged in
 *
 * returns String
 **/
exports.usersLogoutGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Successful log out.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit a form full of information about the user
 * The user fill the fields of a form that will be used and validated to create a new account.
 *
 * body User  (optional)
 * returns String
 **/
exports.usersRegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Correctly registered user.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an user given its ID.
 *
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User deleted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a user by its ID.
 *
 * userId Integer The identifier of an user.
 * returns User
 **/
exports.usersUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "juanito.diaz@email.com",
  "username" : "Juanito_2000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify an user given its ID.
 *
 * body User  (optional)
 * userId Integer The identifier of an user.
 * returns String
 **/
exports.usersUserIdPUT = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "User modified.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

