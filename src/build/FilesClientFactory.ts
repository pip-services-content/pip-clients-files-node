import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { FilesNullClientV1 } from '../version1/FilesNullClientV1';
import { FilesDirectClientV1 } from '../version1/FilesDirectClientV1';
import { FilesHttpClientV1 } from '../version1/FilesHttpClientV1';
import { FilesSenecaClientV1 } from '../version1/FilesSenecaClientV1';

export class FilesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-files', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-files', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-files', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-files', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-files', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(FilesClientFactory.NullClientV1Descriptor, FilesNullClientV1);
		this.registerAsType(FilesClientFactory.DirectClientV1Descriptor, FilesDirectClientV1);
		this.registerAsType(FilesClientFactory.HttpClientV1Descriptor, FilesHttpClientV1);
		this.registerAsType(FilesClientFactory.SenecaClientV1Descriptor, FilesSenecaClientV1);
	}
	
}
