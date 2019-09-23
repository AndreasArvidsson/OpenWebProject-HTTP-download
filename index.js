/**
 * @author Andreas Arvidsson
 * https://github.com/AndreasArvidsson/OpenWebProject-HTTP-download
 */
import downloadjs from "downloadjs";

const HttpDownload = (httpResponse) => {
    if (!httpResponse || typeof httpResponse.getHeader !== "function") {
        console.error("HttpDownload requires full response.");
        return;
    }
    const type = httpResponse.getHeader("content-type");
    const disposition = httpResponse.getHeader("content-disposition");
    const i = disposition.indexOf("filename=") + "filename=".length + 1;
    const filename = disposition.substring(i, disposition.length - 1);
    downloadjs(httpResponse.data, filename, type);
};
export default HttpDownload;
