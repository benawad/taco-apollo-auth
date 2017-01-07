'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'secretBurritos.db'),
    autoload: true
  });

  let options = {
    Model: db,
  };

  // Initialize our service with any options it requires
  app.use('/secretBurritos', service(options));

  // Get our initialize service to that we can bind hooks
  const secretBurritoService = app.service('/secretBurritos');

  // Set up our before hooks
  secretBurritoService.before(hooks.before);

  // Set up our after hooks
  secretBurritoService.after(hooks.after);
};
