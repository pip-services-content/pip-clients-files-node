"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const FilesNullClientV1_1 = require("../version1/FilesNullClientV1");
const FilesDirectClientV1_1 = require("../version1/FilesDirectClientV1");
const FilesHttpClientV1_1 = require("../version1/FilesHttpClientV1");
const FilesSenecaClientV1_1 = require("../version1/FilesSenecaClientV1");
class FilesFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(FilesFactory.NullClientV1Descriptor, FilesNullClientV1_1.FilesNullClientV1);
        this.registerAsType(FilesFactory.DirectClientV1Descriptor, FilesDirectClientV1_1.FilesDirectClientV1);
        this.registerAsType(FilesFactory.HttpClientV1Descriptor, FilesHttpClientV1_1.FilesHttpClientV1);
        this.registerAsType(FilesFactory.SenecaClientV1Descriptor, FilesSenecaClientV1_1.FilesSenecaClientV1);
    }
}
FilesFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'factory', 'default', 'default', '1.0');
FilesFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'null', 'default', '1.0');
FilesFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'direct', 'default', '1.0');
FilesFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'http', 'default', '1.0');
FilesFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-files', 'client', 'seneca', 'default', '1.0');
exports.FilesFactory = FilesFactory;
//# sourceMappingURL=FilesFactory.js.map