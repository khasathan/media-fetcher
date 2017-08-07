const _ = require('lodash');
const axios = require('axios');

const Audio = require('./audio');
const Image = require('./image');
const MediaType = require('./media-type');
const Video = require('./video');

module.exports = async function mediaFactory (url) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'].toLowerCase();

    if (_.startsWith(contentType, MediaType.IMAGE)) {
        return new Image({
            type: MediaType.IMAGE,
            contentType,
            buffer: response.data,
        });
    } else if (_.startsWith(contentType, MediaType.AUDIO)) {
        return new Audio({
            type: MediaType.IMAGE,
            contentType,
            buffer: response.data,
        });
    } else if (_.startsWith(contentType, MediaType.VIDEO)) {
        return new Video({
            type: MediaType.IMAGE,
            contentType,
            buffer: response.data,
        });
    } else {
        throw new Error(`Media type ${contentType} is not supported`);
    }
};
