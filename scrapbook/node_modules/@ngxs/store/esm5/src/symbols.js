/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { DispatchOutsideZoneNgxsExecutionStrategy } from './execution/dispatch-outside-zone-ngxs-execution-strategy';
/** @type {?} */
export var ROOT_STATE_TOKEN = new InjectionToken('ROOT_STATE_TOKEN');
/** @type {?} */
export var FEATURE_STATE_TOKEN = new InjectionToken('FEATURE_STATE_TOKEN');
/** @type {?} */
export var NGXS_PLUGINS = new InjectionToken('NGXS_PLUGINS');
/** @type {?} */
export var NG_TEST_MODE = new InjectionToken('NG_TEST_MODE');
/** @type {?} */
export var NG_DEV_MODE = new InjectionToken('NG_DEV_MODE');
/** @type {?} */
export var META_KEY = 'NGXS_META';
/** @type {?} */
export var META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
/** @type {?} */
export var SELECTOR_META_KEY = 'NGXS_SELECTOR_META';
/**
 * The NGXS config settings.
 */
var NgxsConfig = /** @class */ (function () {
    function NgxsConfig() {
        /**
         * Defining the default state before module initialization
         * This is convenient if we need to create a define our own set of states.
         * @deprecated will be removed after v4
         * (default: {})
         */
        this.defaultsState = {};
        /**
         * Defining shared selector options
         */
        this.selectorOptions = {
            injectContainerState: true,
            // TODO: default is true in v3, will change in v4
            suppressErrors: true // TODO: default is true in v3, will change in v4
        };
        this.compatibility = {
            strictContentSecurityPolicy: false
        };
        this.executionStrategy = DispatchOutsideZoneNgxsExecutionStrategy;
    }
    NgxsConfig.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxsConfig.ctorParameters = function () { return []; };
    return NgxsConfig;
}());
export { NgxsConfig };
if (false) {
    /**
     * Run in development mode. This will add additional debugging features:
     * - Object.freeze on the state and actions to guarantee immutability
     * (default: false)
     * @type {?}
     */
    NgxsConfig.prototype.developmentMode;
    /** @type {?} */
    NgxsConfig.prototype.compatibility;
    /**
     * Determines the execution context to perform async operations inside. An implementation can be
     * provided to override the default behaviour where the async operations are run
     * outside Angular's zone but all observable behaviours of NGXS are run back inside Angular's zone.
     * These observable behaviours are from:
     *   `\@Select(...)`, `store.select(...)`, `actions.subscribe(...)` or `store.dispatch(...).subscribe(...)`
     * Every `zone.run` causes Angular to run change detection on the whole tree (`app.tick()`) so of your
     * application doesn't rely on zone.js running change detection then you can switch to the
     * `NoopNgxsExecutionStrategy` that doesn't interact with zones.
     * (default: null)
     * @type {?}
     */
    NgxsConfig.prototype.executionStrategy;
    /**
     * Defining the default state before module initialization
     * This is convenient if we need to create a define our own set of states.
     * @deprecated will be removed after v4
     * (default: {})
     * @type {?}
     */
    NgxsConfig.prototype.defaultsState;
    /**
     * Defining shared selector options
     * @type {?}
     */
    NgxsConfig.prototype.selectorOptions;
}
/**
 * State context provided to the actions in the state.
 * @record
 * @template T
 */
export function StateContext() { }
if (false) {
    /**
     * Get the current state.
     * @return {?}
     */
    StateContext.prototype.getState = function () { };
    /**
     * Reset the state to a new value.
     * @param {?} val
     * @return {?}
     */
    StateContext.prototype.setState = function (val) { };
    /**
     * Patch the existing state with the provided value.
     * @param {?} val
     * @return {?}
     */
    StateContext.prototype.patchState = function (val) { };
    /**
     * Dispatch a new action and return the dispatched observable.
     * @param {?} actions
     * @return {?}
     */
    StateContext.prototype.dispatch = function (actions) { };
}
/**
 * Plugin interface
 * @record
 */
