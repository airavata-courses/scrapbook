(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngxs/store/internals', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs.store = global.ngxs.store || {}, global.ngxs.store.internals = {}), global.ng.core, global.rxjs));
}(this, function (exports, core, rxjs) { 'use strict';

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
        var length = prev.length;
        for (var i = 0; i < length; i++) {
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
    function memoize(func, equalityCheck) {
        if (equalityCheck === void 0) { equalityCheck = defaultEqualityCheck; }
        /** @type {?} */
        var lastArgs = null;
        /** @type {?} */
        var lastResult = null;
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
        var platformRef = core.getPlatform();
        if (!platformRef)
            return false;
        /** @type {?} */
        var compilerOptions = platformRef.injector.get(core.COMPILER_OPTIONS, null);
        if (!compilerOptions)
            return false;
        /** @type {?} */
        var isInTestMode = compilerOptions.some((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var providers = (item && item.providers) || [];
            return providers.some((/**
             * @param {?} provider
             * @return {?}
             */
            function (provider) {
                return ((provider && provider.provide && provider.provide.name === 'MockNgModuleResolver') ||
                    false);
            }));
        }));
        return isInTestMode;
    }
    /** @type {?} */
    var isAngularInTestMode = memoize(_isAngularInTestMode);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsBootstrapper = /** @class */ (function () {
        function NgxsBootstrapper() {
            /**
             * Use `ReplaySubject`, thus we can get cached value even if the stream is completed
             */
            this.bootstrap$ = new rxjs.ReplaySubject(1);
        }
        Object.defineProperty(NgxsBootstrapper.prototype, "appBootstrapped$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.bootstrap$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * This event will be emitted after attaching `ComponentRef` of the root component
         * to the tree of views, that's a signal that application has been fully rendered
         */
        /**
         * This event will be emitted after attaching `ComponentRef` of the root component
         * to the tree of views, that's a signal that application has been fully rendered
         * @return {?}
         */
        NgxsBootstrapper.prototype.bootstrap = /**
         * This event will be emitted after attaching `ComponentRef` of the root component
         * to the tree of views, that's a signal that application has been fully rendered
         * @return {?}
         */
        function () {
            this.bootstrap$.next(true);
            this.bootstrap$.complete();
        };
        NgxsBootstrapper.decorators = [
            { type: core.Injectable }
        ];
        return NgxsBootstrapper;
    }());
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
    var INITIAL_STATE_TOKEN = new core.InjectionToken('INITIAL_STATE_TOKEN');
    var InitialState = /** @class */ (function () {
        function InitialState() {
        }
        /**
         * @param {?} state
         * @return {?}
         */
        InitialState.set = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.value = state;
        };
        /**
         * @return {?}
         */
        InitialState.pop = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var state = this.value;
            this.value = {};
            return state;
        };
        InitialState.value = {};
        return InitialState;
    }());
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
    var NGXS_STATE_CONTEXT_FACTORY = new core.InjectionToken('Internals.StateContextFactory');
    /**
     * @see StateFactory as it's referenced by this token to be accessed by plugins internally
     * @type {?}
     */
    var NGXS_STATE_FACTORY = new core.InjectionToken('Internals.StateFactory');

    exports.INITIAL_STATE_TOKEN = INITIAL_STATE_TOKEN;
    exports.InitialState = InitialState;
    exports.NGXS_STATE_CONTEXT_FACTORY = NGXS_STATE_CONTEXT_FACTORY;
    exports.NGXS_STATE_FACTORY = NGXS_STATE_FACTORY;
    exports.NgxsBootstrapper = NgxsBootstrapper;
    exports.isAngularInTestMode = isAngularInTestMode;
    exports.memoize = memoize;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngxs-store-internals.umd.js.map
