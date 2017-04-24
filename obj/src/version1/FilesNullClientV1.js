"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
class FilesNullClientV1 {
    constructor(config) { }
    getFilesByFilter(correlationId, filter, paging, callback) {
        callback(null, new pip_services_commons_node_1.DataPage([], 0));
    }
    getFilesByIds(correlationId, fileIds, callback) {
        callback(null, []);
    }
    getFileById(correlationId, fileId, callback) {
        callback(null, null);
    }
    createFile(correlationId, file, callback) {
        callback(null, file);
    }
    updateFile(correlationId, file, callback) {
        callback(null, file);
    }
    deleteFileById(correlationId, fileId, callback) {
        callback(null, null);
    }
}
exports.FilesNullClientV1 = FilesNullClientV1;
//# sourceMappingURL=FilesNullClientV1.js.map