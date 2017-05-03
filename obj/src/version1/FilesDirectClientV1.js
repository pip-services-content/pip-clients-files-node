"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class FilesDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-files", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, paging, callback) {
        this._controller.getGroups(correlationId, paging, callback);
    }
    getFilesByFilter(correlationId, filter, paging, callback) {
        this._controller.getFilesByFilter(correlationId, filter, paging, callback);
    }
    getFilesByIds(correlationId, fileIds, callback) {
        this._controller.getFilesByIds(correlationId, fileIds, callback);
    }
    getFileById(correlationId, fileId, callback) {
        this._controller.getFileById(correlationId, fileId, callback);
    }
    createFile(correlationId, file, callback) {
        this._controller.createFile(correlationId, file, callback);
    }
    updateFile(correlationId, file, callback) {
        this._controller.updateFile(correlationId, file, callback);
    }
    deleteFileById(correlationId, fileId, callback) {
        this._controller.deleteFileById(correlationId, fileId, callback);
    }
}
exports.FilesDirectClientV1 = FilesDirectClientV1;
//# sourceMappingURL=FilesDirectClientV1.js.map