(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/devtools-plugin', ['exports', '@angular/core', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['devtools-plugin'] = {}), global.ng.core, global['ngxs-store'], global.rxjs.operators));
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
    var NGXS_DEVTOOLS_OPTIONS = new core.InjectionToken('NGXS_DEVTOOLS_OPTIONS');

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
                return this._injector.get(store.Store);
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
            return next(state, action).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                /** @type {?} */
                var newState = _this.store.snapshot();
                _this.sendToDevTools(state, action, newState);
                throw error;
            })), operators.tap((/**
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
            var type = store.getActionTypeFromInstance(action);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxsReduxDevtoolsPlugin.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
            { type: core.Injector }
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
    var USER_OPTIONS = new core.InjectionToken('USER_OPTIONS');
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
                        provide: store.NGXS_PLUGINS,
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
            { type: core.NgModule }
        ];
        return NgxsReduxDevtoolsPluginModule;
    }());

    exports.NGXS_DEVTOOLS_OPTIONS = NGXS_DEVTOOLS_OPTIONS;
    exports.NgxsReduxDevtoolsPlugin = NgxsReduxDevtoolsPlugin;
    exports.NgxsReduxDevtoolsPluginModule = NgxsReduxDevtoolsPluginModule;
    exports.ɵa = devtoolsOptionsFactory;
    exports.ɵb = USER_OPTIONS;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngxs-devtools-plugin.umd.js.map