export function NgxsPlugin() { }
if (false) {
    /**
     * Handle the state/action before its submitted to the state handlers.
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    NgxsPlugin.prototype.handle = function (state, action, next) { };
}
/**
 * Options that can be provided to the store.
 * @record
 * @template T
 */
export function StoreOptions() { }
if (false) {
    /**
     * Name of the state. Required.
     * @type {?}
     */
    StoreOptions.prototype.name;
    /**
     * Default values for the state. If not provided, uses empty object.
     * @type {?|undefined}
     */
    StoreOptions.prototype.defaults;
    /**
     * Sub states for the given state.
     * @type {?|undefined}
     */
    StoreOptions.prototype.children;
}
/**
 * Represents a basic change from a previous to a new value for a single state instance.
 * Passed as a value in a NgxsSimpleChanges object to the ngxsOnChanges hook.
 * @template T
 */
var /**
 * Represents a basic change from a previous to a new value for a single state instance.
 * Passed as a value in a NgxsSimpleChanges object to the ngxsOnChanges hook.
 * @template T
 */
NgxsSimpleChange = /** @class */ (function () {
    function NgxsSimpleChange(previousValue, currentValue, firstChange) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.firstChange = firstChange;
    }
    return NgxsSimpleChange;
}());
/**
 * Represents a basic change from a previous to a new value for a single state instance.
 * Passed as a value in a NgxsSimpleChanges object to the ngxsOnChanges hook.
 * @template T
 */
export { NgxsSimpleChange };
if (false) {
    /** @type {?} */
    NgxsSimpleChange.prototype.previousValue;
    /** @type {?} */
    NgxsSimpleChange.prototype.currentValue;
    /** @type {?} */
    NgxsSimpleChange.prototype.firstChange;
}
/**
 * On init interface
 * @record
 */
export function NgxsOnInit() { }
if (false) {
    /**
     * @param {?=} ctx
     * @return {?}
     */
    NgxsOnInit.prototype.ngxsOnInit = function (ctx) { };
}
/**
 * On change interface
 * @record
 */
export function NgxsOnChanges() { }
if (false) {
    /**
     * @param {?} change
     * @return {?}
     */
    NgxsOnChanges.prototype.ngxsOnChanges = function (change) { };
}
/**
 * After bootstrap interface
 * @record
 */
