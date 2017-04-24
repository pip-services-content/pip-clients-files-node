import { YamlConfigReader } from 'pip-services-commons-node';
import { FilesClientFixtureV1 } from './FilesClientFixtureV1';
import { FilesLambdaClientV1 } from '../../src/version1/FilesLambdaClientV1';

suite('FilesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: FilesLambdaClientV1;
    let fixture: FilesClientFixtureV1;

    setup((done) => {
        client = new FilesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new FilesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});