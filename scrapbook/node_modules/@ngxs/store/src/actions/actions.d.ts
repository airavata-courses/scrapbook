import { PlainObject } from '@ngxs/store/internals';
/**
 * Init action
 */
export declare class InitState {
    static readonly type: string;
}
/**
 * Update action
 */
export declare class UpdateState {
    addedStates?: PlainObject | undefined;
    static readonly type: string;
    constructor(addedStates?: PlainObject | undefined);
}
