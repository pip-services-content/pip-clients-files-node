import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-seneca-node';
import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';
export declare class FilesSenecaClientV1 extends CommandableSenecaClient implements IFilesClientV1 {
    constructor(config?: any);
    getGroups(correlationId: string, paging: PagingParams, callback: (err: any, page: DataPage<string>) => void): void;
    getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<FileV1>) => void): void;
    getFilesByIds(correlationId: string, fileIds: string[], callback: (err: any, files: FileV1[]) => void): void;
    getFileById(correlationId: string, fileId: string, callback: (err: any, file: FileV1) => void): void;
    createFile(correlationId: string, file: FileV1, callback: (err: any, file: FileV1) => void): void;
    updateFile(correlationId: string, file: FileV1, callback: (err: any, file: FileV1) => void): void;
    deleteFileById(correlationId: string, fileId: string, callback?: (err: any, item: FileV1) => void): void;
}
