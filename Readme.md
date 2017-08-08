media-fetcher
====

Fetching image, audio, video then store buffer in object.
Ready to transform to other formats.

## Basic Usage
```javascript
const mediaFetcher = require('media-fetcher');

const imageUrl = 'https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg';

mediaFetcher.createMedia(imageUrl)
    .then(media => {
        console.log(`type: ${media.getType()}`);
        console.log(`content-type: ${media.getContentType()}`);
        console.log(`base64: ${media.getBase64()}`);
    })
    .catch(err => {
        throw err;
    });
```
