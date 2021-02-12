import { NgxsLoggerPluginOptions } from './symbols';
export declare class LogWriter {
    private options;
    private logger;
    constructor(options: NgxsLoggerPluginOptions);
    startGroup(message: string): void;
    endGroup(): void;
    logGrey(title: string, payload: any): void;
    logGreen(title: string, payload: any): void;
    logRedish(title: string, payload: any): void;
    log(title: string, color: string, payload: any): void;
    isIE(): boolean;
}
