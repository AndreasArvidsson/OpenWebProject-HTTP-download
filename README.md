# OpenWebProject HTTP-download

**Download responses from owp.http**    
Used to convert blob returned from API into downloadable file on disk. 

## Installation
`npm install owp.http-download --save`

## Usage
Requires full response to get file name from `content-disposition` header.

```javascript
import HttpDownload from "owp.http-download"

HTTP.get("http.//example.com/rest/data", { fullResponse: true, responseType: "blob" })
    .then(HttpDownload);
```