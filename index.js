const mediaFactory = require('./lib/media-factory');
const MediaType = require('./lib/media-type');

module.exports = {
    createMedia: mediaFactory,
    MediaType,
};
