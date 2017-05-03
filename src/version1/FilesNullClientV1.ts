import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { FileV1 } from './FileV1';
import { IFilesClientV1 } from './IFilesClientV1';

export class FilesNullClientV1 implements IFilesClientV1 {
    constructor(config?: any) {}
        
    public getGroups(correlationId: string, paging: PagingParams,
        callback: (err: any, page: DataPage<string>) => void): void {
        callback(null, new DataPage<string>([], 0));
    }

    public getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<FileV1>) => void): void {
        callback(null, new DataPage<FileV1>([], 0));
    }

    public getFilesByIds(correlationId: string, fileIds: string[],
        callback: (err: any, files: FileV1[]) => void): void {
        callback(null, []);
    }

    public getFileById(correlationId: string, fileId: string,
        callback: (err: any, file: FileV1) => void): void {
        callback(null, null);
    }

    public createFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        callback(null, file);
    }

    public updateFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        callback(null, file);
    }

    public deleteFileById(correlationId: string, fileId: string,
        callback?: (err: any, file: FileV1) => void): void {
        callback(null, null);
    }

}