export function NgxsAfterBootstrap() { }
if (false) {
    /**
     * @param {?=} ctx
     * @return {?}
     */
    NgxsAfterBootstrap.prototype.ngxsAfterBootstrap = function (ctx) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL3N5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBTWpFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUdySCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQU0sa0JBQWtCLENBQUM7O0FBQzNFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBTSxxQkFBcUIsQ0FBQzs7QUFDakYsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUM7O0FBQzlELE1BQU0sS0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQW9CLGNBQWMsQ0FBQzs7QUFDakYsTUFBTSxLQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBb0IsYUFBYSxDQUFDOztBQUUvRSxNQUFNLEtBQU8sUUFBUSxHQUFHLFdBQVc7O0FBQ25DLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxtQkFBbUI7O0FBQ25ELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxvQkFBb0I7Ozs7QUFXckQ7SUEyQ0U7Ozs7Ozs7UUFUQSxrQkFBYSxHQUFnQixFQUFFLENBQUM7Ozs7UUFJaEMsb0JBQWUsR0FBMEI7WUFDdkMsb0JBQW9CLEVBQUUsSUFBSTs7WUFDMUIsY0FBYyxFQUFFLElBQUksQ0FBQyxpREFBaUQ7U0FDdkUsQ0FBQztRQUdBLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsMkJBQTJCLEVBQUUsS0FBSztTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHdDQUF3QyxDQUFDO0lBQ3BFLENBQUM7O2dCQWhERixVQUFVOzs7O0lBaURYLGlCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FoRFksVUFBVTs7Ozs7Ozs7SUFNckIscUNBQXlCOztJQUN6QixtQ0FPRTs7Ozs7Ozs7Ozs7OztJQVlGLHVDQUErQzs7Ozs7Ozs7SUFPL0MsbUNBQWdDOzs7OztJQUloQyxxQ0FHRTs7Ozs7OztBQWVKLGtDQW9CQzs7Ozs7O0lBaEJDLGtEQUFjOzs7Ozs7SUFLZCxxREFBdUM7Ozs7OztJQUt2Qyx1REFBK0I7Ozs7OztJQUsvQix5REFBaUQ7Ozs7OztBQVFuRCxnQ0FLQzs7Ozs7Ozs7O0lBREMsaUVBQTZEOzs7Ozs7O0FBTS9ELGtDQWVDOzs7Ozs7SUFYQyw0QkFBNkI7Ozs7O0lBSzdCLGdDQUFhOzs7OztJQUtiLGdDQUF3Qjs7Ozs7OztBQU8xQjs7Ozs7O0lBQ0UsMEJBQ2tCLGFBQWdCLEVBQ2hCLFlBQWUsRUFDZixXQUFvQjtRQUZwQixrQkFBYSxHQUFiLGFBQWEsQ0FBRztRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBRztRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBQ25DLENBQUM7SUFDTix1QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7Ozs7Ozs7SUFKRyx5Q0FBZ0M7O0lBQ2hDLHdDQUErQjs7SUFDL0IsdUNBQW9DOzs7Ozs7QUFPeEMsZ0NBRUM7Ozs7OztJQURDLHFEQUFnRDs7Ozs7O0FBTWxELG1DQUVDOzs7Ozs7SUFEQyw4REFBOEM7Ozs7OztBQU1oRCx3Q0FFQzs7Ozs7O0lBREMscUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGxhaW5PYmplY3QsIFN0YXRlQ2xhc3MgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZWxlY3Rvck9wdGlvbnMsIENhbGxiYWNrIH0gZnJvbSAnLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2V4ZWN1dGlvbi9zeW1ib2xzJztcclxuaW1wb3J0IHsgRGlzcGF0Y2hPdXRzaWRlWm9uZU5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2Rpc3BhdGNoLW91dHNpZGUtem9uZS1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneSc7XHJcbmltcG9ydCB7IFN0YXRlVG9rZW4gfSBmcm9tICcuL3N0YXRlLXRva2VuL3N0YXRlLXRva2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCBST09UX1NUQVRFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ1JPT1RfU1RBVEVfVE9LRU4nKTtcclxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfU1RBVEVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignRkVBVFVSRV9TVEFURV9UT0tFTicpO1xyXG5leHBvcnQgY29uc3QgTkdYU19QTFVHSU5TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX1BMVUdJTlMnKTtcclxuZXhwb3J0IGNvbnN0IE5HX1RFU1RfTU9ERSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDYWxsYmFjazxib29sZWFuPj4oJ05HX1RFU1RfTU9ERScpO1xyXG5leHBvcnQgY29uc3QgTkdfREVWX01PREUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q2FsbGJhY2s8Ym9vbGVhbj4+KCdOR19ERVZfTU9ERScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FVEFfS0VZID0gJ05HWFNfTUVUQSc7XHJcbmV4cG9ydCBjb25zdCBNRVRBX09QVElPTlNfS0VZID0gJ05HWFNfT1BUSU9OU19NRVRBJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX01FVEFfS0VZID0gJ05HWFNfU0VMRUNUT1JfTUVUQSc7XHJcblxyXG5leHBvcnQgdHlwZSBOZ3hzTGlmZUN5Y2xlID0gUGFydGlhbDxOZ3hzT25DaGFuZ2VzPiAmXHJcbiAgUGFydGlhbDxOZ3hzT25Jbml0PiAmXHJcbiAgUGFydGlhbDxOZ3hzQWZ0ZXJCb290c3RyYXA+O1xyXG5cclxuZXhwb3J0IHR5cGUgTmd4c1BsdWdpbkZuID0gKHN0YXRlOiBhbnksIG11dGF0aW9uOiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgTkdYUyBjb25maWcgc2V0dGluZ3MuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBSdW4gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gVGhpcyB3aWxsIGFkZCBhZGRpdGlvbmFsIGRlYnVnZ2luZyBmZWF0dXJlczpcclxuICAgKiAtIE9iamVjdC5mcmVlemUgb24gdGhlIHN0YXRlIGFuZCBhY3Rpb25zIHRvIGd1YXJhbnRlZSBpbW11dGFiaWxpdHlcclxuICAgKiAoZGVmYXVsdDogZmFsc2UpXHJcbiAgICovXHJcbiAgZGV2ZWxvcG1lbnRNb2RlOiBib29sZWFuO1xyXG4gIGNvbXBhdGliaWxpdHk6IHtcclxuICAgIC8qKlxyXG4gICAgICogU3VwcG9ydCBhIHN0cmljdCBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cclxuICAgICAqIFRoaXMgd2lsbCBjaXJjdW12ZW50IHNvbWUgb3B0aW1pc2F0aW9ucyB0aGF0IHZpb2xhdGUgYSBzdHJpY3QgQ1NQIHRocm91Z2ggdGhlIHVzZSBvZiBgbmV3IEZ1bmN0aW9uKC4uLilgLlxyXG4gICAgICogKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzdHJpY3RDb250ZW50U2VjdXJpdHlQb2xpY3k6IGJvb2xlYW47XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHRoZSBleGVjdXRpb24gY29udGV4dCB0byBwZXJmb3JtIGFzeW5jIG9wZXJhdGlvbnMgaW5zaWRlLiBBbiBpbXBsZW1lbnRhdGlvbiBjYW4gYmVcclxuICAgKiBwcm92aWRlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgd2hlcmUgdGhlIGFzeW5jIG9wZXJhdGlvbnMgYXJlIHJ1blxyXG4gICAqIG91dHNpZGUgQW5ndWxhcidzIHpvbmUgYnV0IGFsbCBvYnNlcnZhYmxlIGJlaGF2aW91cnMgb2YgTkdYUyBhcmUgcnVuIGJhY2sgaW5zaWRlIEFuZ3VsYXIncyB6b25lLlxyXG4gICAqIFRoZXNlIG9ic2VydmFibGUgYmVoYXZpb3VycyBhcmUgZnJvbTpcclxuICAgKiAgIGBAU2VsZWN0KC4uLilgLCBgc3RvcmUuc2VsZWN0KC4uLilgLCBgYWN0aW9ucy5zdWJzY3JpYmUoLi4uKWAgb3IgYHN0b3JlLmRpc3BhdGNoKC4uLikuc3Vic2NyaWJlKC4uLilgXHJcbiAgICogRXZlcnkgYHpvbmUucnVuYCBjYXVzZXMgQW5ndWxhciB0byBydW4gY2hhbmdlIGRldGVjdGlvbiBvbiB0aGUgd2hvbGUgdHJlZSAoYGFwcC50aWNrKClgKSBzbyBvZiB5b3VyXHJcbiAgICogYXBwbGljYXRpb24gZG9lc24ndCByZWx5IG9uIHpvbmUuanMgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIHRoZW4geW91IGNhbiBzd2l0Y2ggdG8gdGhlXHJcbiAgICogYE5vb3BOZ3hzRXhlY3V0aW9uU3RyYXRlZ3lgIHRoYXQgZG9lc24ndCBpbnRlcmFjdCB3aXRoIHpvbmVzLlxyXG4gICAqIChkZWZhdWx0OiBudWxsKVxyXG4gICAqL1xyXG4gIGV4ZWN1dGlvblN0cmF0ZWd5OiBUeXBlPE5neHNFeGVjdXRpb25TdHJhdGVneT47XHJcbiAgLyoqXHJcbiAgICogRGVmaW5pbmcgdGhlIGRlZmF1bHQgc3RhdGUgYmVmb3JlIG1vZHVsZSBpbml0aWFsaXphdGlvblxyXG4gICAqIFRoaXMgaXMgY29udmVuaWVudCBpZiB3ZSBuZWVkIHRvIGNyZWF0ZSBhIGRlZmluZSBvdXIgb3duIHNldCBvZiBzdGF0ZXMuXHJcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIHY0XHJcbiAgICogKGRlZmF1bHQ6IHt9KVxyXG4gICAqL1xyXG4gIGRlZmF1bHRzU3RhdGU6IFBsYWluT2JqZWN0ID0ge307XHJcbiAgLyoqXHJcbiAgICogRGVmaW5pbmcgc2hhcmVkIHNlbGVjdG9yIG9wdGlvbnNcclxuICAgKi9cclxuICBzZWxlY3Rvck9wdGlvbnM6IFNoYXJlZFNlbGVjdG9yT3B0aW9ucyA9IHtcclxuICAgIGluamVjdENvbnRhaW5lclN0YXRlOiB0cnVlLCAvLyBUT0RPOiBkZWZhdWx0IGlzIHRydWUgaW4gdjMsIHdpbGwgY2hhbmdlIGluIHY0XHJcbiAgICBzdXBwcmVzc0Vycm9yczogdHJ1ZSAvLyBUT0RPOiBkZWZhdWx0IGlzIHRydWUgaW4gdjMsIHdpbGwgY2hhbmdlIGluIHY0XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbXBhdGliaWxpdHkgPSB7XHJcbiAgICAgIHN0cmljdENvbnRlbnRTZWN1cml0eVBvbGljeTogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLmV4ZWN1dGlvblN0cmF0ZWd5ID0gRGlzcGF0Y2hPdXRzaWRlWm9uZU5neHNFeGVjdXRpb25TdHJhdGVneTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlT3BlcmF0b3I8VD4gPSAoZXhpc3Rpbmc6IFJlYWRvbmx5PFQ+KSA9PiBUO1xyXG5cclxuLyoqXHJcbiAqIFN0YXRlIGNvbnRleHQgcHJvdmlkZWQgdG8gdGhlIGFjdGlvbnMgaW4gdGhlIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUNvbnRleHQ8VD4ge1xyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZS5cclxuICAgKi9cclxuICBnZXRTdGF0ZSgpOiBUO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0aGUgc3RhdGUgdG8gYSBuZXcgdmFsdWUuXHJcbiAgICovXHJcbiAgc2V0U3RhdGUodmFsOiBUIHwgU3RhdGVPcGVyYXRvcjxUPik6IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdGNoIHRoZSBleGlzdGluZyBzdGF0ZSB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBwYXRjaFN0YXRlKHZhbDogUGFydGlhbDxUPik6IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BhdGNoIGEgbmV3IGFjdGlvbiBhbmQgcmV0dXJuIHRoZSBkaXNwYXRjaGVkIG9ic2VydmFibGUuXHJcbiAgICovXHJcbiAgZGlzcGF0Y2goYWN0aW9uczogYW55IHwgYW55W10pOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOZ3hzTmV4dFBsdWdpbkZuID0gKHN0YXRlOiBhbnksIG11dGF0aW9uOiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBQbHVnaW4gaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5neHNQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgc3RhdGUvYWN0aW9uIGJlZm9yZSBpdHMgc3VibWl0dGVkIHRvIHRoZSBzdGF0ZSBoYW5kbGVycy5cclxuICAgKi9cclxuICBoYW5kbGUoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIHRoYXQgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBzdG9yZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVPcHRpb25zPFQ+IHtcclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSBzdGF0ZS4gUmVxdWlyZWQuXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nIHwgU3RhdGVUb2tlbjxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBzdGF0ZS4gSWYgbm90IHByb3ZpZGVkLCB1c2VzIGVtcHR5IG9iamVjdC5cclxuICAgKi9cclxuICBkZWZhdWx0cz86IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YiBzdGF0ZXMgZm9yIHRoZSBnaXZlbiBzdGF0ZS5cclxuICAgKi9cclxuICBjaGlsZHJlbj86IFN0YXRlQ2xhc3NbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBiYXNpYyBjaGFuZ2UgZnJvbSBhIHByZXZpb3VzIHRvIGEgbmV3IHZhbHVlIGZvciBhIHNpbmdsZSBzdGF0ZSBpbnN0YW5jZS5cclxuICogUGFzc2VkIGFzIGEgdmFsdWUgaW4gYSBOZ3hzU2ltcGxlQ2hhbmdlcyBvYmplY3QgdG8gdGhlIG5neHNPbkNoYW5nZXMgaG9vay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZ3hzU2ltcGxlQ2hhbmdlPFQgPSBhbnk+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBwcmV2aW91c1ZhbHVlOiBULFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGN1cnJlbnRWYWx1ZTogVCxcclxuICAgIHB1YmxpYyByZWFkb25seSBmaXJzdENoYW5nZTogYm9vbGVhblxyXG4gICkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIE9uIGluaXQgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5neHNPbkluaXQge1xyXG4gIG5neHNPbkluaXQoY3R4PzogU3RhdGVDb250ZXh0PGFueT4pOiB2b2lkIHwgYW55O1xyXG59XHJcblxyXG4vKipcclxuICogT24gY2hhbmdlIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOZ3hzT25DaGFuZ2VzIHtcclxuICBuZ3hzT25DaGFuZ2VzKGNoYW5nZTogTmd4c1NpbXBsZUNoYW5nZSk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZnRlciBib290c3RyYXAgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5neHNBZnRlckJvb3RzdHJhcCB7XHJcbiAgbmd4c0FmdGVyQm9vdHN0cmFwKGN0eD86IFN0YXRlQ29udGV4dDxhbnk+KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmd4c01vZHVsZU9wdGlvbnMgPSBQYXJ0aWFsPE5neHNDb25maWc+O1xyXG4iXX0=