import { __assign } from 'tslib';
import { InjectionToken, Injectable, Inject, Injector, NgModule } from '@angular/core';
import { Store, getActionTypeFromInstance, NGXS_PLUGINS } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for the redux-devtools-extension API.
 * @record
 */
function NgxsDevtoolsExtension() { }
if (false) {
    /**
     * @param {?} state
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.init = function (state) { };
    /**
     * @param {?} action
     * @param {?=} state
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.send = function (action, state) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxsDevtoolsExtension.prototype.subscribe = function (fn) { };
}
/**
 * @record
 */
function NgxsDevtoolsAction() { }
if (false) {
    /** @type {?} */
    NgxsDevtoolsAction.prototype.type;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.payload;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.state;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.id;
    /** @type {?} */
    NgxsDevtoolsAction.prototype.source;
}
/**
 * @record
 */
function NgxsDevtoolsOptions() { }
if (false) {
    /**
     * The name of the extension
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.name;
    /**
     * Whether the dev tools is enabled or note. Useful for setting during production.
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.disabled;
    /**
     * Max number of entiries to keep.
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.maxAge;
    /**
     * Reformat actions before sending to dev tools
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.actionSanitizer;
    /**
     * Reformat state before sending to devtools
     * @type {?|undefined}
     */
    NgxsDevtoolsOptions.prototype.stateSanitizer;
}
/** @type {?} */
var NGXS_DEVTOOLS_OPTIONS = new InjectionToken('NGXS_DEVTOOLS_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Adds support for the Redux Devtools extension:
 * http://extension.remotedev.io/
 */
var NgxsReduxDevtoolsPlugin = /** @class */ (function () {
    function NgxsReduxDevtoolsPlugin(_options, _injector) {
        var _this = this;
        this._options = _options;
        this._injector = _injector;
        this.devtoolsExtension = null;
        this.windowObj = typeof window !== 'undefined' ? window : {};
        /** @type {?} */
        var globalDevtools = this.windowObj['__REDUX_DEVTOOLS_EXTENSION__'] || this.windowObj['devToolsExtension'];
        if (globalDevtools) {
            this.devtoolsExtension = (/** @type {?} */ (globalDevtools.connect(_options)));
            this.devtoolsExtension.subscribe((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return _this.dispatched(a); }));
        }
    }
    Object.defineProperty(NgxsReduxDevtoolsPlugin.prototype, "store", {
        /**
         * Lazy get the store for circular dependency issues
         */
        get: /**
         * Lazy get the store for circular dependency issues
         * @private
         * @return {?}
         */
        function () {
            return this._injector.get(Store);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Middleware handle function
     */
    /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.handle = /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    function (state, action, next) {
        var _this = this;
        /** @type {?} */
        var isDisabled = this._options && this._options.disabled;
        if (!this.devtoolsExtension || isDisabled) {
            return next(state, action);
        }
        return next(state, action).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var newState = _this.store.snapshot();
            _this.sendToDevTools(state, action, newState);
            throw error;
        })), tap((/**
         * @param {?} newState
         * @return {?}
         */
        function (newState) {
            _this.sendToDevTools(state, action, newState);
        })));
    };
    /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.sendToDevTools = /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    function (state, action, newState) {
        /** @type {?} */
        var type = getActionTypeFromInstance(action);
        // if init action, send initial state to dev tools
        /** @type {?} */
        var isInitAction = type === '@@INIT';
        if (isInitAction) {
            (/** @type {?} */ (this.devtoolsExtension)).init(state);
        }
        else {
            (/** @type {?} */ (this.devtoolsExtension)).send(__assign({}, action, { action: null, type: type }), newState);
        }
    };
    /**
     * Handle the action from the dev tools subscription
     */
    /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.dispatched = /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    function (action) {
        var _this = this;
        if (action.type === 'DISPATCH') {
            if (action.payload.type === 'JUMP_TO_ACTION' ||
                action.payload.type === 'JUMP_TO_STATE') {
                /** @type {?} */
                var prevState = JSON.parse(action.state);
                this.store.reset(prevState);
            }
            else if (action.payload.type === 'TOGGLE_ACTION') {
                console.warn('Skip is not supported at this time.');
            }
            else if (action.payload.type === 'IMPORT_STATE') {
                var _a = action.payload.nextLiftedState, actionsById_1 = _a.actionsById, computedStates_1 = _a.computedStates, currentStateIndex = _a.currentStateIndex;
                (/** @type {?} */ (this.devtoolsExtension)).init(computedStates_1[0].state);
                Object.keys(actionsById_1)
                    .filter((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                function (actionId) { return actionId !== '0'; }))
                    .forEach((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                function (actionId) {
                    return (/** @type {?} */ (_this.devtoolsExtension)).send(actionsById_1[actionId], computedStates_1[actionId].state);
                }));
                this.store.reset(computedStates_1[currentStateIndex].state);
            }
        }
        else if (action.type === 'ACTION') {
            /** @type {?} */
            var actionPayload = JSON.parse(action.payload);
            this.store.dispatch(actionPayload);
        }
    };
    NgxsReduxDevtoolsPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxsReduxDevtoolsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
        { type: Injector }
    ]; };
    return NgxsReduxDevtoolsPlugin;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.devtoolsExtension;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.windowObj;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function devtoolsOptionsFactory(options) {
    return __assign({ name: 'NGXS' }, options);
}
/** @type {?} */
var USER_OPTIONS = new InjectionToken('USER_OPTIONS');
var NgxsReduxDevtoolsPluginModule = /** @class */ (function () {
    function NgxsReduxDevtoolsPluginModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgxsReduxDevtoolsPluginModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: NgxsReduxDevtoolsPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsReduxDevtoolsPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_DEVTOOLS_OPTIONS,
                    useFactory: devtoolsOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    };
    NgxsReduxDevtoolsPluginModule.decorators = [
        { type: NgModule }
    ];
    return NgxsReduxDevtoolsPluginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NGXS_DEVTOOLS_OPTIONS, NgxsReduxDevtoolsPlugin, NgxsReduxDevtoolsPluginModule, devtoolsOptionsFactory as ɵa, USER_OPTIONS as ɵb };
//# sourceMappingURL=ngxs-devtools-plugin.js.map
