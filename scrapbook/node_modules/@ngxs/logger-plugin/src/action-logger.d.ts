import { Store } from '@ngxs/store';
import { LogWriter } from './log-writer';
export declare class ActionLogger {
    private action;
    private store;
    private logWriter;
    constructor(action: any, store: Store, logWriter: LogWriter);
    dispatched(state: any): void;
    completed(nextState: any): void;
    errored(error: any): void;
    private _hasPayload;
    private _getNonEmptyProperties;
}
