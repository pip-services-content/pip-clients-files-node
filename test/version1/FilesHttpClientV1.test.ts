let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { FilesMemoryPersistence } from 'pip-services-files-node';
import { FilesController } from 'pip-services-files-node';
import { FilesHttpServiceV1 } from 'pip-services-files-node';
import { IFilesClientV1 } from '../../src/version1/IFilesClientV1';
import { FilesHttpClientV1 } from '../../src/version1/FilesHttpClientV1';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('FilesHttpClientV1', ()=> {
    let service: FilesHttpServiceV1;
    let client: FilesHttpClientV1;
    let fixture: FilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new FilesMemoryPersistence();
        let controller = new FilesController();

        service = new FilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-files', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-files', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-files', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new FilesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new FilesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
