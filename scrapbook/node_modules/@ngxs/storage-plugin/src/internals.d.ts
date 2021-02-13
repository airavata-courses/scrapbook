import { StateClass } from '@ngxs/store/internals';
import { StateToken } from '@ngxs/store';
import { StorageEngine, NgxsStoragePluginOptions } from './symbols';
/**
 * If the `key` option is not provided then the below constant
 * will be used as a default key
 */
export declare const DEFAULT_STATE_KEY = "@@STATE";
/**
 * Internal type definition for the `key` option provided
 * in the `forRoot` method when importing module
 */
export declare type StorageKey = string | StateClass | StateToken<any> | (string | StateClass | StateToken<any>)[];
export declare function storageOptionsFactory(options: NgxsStoragePluginOptions | undefined): NgxsStoragePluginOptions;
export declare function engineFactory(options: NgxsStoragePluginOptions, platformId: string): StorageEngine | null;
