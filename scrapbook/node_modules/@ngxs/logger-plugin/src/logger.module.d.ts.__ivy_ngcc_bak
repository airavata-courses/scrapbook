import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxsLoggerPluginOptions } from './symbols';
export declare const USER_OPTIONS: InjectionToken<{}>;
export declare function loggerOptionsFactory(options: NgxsLoggerPluginOptions): {
    collapsed?: boolean | undefined;
    logger?: any;
    disabled?: boolean | undefined;
    filter?: ((action: any, state: any) => boolean) | undefined;
};
export declare class NgxsLoggerPluginModule {
    static forRoot(options?: NgxsLoggerPluginOptions): ModuleWithProviders<NgxsLoggerPluginModule>;
}
