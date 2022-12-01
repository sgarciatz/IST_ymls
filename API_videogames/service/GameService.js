'use strict';


/**
 * Inserts a new game in the user library database.
 * Inserts a new game in the user library database.
 *
 * gameId Long ID of game to insert in the user library.
 * userId Long ID of user to insert the game.
 * returns String
 **/
exports.buy_gameGameIdPOST = function(gameId,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Videogame inserted successfully in the user library.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list with all the videogames from the cloud database.
 * Returns a list with all the videogames from the cloud database.
 *
 * returns Videogame
 **/
exports.gamesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : 1,
  "videogame-name" : "God Of War",
  "genre" : "Fantasia",
  "files" : "images,configuration files, design files"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a videogame given its ID.
 * Delete a videogame given its ID.
 *
 * gameId Long Identifier of an user.
 * returns String
 **/
exports.gamesGameIdDELETE = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Videogame deleted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a videogame by its ID.
 * Returns a videogame by its ID.
 *
 * gameId Long The identifier of an user.
 * returns Videogame
 **/
exports.gamesGameIdGET = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : 1,
  "videogame-name" : "God Of War",
  "genre" : "Fantasia",
  "files" : "images,configuration files, design files"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates the videogame data.
 * Updates the videogame data.
 *
 * body Videogame Update a videogame with properties to be changed. (optional)
 * gameId Long Identifier of a game.
 * returns String
 **/
exports.gamesGameIdPATCH = function(body,gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Videogame updated.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Inserts a new game in the cloud database.
 * Inserts a new game in the cloud database.
 *
 * body Videogame  (optional)
 * returns String
 **/
exports.gamesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Videogame inserted successfully.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Test the quality of the chosen videogame from the cloud database
 * Test the quality of the chosen videogame from the cloud database
 *
 * gameId Long Identifier of a game.
 * returns VideogameTest
 **/
exports.test_qualityGameIdGET = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : 1,
  "datetime" : "2022-12-31 23:59:48",
  "test-files" : "latency=100ms, frequency = 120fps, CPU/GPU consumption"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

