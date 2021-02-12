/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { DispatchOutsideZoneNgxsExecutionStrategy } from './execution/dispatch-outside-zone-ngxs-execution-strategy';
/** @type {?} */
export const ROOT_STATE_TOKEN = new InjectionToken('ROOT_STATE_TOKEN');
/** @type {?} */
export const FEATURE_STATE_TOKEN = new InjectionToken('FEATURE_STATE_TOKEN');
/** @type {?} */
export const NGXS_PLUGINS = new InjectionToken('NGXS_PLUGINS');
/** @type {?} */
export const NG_TEST_MODE = new InjectionToken('NG_TEST_MODE');
/** @type {?} */
export const NG_DEV_MODE = new InjectionToken('NG_DEV_MODE');
/** @type {?} */
export const META_KEY = 'NGXS_META';
/** @type {?} */
export const META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
/** @type {?} */
export const SELECTOR_META_KEY = 'NGXS_SELECTOR_META';
/**
 * The NGXS config settings.
 */
export class NgxsConfig {
    constructor() {
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
}
NgxsConfig.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsConfig.ctorParameters = () => [];
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
export class NgxsSimpleChange {
    /**
     * @param {?} previousValue
     * @param {?} currentValue
     * @param {?} firstChange
     */
    constructor(previousValue, currentValue, firstChange) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.firstChange = firstChange;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL3N5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBTWpFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUdySCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQU0sa0JBQWtCLENBQUM7O0FBQzNFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBTSxxQkFBcUIsQ0FBQzs7QUFDakYsTUFBTSxPQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUM7O0FBQzlELE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQW9CLGNBQWMsQ0FBQzs7QUFDakYsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBb0IsYUFBYSxDQUFDOztBQUUvRSxNQUFNLE9BQU8sUUFBUSxHQUFHLFdBQVc7O0FBQ25DLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxtQkFBbUI7O0FBQ25ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxvQkFBb0I7Ozs7QUFZckQsTUFBTSxPQUFPLFVBQVU7SUEwQ3JCOzs7Ozs7O1FBVEEsa0JBQWEsR0FBZ0IsRUFBRSxDQUFDOzs7O1FBSWhDLG9CQUFlLEdBQTBCO1lBQ3ZDLG9CQUFvQixFQUFFLElBQUk7O1lBQzFCLGNBQWMsRUFBRSxJQUFJLENBQUMsaURBQWlEO1NBQ3ZFLENBQUM7UUFHQSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLDJCQUEyQixFQUFFLEtBQUs7U0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyx3Q0FBd0MsQ0FBQztJQUNwRSxDQUFDOzs7WUFoREYsVUFBVTs7Ozs7Ozs7Ozs7SUFPVCxxQ0FBeUI7O0lBQ3pCLG1DQU9FOzs7Ozs7Ozs7Ozs7O0lBWUYsdUNBQStDOzs7Ozs7OztJQU8vQyxtQ0FBZ0M7Ozs7O0lBSWhDLHFDQUdFOzs7Ozs7O0FBZUosa0NBb0JDOzs7Ozs7SUFoQkMsa0RBQWM7Ozs7OztJQUtkLHFEQUF1Qzs7Ozs7O0lBS3ZDLHVEQUErQjs7Ozs7O0lBSy9CLHlEQUFpRDs7Ozs7O0FBUW5ELGdDQUtDOzs7Ozs7Ozs7SUFEQyxpRUFBNkQ7Ozs7Ozs7QUFNL0Qsa0NBZUM7Ozs7OztJQVhDLDRCQUE2Qjs7Ozs7SUFLN0IsZ0NBQWE7Ozs7O0lBS2IsZ0NBQXdCOzs7Ozs7O0FBTzFCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUMzQixZQUNrQixhQUFnQixFQUNoQixZQUFlLEVBQ2YsV0FBb0I7UUFGcEIsa0JBQWEsR0FBYixhQUFhLENBQUc7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQUc7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUNuQyxDQUFDO0NBQ0w7OztJQUpHLHlDQUFnQzs7SUFDaEMsd0NBQStCOztJQUMvQix1Q0FBb0M7Ozs7OztBQU94QyxnQ0FFQzs7Ozs7O0lBREMscURBQWdEOzs7Ozs7QUFNbEQsbUNBRUM7Ozs7OztJQURDLDhEQUE4Qzs7Ozs7O0FBTWhELHdDQUVDOzs7Ozs7SUFEQyxxRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQbGFpbk9iamVjdCwgU3RhdGVDbGFzcyB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcbmltcG9ydCB7IFNoYXJlZFNlbGVjdG9yT3B0aW9ucywgQ2FsbGJhY2sgfSBmcm9tICcuL2ludGVybmFsL2ludGVybmFscyc7XHJcbmltcG9ydCB7IE5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL3N5bWJvbHMnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9leGVjdXRpb24vZGlzcGF0Y2gtb3V0c2lkZS16b25lLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgU3RhdGVUb2tlbiB9IGZyb20gJy4vc3RhdGUtdG9rZW4vc3RhdGUtdG9rZW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJPT1RfU1RBVEVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignUk9PVF9TVEFURV9UT0tFTicpO1xyXG5leHBvcnQgY29uc3QgRkVBVFVSRV9TVEFURV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdGRUFUVVJFX1NUQVRFX1RPS0VOJyk7XHJcbmV4cG9ydCBjb25zdCBOR1hTX1BMVUdJTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05HWFNfUExVR0lOUycpO1xyXG5leHBvcnQgY29uc3QgTkdfVEVTVF9NT0RFID0gbmV3IEluamVjdGlvblRva2VuPENhbGxiYWNrPGJvb2xlYW4+PignTkdfVEVTVF9NT0RFJyk7XHJcbmV4cG9ydCBjb25zdCBOR19ERVZfTU9ERSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDYWxsYmFjazxib29sZWFuPj4oJ05HX0RFVl9NT0RFJyk7XHJcblxyXG5leHBvcnQgY29uc3QgTUVUQV9LRVkgPSAnTkdYU19NRVRBJztcclxuZXhwb3J0IGNvbnN0IE1FVEFfT1BUSU9OU19LRVkgPSAnTkdYU19PUFRJT05TX01FVEEnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfTUVUQV9LRVkgPSAnTkdYU19TRUxFQ1RPUl9NRVRBJztcclxuXHJcbmV4cG9ydCB0eXBlIE5neHNMaWZlQ3ljbGUgPSBQYXJ0aWFsPE5neHNPbkNoYW5nZXM+ICZcclxuICBQYXJ0aWFsPE5neHNPbkluaXQ+ICZcclxuICBQYXJ0aWFsPE5neHNBZnRlckJvb3RzdHJhcD47XHJcblxyXG5leHBvcnQgdHlwZSBOZ3hzUGx1Z2luRm4gPSAoc3RhdGU6IGFueSwgbXV0YXRpb246IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5GbikgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBOR1hTIGNvbmZpZyBzZXR0aW5ncy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5neHNDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIFJ1biBpbiBkZXZlbG9wbWVudCBtb2RlLiBUaGlzIHdpbGwgYWRkIGFkZGl0aW9uYWwgZGVidWdnaW5nIGZlYXR1cmVzOlxyXG4gICAqIC0gT2JqZWN0LmZyZWV6ZSBvbiB0aGUgc3RhdGUgYW5kIGFjdGlvbnMgdG8gZ3VhcmFudGVlIGltbXV0YWJpbGl0eVxyXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcclxuICAgKi9cclxuICBkZXZlbG9wbWVudE1vZGU6IGJvb2xlYW47XHJcbiAgY29tcGF0aWJpbGl0eToge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwb3J0IGEgc3RyaWN0IENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxyXG4gICAgICogVGhpcyB3aWxsIGNpcmN1bXZlbnQgc29tZSBvcHRpbWlzYXRpb25zIHRoYXQgdmlvbGF0ZSBhIHN0cmljdCBDU1AgdGhyb3VnaCB0aGUgdXNlIG9mIGBuZXcgRnVuY3Rpb24oLi4uKWAuXHJcbiAgICAgKiAoZGVmYXVsdDogZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHN0cmljdENvbnRlbnRTZWN1cml0eVBvbGljeTogYm9vbGVhbjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgdGhlIGV4ZWN1dGlvbiBjb250ZXh0IHRvIHBlcmZvcm0gYXN5bmMgb3BlcmF0aW9ucyBpbnNpZGUuIEFuIGltcGxlbWVudGF0aW9uIGNhbiBiZVxyXG4gICAqIHByb3ZpZGVkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW91ciB3aGVyZSB0aGUgYXN5bmMgb3BlcmF0aW9ucyBhcmUgcnVuXHJcbiAgICogb3V0c2lkZSBBbmd1bGFyJ3Mgem9uZSBidXQgYWxsIG9ic2VydmFibGUgYmVoYXZpb3VycyBvZiBOR1hTIGFyZSBydW4gYmFjayBpbnNpZGUgQW5ndWxhcidzIHpvbmUuXHJcbiAgICogVGhlc2Ugb2JzZXJ2YWJsZSBiZWhhdmlvdXJzIGFyZSBmcm9tOlxyXG4gICAqICAgYEBTZWxlY3QoLi4uKWAsIGBzdG9yZS5zZWxlY3QoLi4uKWAsIGBhY3Rpb25zLnN1YnNjcmliZSguLi4pYCBvciBgc3RvcmUuZGlzcGF0Y2goLi4uKS5zdWJzY3JpYmUoLi4uKWBcclxuICAgKiBFdmVyeSBgem9uZS5ydW5gIGNhdXNlcyBBbmd1bGFyIHRvIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG9uIHRoZSB3aG9sZSB0cmVlIChgYXBwLnRpY2soKWApIHNvIG9mIHlvdXJcclxuICAgKiBhcHBsaWNhdGlvbiBkb2Vzbid0IHJlbHkgb24gem9uZS5qcyBydW5uaW5nIGNoYW5nZSBkZXRlY3Rpb24gdGhlbiB5b3UgY2FuIHN3aXRjaCB0byB0aGVcclxuICAgKiBgTm9vcE5neHNFeGVjdXRpb25TdHJhdGVneWAgdGhhdCBkb2Vzbid0IGludGVyYWN0IHdpdGggem9uZXMuXHJcbiAgICogKGRlZmF1bHQ6IG51bGwpXHJcbiAgICovXHJcbiAgZXhlY3V0aW9uU3RyYXRlZ3k6IFR5cGU8Tmd4c0V4ZWN1dGlvblN0cmF0ZWd5PjtcclxuICAvKipcclxuICAgKiBEZWZpbmluZyB0aGUgZGVmYXVsdCBzdGF0ZSBiZWZvcmUgbW9kdWxlIGluaXRpYWxpemF0aW9uXHJcbiAgICogVGhpcyBpcyBjb252ZW5pZW50IGlmIHdlIG5lZWQgdG8gY3JlYXRlIGEgZGVmaW5lIG91ciBvd24gc2V0IG9mIHN0YXRlcy5cclxuICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgdjRcclxuICAgKiAoZGVmYXVsdDoge30pXHJcbiAgICovXHJcbiAgZGVmYXVsdHNTdGF0ZTogUGxhaW5PYmplY3QgPSB7fTtcclxuICAvKipcclxuICAgKiBEZWZpbmluZyBzaGFyZWQgc2VsZWN0b3Igb3B0aW9uc1xyXG4gICAqL1xyXG4gIHNlbGVjdG9yT3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zID0ge1xyXG4gICAgaW5qZWN0Q29udGFpbmVyU3RhdGU6IHRydWUsIC8vIFRPRE86IGRlZmF1bHQgaXMgdHJ1ZSBpbiB2Mywgd2lsbCBjaGFuZ2UgaW4gdjRcclxuICAgIHN1cHByZXNzRXJyb3JzOiB0cnVlIC8vIFRPRE86IGRlZmF1bHQgaXMgdHJ1ZSBpbiB2Mywgd2lsbCBjaGFuZ2UgaW4gdjRcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29tcGF0aWJpbGl0eSA9IHtcclxuICAgICAgc3RyaWN0Q29udGVudFNlY3VyaXR5UG9saWN5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRoaXMuZXhlY3V0aW9uU3RyYXRlZ3kgPSBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdGVPcGVyYXRvcjxUPiA9IChleGlzdGluZzogUmVhZG9ubHk8VD4pID0+IFQ7XHJcblxyXG4vKipcclxuICogU3RhdGUgY29udGV4dCBwcm92aWRlZCB0byB0aGUgYWN0aW9ucyBpbiB0aGUgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlQ29udGV4dDxUPiB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IHN0YXRlLlxyXG4gICAqL1xyXG4gIGdldFN0YXRlKCk6IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRoZSBzdGF0ZSB0byBhIG5ldyB2YWx1ZS5cclxuICAgKi9cclxuICBzZXRTdGF0ZSh2YWw6IFQgfCBTdGF0ZU9wZXJhdG9yPFQ+KTogVDtcclxuXHJcbiAgLyoqXHJcbiAgICogUGF0Y2ggdGhlIGV4aXN0aW5nIHN0YXRlIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIHBhdGNoU3RhdGUodmFsOiBQYXJ0aWFsPFQ+KTogVDtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGF0Y2ggYSBuZXcgYWN0aW9uIGFuZCByZXR1cm4gdGhlIGRpc3BhdGNoZWQgb2JzZXJ2YWJsZS5cclxuICAgKi9cclxuICBkaXNwYXRjaChhY3Rpb25zOiBhbnkgfCBhbnlbXSk6IE9ic2VydmFibGU8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5neHNOZXh0UGx1Z2luRm4gPSAoc3RhdGU6IGFueSwgbXV0YXRpb246IGFueSkgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFBsdWdpbiBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4c1BsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBzdGF0ZS9hY3Rpb24gYmVmb3JlIGl0cyBzdWJtaXR0ZWQgdG8gdGhlIHN0YXRlIGhhbmRsZXJzLlxyXG4gICAqL1xyXG4gIGhhbmRsZShzdGF0ZTogYW55LCBhY3Rpb246IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5Gbik6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgdGhhdCBjYW4gYmUgcHJvdmlkZWQgdG8gdGhlIHN0b3JlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yZU9wdGlvbnM8VD4ge1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIHN0YXRlLiBSZXF1aXJlZC5cclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmcgfCBTdGF0ZVRva2VuPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgdGhlIHN0YXRlLiBJZiBub3QgcHJvdmlkZWQsIHVzZXMgZW1wdHkgb2JqZWN0LlxyXG4gICAqL1xyXG4gIGRlZmF1bHRzPzogVDtcclxuXHJcbiAgLyoqXHJcbiAgICogU3ViIHN0YXRlcyBmb3IgdGhlIGdpdmVuIHN0YXRlLlxyXG4gICAqL1xyXG4gIGNoaWxkcmVuPzogU3RhdGVDbGFzc1tdO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGJhc2ljIGNoYW5nZSBmcm9tIGEgcHJldmlvdXMgdG8gYSBuZXcgdmFsdWUgZm9yIGEgc2luZ2xlIHN0YXRlIGluc3RhbmNlLlxyXG4gKiBQYXNzZWQgYXMgYSB2YWx1ZSBpbiBhIE5neHNTaW1wbGVDaGFuZ2VzIG9iamVjdCB0byB0aGUgbmd4c09uQ2hhbmdlcyBob29rLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5neHNTaW1wbGVDaGFuZ2U8VCA9IGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHByZXZpb3VzVmFsdWU6IFQsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY3VycmVudFZhbHVlOiBULFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpcnN0Q2hhbmdlOiBib29sZWFuXHJcbiAgKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogT24gaW5pdCBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4c09uSW5pdCB7XHJcbiAgbmd4c09uSW5pdChjdHg/OiBTdGF0ZUNvbnRleHQ8YW55Pik6IHZvaWQgfCBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPbiBjaGFuZ2UgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5neHNPbkNoYW5nZXMge1xyXG4gIG5neHNPbkNoYW5nZXMoY2hhbmdlOiBOZ3hzU2ltcGxlQ2hhbmdlKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFmdGVyIGJvb3RzdHJhcCBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4c0FmdGVyQm9vdHN0cmFwIHtcclxuICBuZ3hzQWZ0ZXJCb290c3RyYXAoY3R4PzogU3RhdGVDb250ZXh0PGFueT4pOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOZ3hzTW9kdWxlT3B0aW9ucyA9IFBhcnRpYWw8Tmd4c0NvbmZpZz47XHJcbiJdfQ==