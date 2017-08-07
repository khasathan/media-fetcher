class Video {
    constructor ({ type, contentType, buffer }) {
        this._type = type;
        this._contentType = contentType;
        this._buffer = buffer;
    }

    getType () {
        return this._type;
    }

    getContentType () {
        return this._contentType;
    }

    getBuffer () {
        return this._buffer;
    }
}

module.exports = Video;
