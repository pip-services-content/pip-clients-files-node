import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { FileV1 } from './FileV1';
export interface IFilesClientV1 {
    getGroups(correlationId: string, paging: PagingParams, callback: (err: any, page: DataPage<string>) => void): void;
    getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<FileV1>) => void): void;
    getFilesByIds(correlationId: string, fileIds: string[], callback: (err: any, files: FileV1[]) => void): void;
    getFileById(correlationId: string, fileId: string, callback: (err: any, file: FileV1) => void): void;
    createFile(correlationId: string, file: FileV1, callback: (err: any, file: FileV1) => void): void;
    updateFile(correlationId: string, file: FileV1, callback: (err: any, file: FileV1) => void): void;
    deleteFileById(correlationId: string, fileId: string, callback?: (err: any, file: FileV1) => void): void;
}
