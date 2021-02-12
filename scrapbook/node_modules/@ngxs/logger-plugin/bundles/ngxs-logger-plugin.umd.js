(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/logger-plugin', ['exports', '@angular/core', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['logger-plugin'] = {}), global.ng.core, global['ngxs-store'], global.rxjs.operators));
}(this, function (exports, core, store, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            var actionName = store.getActionTypeFromInstance(this.action);
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
    var NGXS_LOGGER_PLUGIN_OPTIONS = new core.InjectionToken('NGXS_LOGGER_PLUGIN_OPTIONS');

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
            this._store = this._store || this._injector.get(store.Store);
            /** @type {?} */
            var actionLogger = new ActionLogger(event, this._store, this._logWriter);
            actionLogger.dispatched(state);
            return next(state, event).pipe(operators.tap((/**
             * @param {?} nextState
             * @return {?}
             */
            function (nextState) {
                actionLogger.completed(nextState);
            })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                actionLogger.errored(error);
                throw error;
            })));
        };
        NgxsLoggerPlugin.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxsLoggerPlugin.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
            { type: core.Injector }
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
    var USER_OPTIONS = new core.InjectionToken('LOGGER_USER_OPTIONS');
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
                        provide: store.NGXS_PLUGINS,
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
            { type: core.NgModule }
        ];
        return NgxsLoggerPluginModule;
    }());

    exports.NGXS_LOGGER_PLUGIN_OPTIONS = NGXS_LOGGER_PLUGIN_OPTIONS;
    exports.NgxsLoggerPlugin = NgxsLoggerPlugin;
    exports.NgxsLoggerPluginModule = NgxsLoggerPluginModule;
    exports.ɵa = USER_OPTIONS;
    exports.ɵb = loggerOptionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngxs-logger-plugin.umd.js.map
