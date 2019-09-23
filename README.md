# OpenWebProject HTTP-get

**Download responses from owp.http**    
Used to convert blob returned from API into downloadable file on disk. 

## Installation
`npm install owp.http-get --save`

## Usage
Requires full response to get file name from `content-disposition` header.

```javascript
import download from "owp.http-get";

HTTP.get("http.//example.com/rest/data", { fullResponse: true, responseType: "blob" })
    .then(download);
```