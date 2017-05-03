"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class FilesHttpClientV1 extends pip_services_net_node_1.CommandableHttpClient {
    constructor(config) {
        super('files');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, paging, callback) {
        this.callCommand('get_groups', correlationId, {
            paging: paging
        }, callback);
    }
    getFilesByFilter(correlationId, filter, paging, callback) {
        this.callCommand('get_files_by_filter', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getFilesByIds(correlationId, fileIds, callback) {
        this.callCommand('get_files_by_ids', correlationId, {
            file_ids: fileIds
        }, callback);
    }
    getFileById(correlationId, fileId, callback) {
        this.callCommand('get_file_by_id', correlationId, {
            file_id: fileId
        }, callback);
    }
    createFile(correlationId, file, callback) {
        this.callCommand('create_file', correlationId, {
            file: file
        }, callback);
    }
    updateFile(correlationId, file, callback) {
        this.callCommand('update_file', correlationId, {
            file: file
        }, callback);
    }
    deleteFileById(correlationId, fileId, callback) {
        this.callCommand('delete_file_by_id', correlationId, {
            file_id: fileId
        }, callback);
    }
}
exports.FilesHttpClientV1 = FilesHttpClientV1;
//# sourceMappingURL=FilesHttpClientV1.js.map