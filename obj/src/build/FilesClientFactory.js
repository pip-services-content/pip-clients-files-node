"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_components_node_1 = require("pip-services-components-node");
const FilesNullClientV1_1 = require("../version1/FilesNullClientV1");
const FilesDirectClientV1_1 = require("../version1/FilesDirectClientV1");
const FilesHttpClientV1_1 = require("../version1/FilesHttpClientV1");
const FilesSenecaClientV1_1 = require("../version1/FilesSenecaClientV1");
class FilesClientFactory extends pip_services_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(FilesClientFactory.NullClientV1Descriptor, FilesNullClientV1_1.FilesNullClientV1);
        this.registerAsType(FilesClientFactory.DirectClientV1Descriptor, FilesDirectClientV1_1.FilesDirectClientV1);
        this.registerAsType(FilesClientFactory.HttpClientV1Descriptor, FilesHttpClientV1_1.FilesHttpClientV1);
        this.registerAsType(FilesClientFactory.SenecaClientV1Descriptor, FilesSenecaClientV1_1.FilesSenecaClientV1);
    }
}
FilesClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'factory', 'default', 'default', '1.0');
FilesClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'null', 'default', '1.0');
FilesClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'direct', 'default', '1.0');
FilesClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'http', 'default', '1.0');
FilesClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'seneca', 'default', '1.0');
exports.FilesClientFactory = FilesClientFactory;
//# sourceMappingURL=FilesClientFactory.js.map