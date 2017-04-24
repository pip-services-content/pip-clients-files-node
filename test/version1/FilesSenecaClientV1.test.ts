let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { FilesMemoryPersistence } from 'pip-services-files-node';
import { FilesController } from 'pip-services-files-node';
import { FilesSenecaServiceV1 } from 'pip-services-files-node';
import { IFilesClientV1 } from '../../src/version1/IFilesClientV1';
import { FilesSenecaClientV1 } from '../../src/version1/FilesSenecaClientV1';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('FilesSenecaClient', () => {
    let service: FilesSenecaServiceV1;
    let client: FilesSenecaClientV1;
    let fixture: FilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new FilesMemoryPersistence();
        let controller = new FilesController();

        service = new FilesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-files', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-files', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-files', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new FilesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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
