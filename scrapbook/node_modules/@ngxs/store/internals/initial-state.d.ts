import { InjectionToken } from '@angular/core';
import { PlainObject } from './symbols';
export declare const INITIAL_STATE_TOKEN: InjectionToken<any>;
export declare class InitialState {
    private static value;
    static set(state: PlainObject): void;
    static pop(): PlainObject;
}
