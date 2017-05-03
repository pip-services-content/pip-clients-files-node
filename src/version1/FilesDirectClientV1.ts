import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IFilesClientV1 } from './IFilesClientV1';
//import { IFilesController } from 'pip-services-files-node';
import { FileV1 } from './FileV1';

export class FilesDirectClientV1 extends DirectClient<any> implements IFilesClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-files", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getGroups(correlationId: string, paging: PagingParams,
        callback: (err: any, page: DataPage<string>) => void): void {
        this._controller.getGroups(correlationId, paging, callback);
    }

    public getFilesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<FileV1>) => void): void {
        this._controller.getFilesByFilter(correlationId, filter, paging, callback);
    }

    public getFilesByIds(correlationId: string, fileIds: string[],
        callback: (err: any, files: FileV1[]) => void): void {
        this._controller.getFilesByIds(correlationId, fileIds, callback);
    }

    public getFileById(correlationId: string, fileId: string,
        callback: (err: any, file: FileV1) => void): void {
        this._controller.getFileById(correlationId, fileId, callback);
    }

    public createFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        this._controller.createFile(correlationId, file, callback);
    }

    public updateFile(correlationId: string, file: FileV1,
        callback: (err: any, file: FileV1) => void): void {
        this._controller.updateFile(correlationId, file, callback);
    }

    public deleteFileById(correlationId: string, fileId: string,
        callback?: (err: any, file: FileV1) => void): void {
        this._controller.deleteFileById(correlationId, fileId, callback);
    }

}