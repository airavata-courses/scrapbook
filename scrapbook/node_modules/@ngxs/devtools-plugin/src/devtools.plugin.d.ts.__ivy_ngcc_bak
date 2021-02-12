import { Injector } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store';
import { NgxsDevtoolsAction, NgxsDevtoolsOptions } from './symbols';
/**
 * Adds support for the Redux Devtools extension:
 * http://extension.remotedev.io/
 */
export declare class NgxsReduxDevtoolsPlugin implements NgxsPlugin {
    private _options;
    private _injector;
    private readonly devtoolsExtension;
    private readonly windowObj;
    constructor(_options: NgxsDevtoolsOptions, _injector: Injector);
    /**
     * Lazy get the store for circular dependency issues
     */
    private readonly store;
    /**
     * Middleware handle function
     */
    handle(state: any, action: any, next: NgxsNextPluginFn): any;
    private sendToDevTools;
    /**
     * Handle the action from the dev tools subscription
     */
    dispatched(action: NgxsDevtoolsAction): void;
}
