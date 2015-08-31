var Backbone = require('backbone');
var RestrictionModel = require('./RestrictionModel');

module.exports = Backbone.Collection.extend({
  model: RestrictionModel,
  url: window.Sonarr.ApiRoot + '/Restriction'
});