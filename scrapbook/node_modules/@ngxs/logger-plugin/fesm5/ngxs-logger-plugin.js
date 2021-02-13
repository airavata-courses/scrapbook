import { __assign } from 'tslib';
import { InjectionToken, Injectable, Inject, Injector, NgModule } from '@angular/core';
import { getActionTypeFromInstance, Store, NGXS_PLUGINS } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var repeat = (/**
 * @param {?} str
 * @param {?} times
 * @return {?}
 */
function (str, times) { return new Array(times + 1).join(str); });
/** @type {?} */
var pad = (/**
 * @param {?} num
 * @param {?} maxLength
 * @return {?}
 */
function (num, maxLength) {
    return repeat('0', maxLength - num.toString().length) + num;
});
/**
 * @param {?} time
 * @return {?}
 */
function formatTime(time) {
    return (pad(time.getHours(), 2) +
        ":" +
        pad(time.getMinutes(), 2) +
        ":" +
        pad(time.getSeconds(), 2) +
        "." +
        pad(time.getMilliseconds(), 3));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActionLogger = /** @class */ (function () {
    function ActionLogger(action, store, logWriter) {
        this.action = action;
        this.store = store;
        this.logWriter = logWriter;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    ActionLogger.prototype.dispatched = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var actionName = getActionTypeFromInstance(this.action);
        /** @type {?} */
        var formattedTime = formatTime(new Date());
        /** @type {?} */
        var message = "action " + actionName + " @ " + formattedTime;
        this.logWriter.startGroup(message);
        // print payload only if at least one property is supplied
        if (this._hasPayload(this.action)) {
            this.logWriter.logGrey('payload', __assign({}, this.action));
        }
        this.logWriter.logGrey('prev state', state);
    };
    /**
     * @param {?} nextState
     * @return {?}
     */
    ActionLogger.prototype.completed = /**
     * @param {?} nextState
     * @return {?}
     */
    function (nextState) {
        this.logWriter.logGreen('next state', nextState);
        this.logWriter.endGroup();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ActionLogger.prototype.errored = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.logWriter.logRedish('next state after error', this.store.snapshot());
        this.logWriter.logRedish('error', error);
        this.logWriter.endGroup();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ActionLogger.prototype._hasPayload = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var nonEmptyProperties = this._getNonEmptyProperties(event);
        return nonEmptyProperties.length > 0;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ActionLogger.prototype._getNonEmptyProperties = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keys = Object.keys(event);
        /** @type {?} */
        var values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return event[key]; }));
        return values.filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value !== undefined; }));
    };
    return ActionLogger;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.action;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.logWriter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogWriter = /** @class */ (function () {
    function LogWriter(options) {
        this.options = options;
        this.options = this.options || (/** @type {?} */ ({}));
        this.logger = options.logger || console;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    LogWriter.prototype.startGroup = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var startGroupFn = this.options.collapsed
            ? this.logger.groupCollapsed
            : this.logger.group;
        try {
            startGroupFn.call(this.logger, message);
        }
        catch (e) {
            console.log(message);
        }
    };
    /**
     * @return {?}
     */
    LogWriter.prototype.endGroup = /**
     * @return {?}
     */
    function () {
        try {
            this.logger.groupEnd();
        }
        catch (e) {
            this.logger.log('—— log end ——');
        }
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logGrey = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var greyStyle = 'color: #9E9E9E; font-weight: bold';
        this.log(title, greyStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logGreen = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var greenStyle = 'color: #4CAF50; font-weight: bold';
        this.log(title, greenStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logRedish = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var redishStyle = 'color: #FD8182; font-weight: bold';
        this.log(title, redishStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.log = /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    function (title, color, payload) {
        if (this.isIE()) {
            this.logger.log(title, payload);
        }
        else {
            this.logger.log('%c ' + title, color, payload);
        }
    };
    /**
     * @return {?}
     */
    LogWriter.prototype.isIE = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = typeof window !== 'undefined' && window.navigator.userAgent
            ? window.navigator.userAgent
            : '';
        /** @type {?} */
        var msIE = false;
        /** @type {?} */
        var oldIE = ua.indexOf('MSIE ');
        /** @type {?} */
        var newIE = ua.indexOf('Trident/');
        if (oldIE > -1 || newIE > -1) {
            msIE = true;
        }
        return msIE;
    };
    return LogWriter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgxsLoggerPluginOptions() { }
if (false) {
    /**
     * Auto expand logged actions
     * @type {?|undefined}
     */
    NgxsLoggerPluginOptions.prototype.collapsed;
    /**
     * Provide alternate console.log implementation
     * @type {?|undefined}
     */
    NgxsLoggerPluginOptions.prototype.logger;
    /**
     * Disable the logger. Useful for prod mode.
     * @type {?|undefined}
     */
    NgxsLoggerPluginOptions.prototype.disabled;
    /**
     * Predicate for actions to be the logged. Takes action and state snapshot as parameters
     * @type {?|undefined}
     */
    NgxsLoggerPluginOptions.prototype.filter;
}
/** @type {?} */
var NGXS_LOGGER_PLUGIN_OPTIONS = new InjectionToken('NGXS_LOGGER_PLUGIN_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxsLoggerPlugin = /** @class */ (function () {
    function NgxsLoggerPlugin(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    NgxsLoggerPlugin.prototype.handle = /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    function (state, event, next) {
        if (this._options.disabled || !(/** @type {?} */ (this._options.filter))(event, state)) {
            return next(state, event);
        }
        this._logWriter = this._logWriter || new LogWriter(this._options);
        // Retrieve lazily to avoid cyclic dependency exception
        this._store = this._store || this._injector.get(Store);
        /** @type {?} */
        var actionLogger = new ActionLogger(event, this._store, this._logWriter);
        actionLogger.dispatched(state);
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        function (nextState) {
            actionLogger.completed(nextState);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            actionLogger.errored(error);
            throw error;
        })));
    };
    NgxsLoggerPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxsLoggerPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
        { type: Injector }
    ]; };
    return NgxsLoggerPlugin;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._store;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._logWriter;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_OPTIONS = new InjectionToken('LOGGER_USER_OPTIONS');
/**
 * @param {?} options
 * @return {?}
 */
function loggerOptionsFactory(options) {
    /** @type {?} */
    var defaultLoggerOptions = {
        logger: console,
        collapsed: false,
        disabled: false,
        filter: (/**
         * @return {?}
         */
        function () { return true; })
    };
    return __assign({}, defaultLoggerOptions, options);
}
var NgxsLoggerPluginModule = /** @class */ (function () {
    function NgxsLoggerPluginModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgxsLoggerPluginModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: NgxsLoggerPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsLoggerPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_LOGGER_PLUGIN_OPTIONS,
                    useFactory: loggerOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    };
    NgxsLoggerPluginModule.decorators = [
        { type: NgModule }
    ];
    return NgxsLoggerPluginModule;
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

export { NGXS_LOGGER_PLUGIN_OPTIONS, NgxsLoggerPlugin, NgxsLoggerPluginModule, USER_OPTIONS as ɵa, loggerOptionsFactory as ɵb };
//# sourceMappingURL=ngxs-logger-plugin.js.map
