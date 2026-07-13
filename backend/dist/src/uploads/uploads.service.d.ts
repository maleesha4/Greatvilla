export declare class UploadsService {
    uploadFile(file: any): Promise<{
        url: string;
        publicId: string;
    }>;
}
