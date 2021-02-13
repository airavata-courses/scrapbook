export interface FileSelectResult {
    /** The added files, emitted in the filesAdded event. */
    addedFiles: File[];
    /** The rejected files, emitted in the filesRejected event. */
    rejectedFiles: RejectedFile[];
}
export interface RejectedFile extends File {
    /** The reason the file was rejected. */
    reason?: RejectReason;
}
export declare type RejectReason = 'type' | 'size' | 'no_multiple';
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
export declare class NgxDropzoneService {
    parseFileList(files: FileList, accept: string, maxFileSize: number, multiple: boolean): FileSelectResult;
    private isAccepted;
    private rejectFile;
}
