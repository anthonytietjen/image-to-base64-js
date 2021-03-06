# image-to-base64-js

Converts an image to a base64 data string exported from inside of a js file.

## Usage
```
cd /path/where/image/is/located/
npx img2base64js MyImage.png
```

This will create a file called `MyImage.js` with the following contents:

```
module.exports="data:image/png;base64,(Base64StringHere)";

```