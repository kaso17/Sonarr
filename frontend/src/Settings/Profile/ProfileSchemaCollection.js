var Backbone = require('backbone');
var ProfileModel = require('../../Profile/ProfileModel');

module.exports = Backbone.Collection.extend({
    model : ProfileModel,
    url   : window.Sonarr.ApiRoot + '/profile/schema'
});