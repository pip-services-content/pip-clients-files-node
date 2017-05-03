import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';

export class FilesHttpClientV1 extends CommandableHttpClient implements IFilesClientV1 {

    constructor(config?: any) {
        super('files');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getGroups(correlationId: string, paging: PagingParams,
        callback: (err: any, page: DataPage<string>) => void): void {
        this.callCommand(
            'get_groups',
            correlationId,
            {
                paging: paging
            }, 
            callback
        );
    }

    public getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<FileV1>) => void): void {
        this.callCommand(
            'get_files_by_filter',
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getFilesByIds(correlationId: string, fileIds: string[],
        callback: (err: any, files: FileV1[]) => void): void {
        this.callCommand(
            'get_files_by_ids',
            correlationId,
            {
                file_ids: fileIds
            }, 
            callback
        );
    }

    public getFileById(correlationId: string, fileId: string,
        callback: (err: any, file: FileV1) => void): void {
        this.callCommand(
            'get_file_by_id',
            correlationId,
            {
                file_id: fileId
            }, 
            callback
        );
    }

    public createFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        this.callCommand(
            'create_file',
            correlationId,
            {
                file: file
            }, 
            callback
        );
    }

    public updateFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        this.callCommand(
            'update_file',
            correlationId,
            {
                file: file
            }, 
            callback
        );
    }

    public deleteFileById(correlationId: string, fileId: string,
        callback?: (err: any, item: FileV1) => void): void {
        this.callCommand(
            'delete_file_by_id',
            correlationId,
            {
                file_id: fileId
            }, 
            callback
        );
    }

}
