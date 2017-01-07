'use strict';
const viewer = require('./viewer');
const secretBurrito = require('./secretBurrito');
const taco = require('./taco');
const graphql = require('./graphql');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(taco);
  app.configure(secretBurrito);
  app.configure(viewer);
  app.configure(graphql);
};
