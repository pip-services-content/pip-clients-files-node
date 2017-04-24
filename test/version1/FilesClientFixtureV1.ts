let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IdGenerator } from 'pip-services-commons-node';

import { FileV1 } from '../../src/version1/FileV1';
import { IFilesClientV1 } from '../../src/version1/IFilesClientV1';

export class FilesClientFixtureV1 {
    private _client: IFilesClientV1;
    
    constructor(client: IFilesClientV1) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let file1: FileV1;

        async.series([
        // Create file
            (callback) => {
                let file = new FileV1(
                    null, 'test', 'file-1.dat', 'Test file', '111'
                );

                this._client.createFile(
                    null, file,
                    (err, file) => {
                        assert.isNull(err);

                        assert.isObject(file);
                        file1 = file;

                        callback();
                    }
                );
            },
        // Update file
            (callback) => {
                file1.name = 'new_file.dat';

                this._client.updateFile(
                    null, file1, 
                    (err, file) => {
                        assert.isNull(err);
                        
                        assert.equal(file.name, 'new_file.dat');

                        callback();
                    }
                );
            },
        // Get files
            (callback) => {
                this._client.getFilesByFilter(
                    null, null, null, 
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 1);

                        callback();
                    }
                );
            },
        // Delete file
            (callback) => {
                this._client.deleteFileById(
                    null, file1.id,
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Try to get deleted file
            (callback) => {
                this._client.getFileById(
                    null, file1.id, (err, file) => {
                        assert.isNull(err);
                        assert.isNull(file);
                        callback();
                    }
                )
            }
        ], done);
    }
}
