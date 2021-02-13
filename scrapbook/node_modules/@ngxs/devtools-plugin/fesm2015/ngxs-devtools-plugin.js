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
const NGXS_DEVTOOLS_OPTIONS = new InjectionToken('NGXS_DEVTOOLS_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Adds support for the Redux Devtools extension:
 * http://extension.remotedev.io/
 */
class NgxsReduxDevtoolsPlugin {
    /**
     * @param {?} _options
     * @param {?} _injector
     */
    constructor(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
        this.devtoolsExtension = null;
        this.windowObj = typeof window !== 'undefined' ? window : {};
        /** @type {?} */
        const globalDevtools = this.windowObj['__REDUX_DEVTOOLS_EXTENSION__'] || this.windowObj['devToolsExtension'];
        if (globalDevtools) {
            this.devtoolsExtension = (/** @type {?} */ (globalDevtools.connect(_options)));
            this.devtoolsExtension.subscribe((/**
             * @param {?} a
             * @return {?}
             */
            a => this.dispatched(a)));
        }
    }
    /**
     * Lazy get the store for circular dependency issues
     * @private
     * @return {?}
     */
    get store() {
        return this._injector.get(Store);
    }
    /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    handle(state, action, next) {
        /** @type {?} */
        const isDisabled = this._options && this._options.disabled;
        if (!this.devtoolsExtension || isDisabled) {
            return next(state, action);
        }
        return next(state, action).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            /** @type {?} */
            const newState = this.store.snapshot();
            this.sendToDevTools(state, action, newState);
            throw error;
        })), tap((/**
         * @param {?} newState
         * @return {?}
         */
        newState => {
            this.sendToDevTools(state, action, newState);
        })));
    }
    /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    sendToDevTools(state, action, newState) {
        /** @type {?} */
        const type = getActionTypeFromInstance(action);
        // if init action, send initial state to dev tools
        /** @type {?} */
        const isInitAction = type === '@@INIT';
        if (isInitAction) {
            (/** @type {?} */ (this.devtoolsExtension)).init(state);
        }
        else {
            (/** @type {?} */ (this.devtoolsExtension)).send(Object.assign({}, action, { action: null, type }), newState);
        }
    }
    /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    dispatched(action) {
        if (action.type === 'DISPATCH') {
            if (action.payload.type === 'JUMP_TO_ACTION' ||
                action.payload.type === 'JUMP_TO_STATE') {
                /** @type {?} */
                const prevState = JSON.parse(action.state);
                this.store.reset(prevState);
            }
            else if (action.payload.type === 'TOGGLE_ACTION') {
                console.warn('Skip is not supported at this time.');
            }
            else if (action.payload.type === 'IMPORT_STATE') {
                const { actionsById, computedStates, currentStateIndex } = action.payload.nextLiftedState;
                (/** @type {?} */ (this.devtoolsExtension)).init(computedStates[0].state);
                Object.keys(actionsById)
                    .filter((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                actionId => actionId !== '0'))
                    .forEach((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                actionId => (/** @type {?} */ (this.devtoolsExtension)).send(actionsById[actionId], computedStates[actionId].state)));
                this.store.reset(computedStates[currentStateIndex].state);
            }
        }
        else if (action.type === 'ACTION') {
            /** @type {?} */
            const actionPayload = JSON.parse(action.payload);
            this.store.dispatch(actionPayload);
        }
    }
}
NgxsReduxDevtoolsPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsReduxDevtoolsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
    { type: Injector }
];
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
    return Object.assign({ name: 'NGXS' }, options);
}
/** @type {?} */
const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
class NgxsReduxDevtoolsPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
NgxsReduxDevtoolsPluginModule.decorators = [
    { type: NgModule }
];

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
