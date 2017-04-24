let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { FilesMemoryPersistence } from 'pip-services-files-node';
import { FilesController } from 'pip-services-files-node';
import { IFilesClientV1 } from '../../src/version1/IFilesClientV1';
import { FilesDirectClientV1 } from '../../src/version1/FilesDirectClientV1';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';

suite('FilesDirectClientV1', ()=> {
    let client: FilesDirectClientV1;
    let fixture: FilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new FilesMemoryPersistence();
        let controller = new FilesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-files', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-files', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new FilesDirectClientV1();
        client.setReferences(references);

        fixture = new FilesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
