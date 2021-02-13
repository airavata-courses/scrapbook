import { getPlatform, COMPILER_OPTIONS, Injectable, InjectionToken } from '@angular/core';
import { ReplaySubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function defaultEqualityCheck(a, b) {
    return a === b;
}
/**
 * @param {?} equalityCheck
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
        return false;
    }
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    /** @type {?} */
    const length = prev.length;
    for (let i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Memoize a function on its last inputs only.
 * Originally from: https://github.com/reduxjs/reselect/blob/master/src/index.js
 *
 * @ignore
 * @template T
 * @param {?} func
 * @param {?=} equalityCheck
 * @return {?}
 */
function memoize(func, equalityCheck = defaultEqualityCheck) {
    /** @type {?} */
    let lastArgs = null;
    /** @type {?} */
    let lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    /**
     * @return {?}
     */
    function memoized() {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
            // apply arguments instead of spreading for performance.
            lastResult = ((/** @type {?} */ (func))).apply(null, arguments);
        }
        lastArgs = arguments;
        return lastResult;
    }
    ((/** @type {?} */ (memoized))).reset = (/**
     * @return {?}
     */
    function () {
        // The hidden (for now) ability to reset the memoization
        lastArgs = null;
        lastResult = null;
    });
    return (/** @type {?} */ (memoized));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function _isAngularInTestMode() {
    /** @type {?} */
    const platformRef = getPlatform();
    if (!platformRef)
        return false;
    /** @type {?} */
    const compilerOptions = platformRef.injector.get(COMPILER_OPTIONS, null);
    if (!compilerOptions)
        return false;
    /** @type {?} */
    const isInTestMode = compilerOptions.some((/**
     * @param {?} item
     * @return {?}
     */
    (item) => {
        /** @type {?} */
        const providers = (item && item.providers) || [];
        return providers.some((/**
         * @param {?} provider
         * @return {?}
         */
        (provider) => {
            return ((provider && provider.provide && provider.provide.name === 'MockNgModuleResolver') ||
                false);
        }));
    }));
    return isInTestMode;
}
/** @type {?} */
const isAngularInTestMode = memoize(_isAngularInTestMode);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsBootstrapper {
    constructor() {
        /**
         * Use `ReplaySubject`, thus we can get cached value even if the stream is completed
         */
        this.bootstrap$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    get appBootstrapped$() {
        return this.bootstrap$.asObservable();
    }
    /**
     * This event will be emitted after attaching `ComponentRef` of the root component
     * to the tree of views, that's a signal that application has been fully rendered
     * @return {?}
     */
    bootstrap() {
        this.bootstrap$.next(true);
        this.bootstrap$.complete();
    }
}
NgxsBootstrapper.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Use `ReplaySubject`, thus we can get cached value even if the stream is completed
     * @type {?}
     * @private
     */
    NgxsBootstrapper.prototype.bootstrap$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const INITIAL_STATE_TOKEN = new InjectionToken('INITIAL_STATE_TOKEN');
class InitialState {
    /**
     * @param {?} state
     * @return {?}
     */
    static set(state) {
        this.value = state;
    }
    /**
     * @return {?}
     */
    static pop() {
        /** @type {?} */
        const state = this.value;
        this.value = {};
        return state;
    }
}
InitialState.value = {};
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialState.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @see StateContextFactory as it's referenced by this token to be accessed by plugins internally
 * @type {?}
 */
const NGXS_STATE_CONTEXT_FACTORY = new InjectionToken('Internals.StateContextFactory');
/**
 * @see StateFactory as it's referenced by this token to be accessed by plugins internally
 * @type {?}
 */
const NGXS_STATE_FACTORY = new InjectionToken('Internals.StateFactory');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { INITIAL_STATE_TOKEN, InitialState, NGXS_STATE_CONTEXT_FACTORY, NGXS_STATE_FACTORY, NgxsBootstrapper, isAngularInTestMode, memoize };
//# sourceMappingURL=ngxs-store-internals.js.map
