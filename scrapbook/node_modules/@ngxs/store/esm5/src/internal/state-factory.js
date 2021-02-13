/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, Optional, SkipSelf, Inject } from '@angular/core';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, defaultIfEmpty, filter, map, mergeMap, shareReplay, takeUntil } from 'rxjs/operators';
import { META_KEY, NgxsConfig } from '../symbols';
import { buildGraph, findFullParentPath, isObject, nameToState, propGetter, topologicalSort } from './internals';
import { getActionTypeFromInstance, getValue, setValue } from '../utils/utils';
import { ofActionDispatched } from '../operators/of-action';
import { InternalActions } from '../actions-stream';
import { InternalDispatchedActionResults } from '../internal/dispatcher';
import { StateContextFactory } from '../internal/state-context-factory';
import { StoreValidators } from '../utils/store-validators';
import { INITIAL_STATE_TOKEN, memoize } from '@ngxs/store/internals';
/**
 * State factory class
 * @ignore
 */
var StateFactory = /** @class */ (function () {
    function StateFactory(_injector, _config, _parentFactory, _actions, _actionResults, _stateContextFactory, _initialState) {
        var _this = this;
        this._injector = _injector;
        this._config = _config;
        this._parentFactory = _parentFactory;
        this._actions = _actions;
        this._actionResults = _actionResults;
        this._stateContextFactory = _stateContextFactory;
        this._initialState = _initialState;
        this._actionsSubscription = null;
        this._states = [];
        this._statesByName = {};
        this._statePaths = {};
        this.getRuntimeSelectorContext = memoize((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var stateFactory = _this;
            /**
             * @param {?} key
             * @return {?}
             */
            function resolveGetter(key) {
                /** @type {?} */
                var path = stateFactory.statePaths[key];
                return path ? propGetter(path.split('.'), stateFactory._config) : null;
            }
            /** @type {?} */
            var context = _this._parentFactory
                ? _this._parentFactory.getRuntimeSelectorContext()
                : {
                    getStateGetter: /**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        /** @type {?} */
                        var getter = resolveGetter(key);
                        if (getter) {
                            return getter;
                        }
                        return (/**
                         * @param {...?} args
                         * @return {?}
                         */
                        function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            // Late loaded getter
                            if (!getter) {
                                getter = resolveGetter(key);
                            }
                            return getter ? getter.apply(void 0, tslib_1.__spread(args)) : undefined;
                        });
                    },
                    getSelectorOptions: /**
                     * @param {?=} localOptions
                     * @return {?}
                     */
                    function (localOptions) {
                        /** @type {?} */
                        var globalSelectorOptions = stateFactory._config.selectorOptions;
                        return tslib_1.__assign({}, globalSelectorOptions, (localOptions || {}));
                    }
                };
            return context;
        }));
    }
    Object.defineProperty(StateFactory.prototype, "states", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parentFactory ? this._parentFactory.states : this._states;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateFactory.prototype, "statesByName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parentFactory ? this._parentFactory.statesByName : this._statesByName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateFactory.prototype, "statePaths", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._parentFactory ? this._parentFactory.statePaths : this._statePaths;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} defaults
     * @return {?}
     */
    StateFactory.cloneDefaults = /**
     * @private
     * @param {?} defaults
     * @return {?}
     */
    function (defaults) {
        /** @type {?} */
        var value = {};
        if (Array.isArray(defaults)) {
            value = defaults.slice();
        }
        else if (isObject(defaults)) {
            value = tslib_1.__assign({}, defaults);
        }
        else if (defaults === undefined) {
            value = {};
        }
        else {
            value = defaults;
        }
        return value;
    };
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    StateFactory.checkStatesAreValid = /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    function (stateClasses) {
        stateClasses.forEach(StoreValidators.getValidStateMeta);
    };
    /**
     * @return {?}
     */
    StateFactory.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // I'm using non-null assertion here since `_actionsSubscrition` will
        // be 100% defined. This is because `ngOnDestroy()` cannot be invoked
        // on the `StateFactory` until its initialized :) An it's initialized
        // for the first time along with the `NgxsRootModule`.
        (/** @type {?} */ (this._actionsSubscription)).unsubscribe();
    };
    /**
     * Add a new state to the global defs.
     */
    /**
     * Add a new state to the global defs.
     * @param {?} stateClasses
     * @return {?}
     */
    StateFactory.prototype.add = /**
     * Add a new state to the global defs.
     * @param {?} stateClasses
     * @return {?}
     */
    function (stateClasses) {
        var e_1, _a;
        StateFactory.checkStatesAreValid(stateClasses);
        var newStates = this.addToStatesMap(stateClasses).newStates;
        if (!newStates.length)
            return [];
        /** @type {?} */
        var stateGraph = buildGraph(newStates);
        /** @type {?} */
        var sortedStates = topologicalSort(stateGraph);
        /** @type {?} */
        var paths = findFullParentPath(stateGraph);
        /** @type {?} */
        var nameGraph = nameToState(newStates);
        /** @type {?} */
        var bootstrappedStores = [];
        try {
            for (var sortedStates_1 = tslib_1.__values(sortedStates), sortedStates_1_1 = sortedStates_1.next(); !sortedStates_1_1.done; sortedStates_1_1 = sortedStates_1.next()) {
                var name_1 = sortedStates_1_1.value;
                /** @type {?} */
                var stateClass = nameGraph[name_1];
                /** @type {?} */
                var path = paths[name_1];
                /** @type {?} */
                var meta = (/** @type {?} */ (stateClass[META_KEY]));
                this.addRuntimeInfoToMeta(meta, path);
                /** @type {?} */
                var stateMap = {
                    name: name_1,
                    path: path,
                    isInitialised: false,
                    actions: meta.actions,
                    instance: this._injector.get(stateClass),
                    defaults: StateFactory.cloneDefaults(meta.defaults)
                };
                // ensure our store hasn't already been added
                // but don't throw since it could be lazy
                // loaded from different paths
                if (!this.hasBeenMountedAndBootstrapped(name_1, path)) {
                    bootstrappedStores.push(stateMap);
                }
                this.states.push(stateMap);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortedStates_1_1 && !sortedStates_1_1.done && (_a = sortedStates_1.return)) _a.call(sortedStates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return bootstrappedStores;
    };
    /**
     * Add a set of states to the store and return the defaults
     */
    /**
     * Add a set of states to the store and return the defaults
     * @param {?} stateClasses
     * @return {?}
     */
    StateFactory.prototype.addAndReturnDefaults = /**
     * Add a set of states to the store and return the defaults
     * @param {?} stateClasses
     * @return {?}
     */
    function (stateClasses) {
        /** @type {?} */
        var classes = stateClasses || [];
        /** @type {?} */
        var mappedStores = this.add(classes);
        /** @type {?} */
        var defaults = mappedStores.reduce((/**
         * @param {?} result
         * @param {?} mappedStore
         * @return {?}
         */
        function (result, mappedStore) {
            return setValue(result, mappedStore.path, mappedStore.defaults);
        }), {});
        return { defaults: defaults, states: mappedStores };
    };
    /**
     * Bind the actions to the handlers
     */
    /**
     * Bind the actions to the handlers
     * @return {?}
     */
    StateFactory.prototype.connectActionHandlers = /**
     * Bind the actions to the handlers
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._actionsSubscription !== null)
            return;
        this._actionsSubscription = this._actions
            .pipe(filter((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) { return ctx.status === "DISPATCHED" /* Dispatched */; })), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var action = _a.action;
            return _this.invokeActions(_this._actions, (/** @type {?} */ (action))).pipe(map((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ ({ action: action, status: "SUCCESSFUL" /* Successful */ })); })), defaultIfEmpty((/** @type {?} */ ({ action: action, status: "CANCELED" /* Canceled */ }))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of((/** @type {?} */ ({ action: action, status: "ERRORED" /* Errored */, error: error })));
            })));
        })))
            .subscribe((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) { return _this._actionResults.next(ctx); }));
    };
    /**
     * Invoke actions on the states.
     */
    /**
     * Invoke actions on the states.
     * @param {?} actions$
     * @param {?} action
     * @return {?}
     */
    StateFactory.prototype.invokeActions = /**
     * Invoke actions on the states.
     * @param {?} actions$
     * @param {?} action
     * @return {?}
     */
    function (actions$, action) {
        var e_2, _a, e_3, _b;
        /** @type {?} */
        var type = (/** @type {?} */ (getActionTypeFromInstance(action)));
        /** @type {?} */
        var results = [];
        try {
            for (var _c = tslib_1.__values(this.states), _d = _c.next(); !_d.done; _d = _c.next()) {
                var metadata = _d.value;
                /** @type {?} */
                var actionMetas = metadata.actions[type];
                if (actionMetas) {
                    try {
                        for (var actionMetas_1 = tslib_1.__values(actionMetas), actionMetas_1_1 = actionMetas_1.next(); !actionMetas_1_1.done; actionMetas_1_1 = actionMetas_1.next()) {
                            var actionMeta = actionMetas_1_1.value;
                            /** @type {?} */
                            var stateContext = this._stateContextFactory.createStateContext(metadata);
                            try {
                                /** @type {?} */
                                var result = metadata.instance[actionMeta.fn](stateContext, action);
                                if (result instanceof Promise) {
                                    result = from(result);
                                }
                                if (result instanceof Observable) {
                                    // If this observable has been completed w/o emitting
                                    // any value then we wouldn't want to complete the whole chain
                                    // of actions. Since if any observable completes then
                                    // action will be canceled.
                                    // For instance if any action handler would've had such statement:
                                    // `handler(ctx) { return EMPTY; }`
                                    // then the action will be canceled.
                                    // See https://github.com/ngxs/store/issues/1568
                                    result = result.pipe(defaultIfEmpty({}));
                                    if (actionMeta.options.cancelUncompleted) {
                                        // todo: ofActionDispatched should be used with action class
                                        result = result.pipe(takeUntil(actions$.pipe(ofActionDispatched((/** @type {?} */ (action))))));
                                    }
                                }
                                else {
                                    result = of({}).pipe(shareReplay());
                                }
                                results.push(result);
                            }
                            catch (e) {
                                results.push(throwError(e));
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (actionMetas_1_1 && !actionMetas_1_1.done && (_b = actionMetas_1.return)) _b.call(actionMetas_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!results.length) {
            results.push(of({}));
        }
        return forkJoin(results);
    };
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    StateFactory.prototype.addToStatesMap = /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    function (stateClasses) {
        var e_4, _a;
        /** @type {?} */
        var newStates = [];
        /** @type {?} */
        var statesMap = this.statesByName;
        try {
            for (var stateClasses_1 = tslib_1.__values(stateClasses), stateClasses_1_1 = stateClasses_1.next(); !stateClasses_1_1.done; stateClasses_1_1 = stateClasses_1.next()) {
                var stateClass = stateClasses_1_1.value;
                /** @type {?} */
                var stateName = StoreValidators.checkStateNameIsUnique(stateClass, statesMap);
                /** @type {?} */
                var unmountedState = !statesMap[stateName];
                if (unmountedState) {
                    newStates.push(stateClass);
                    statesMap[stateName] = stateClass;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (stateClasses_1_1 && !stateClasses_1_1.done && (_a = stateClasses_1.return)) _a.call(stateClasses_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return { newStates: newStates };
    };
    /**
     * @private
     * @param {?} meta
     * @param {?} path
     * @return {?}
     */
    StateFactory.prototype.addRuntimeInfoToMeta = /**
     * @private
     * @param {?} meta
     * @param {?} path
     * @return {?}
     */
    function (meta, path) {
        this.statePaths[(/** @type {?} */ (meta.name))] = path;
        // TODO: v4 - we plan to get rid of the path property because it is non-deterministic
        // we can do this when we get rid of the incorrectly exposed getStoreMetadata
        // We will need to come up with an alternative in v4 because this is used by many plugins
        meta.path = path;
    };
    /**
     * @description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @param name
     * @param path
     */
    /**
     * \@description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @private
     * @param {?} name
     * @param {?} path
     * @return {?}
     */
    StateFactory.prototype.hasBeenMountedAndBootstrapped = /**
     * \@description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @private
     * @param {?} name
     * @param {?} path
     * @return {?}
     */
    function (name, path) {
        /** @type {?} */
        var valueIsBootstrappedInInitialState = getValue(this._initialState, path) !== undefined;
        return this.statesByName[name] && valueIsBootstrappedInInitialState;
    };
    StateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: NgxsConfig },
        { type: StateFactory, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: InternalActions },
        { type: InternalDispatchedActionResults },
        { type: StateContextFactory },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_STATE_TOKEN,] }] }
    ]; };
    return StateFactory;
}());
export { StateFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._actionsSubscription;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._states;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._statesByName;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._statePaths;
    /** @type {?} */
    StateFactory.prototype.getRuntimeSelectorContext;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._config;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._parentFactory;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._actionResults;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._stateContextFactory;
    /**
     * @type {?}
     * @private
     */
    StateFactory.prototype._initialState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL3N0YXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUNMLFVBQVUsRUFDVixjQUFjLEVBQ2QsTUFBTSxFQUNOLEdBQUcsRUFDSCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLFFBQVEsRUFHUixXQUFXLEVBQ1gsVUFBVSxFQUtWLGVBQWUsRUFHaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQStCLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQWlCLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQU1wRjtJQUlFLHNCQUNVLFNBQW1CLEVBQ25CLE9BQW1CLEVBR25CLGNBQTRCLEVBQzVCLFFBQXlCLEVBQ3pCLGNBQStDLEVBQy9DLG9CQUF5QyxFQUd6QyxhQUFrQjtRQVg1QixpQkFZSTtRQVhNLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUduQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUM7UUFDL0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUd6QyxrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQWJwQix5QkFBb0IsR0FBd0IsSUFBSSxDQUFDO1FBZ0JqRCxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQU01QixrQkFBYSxHQUFpQixFQUFFLENBQUM7UUFNakMsZ0JBQVcsR0FBMEIsRUFBRSxDQUFDO1FBTWhELDhCQUF5QixHQUFHLE9BQU87OztRQUFDOztnQkFDNUIsWUFBWSxHQUFHLEtBQUk7Ozs7O1lBRXpCLFNBQVMsYUFBYSxDQUFDLEdBQVc7O29CQUMxQixJQUFJLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RSxDQUFDOztnQkFFSyxPQUFPLEdBQTJCLEtBQUksQ0FBQyxjQUFjO2dCQUN6RCxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRTtnQkFDakQsQ0FBQyxDQUFDO29CQUNFLGNBQWM7Ozs7OEJBQUMsR0FBVzs7NEJBQ3BCLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO3dCQUMvQixJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLE1BQU0sQ0FBQzt5QkFDZjt3QkFDRDs7Ozt3QkFBTzs0QkFBQyxjQUFPO2lDQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0NBQVAseUJBQU87OzRCQUNiLHFCQUFxQjs0QkFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQ0FDWCxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUM3Qjs0QkFDRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxnQ0FBSSxJQUFJLEdBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDOUMsQ0FBQyxFQUFDO29CQUNKLENBQUM7b0JBQ0Qsa0JBQWtCOzs7OzhCQUFDLFlBQW9DOzs0QkFDL0MscUJBQXFCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlO3dCQUNsRSw0QkFDSyxxQkFBcUIsRUFDckIsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLEVBQ3ZCO29CQUNKLENBQUM7aUJBQ0Y7WUFDTCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQXJEQSxDQUFDO0lBSUosc0JBQUksZ0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxzQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFJRCxzQkFBWSxvQ0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pGLENBQUM7OztPQUFBOzs7Ozs7SUFxQ2MsMEJBQWE7Ozs7O0lBQTVCLFVBQTZCLFFBQWE7O1lBQ3BDLEtBQUssR0FBRyxFQUFFO1FBRWQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7YUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixLQUFLLHdCQUFRLFFBQVEsQ0FBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2pDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ0wsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRWMsZ0NBQW1COzs7OztJQUFsQyxVQUFtQyxZQUFrQztRQUNuRSxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxxRUFBcUU7UUFDckUscUVBQXFFO1FBQ3JFLHFFQUFxRTtRQUNyRSxzREFBc0Q7UUFDdEQsbUJBQUEsSUFBSSxDQUFDLG9CQUFvQixFQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCwwQkFBRzs7Ozs7SUFBSCxVQUFJLFlBQWtDOztRQUNwQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBQSx1REFBUztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFFM0IsVUFBVSxHQUFrQixVQUFVLENBQUMsU0FBUyxDQUFDOztZQUNqRCxZQUFZLEdBQWEsZUFBZSxDQUFDLFVBQVUsQ0FBQzs7WUFDcEQsS0FBSyxHQUEwQixrQkFBa0IsQ0FBQyxVQUFVLENBQUM7O1lBQzdELFNBQVMsR0FBc0MsV0FBVyxDQUFDLFNBQVMsQ0FBQzs7WUFDckUsa0JBQWtCLEdBQWtCLEVBQUU7O1lBRTVDLEtBQW1CLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBLG9FQUFFO2dCQUE1QixJQUFNLE1BQUkseUJBQUE7O29CQUNQLFVBQVUsR0FBdUIsU0FBUyxDQUFDLE1BQUksQ0FBQzs7b0JBQ2hELElBQUksR0FBVyxLQUFLLENBQUMsTUFBSSxDQUFDOztvQkFDMUIsSUFBSSxHQUFrQixtQkFBQSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0JBRWpELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O29CQUVoQyxRQUFRLEdBQWdCO29CQUM1QixJQUFJLFFBQUE7b0JBQ0osSUFBSSxNQUFBO29CQUNKLGFBQWEsRUFBRSxLQUFLO29CQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQ3hDLFFBQVEsRUFBRSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ3BEO2dCQUVELDZDQUE2QztnQkFDN0MseUNBQXlDO2dCQUN6Qyw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsTUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNuRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25DO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCOzs7Ozs7Ozs7UUFFRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMkNBQW9COzs7OztJQUFwQixVQUFxQixZQUFrQzs7WUFDL0MsT0FBTyxHQUF5QixZQUFZLElBQUksRUFBRTs7WUFFbEQsWUFBWSxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7WUFDL0MsUUFBUSxHQUFHLFlBQVksQ0FBQyxNQUFNOzs7OztRQUNsQyxVQUFDLE1BQVcsRUFBRSxXQUF3QjtZQUNwQyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQXhELENBQXdELEdBQzFELEVBQUUsQ0FDSDtRQUNELE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRDQUFxQjs7OztJQUFyQjtRQUFBLGlCQWdCQztRQWZDLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUk7WUFBRSxPQUFPO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QyxJQUFJLENBQ0gsTUFBTTs7OztRQUFDLFVBQUMsR0FBa0IsSUFBSyxPQUFBLEdBQUcsQ0FBQyxNQUFNLGtDQUE0QixFQUF0QyxDQUFzQyxFQUFDLEVBQ3RFLFFBQVE7Ozs7UUFBQyxVQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDaEIsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQUEsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUc7OztZQUFDLHFCQUFNLG1CQUFlLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSwrQkFBeUIsRUFBRSxFQUFBLEdBQUEsRUFBQyxFQUNyRSxjQUFjLENBQUMsbUJBQWUsRUFBRSxNQUFNLFFBQUEsRUFBRSxNQUFNLDJCQUF1QixFQUFFLEVBQUEsQ0FBQyxFQUN4RSxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLG1CQUFlLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSx5QkFBc0IsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFBLENBQUM7WUFBbEUsQ0FBa0UsRUFDbkUsQ0FDRjtRQU5ELENBTUMsRUFDRixDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxvQ0FBYTs7Ozs7O0lBQWIsVUFBYyxRQUF5QixFQUFFLE1BQVc7OztZQUM1QyxJQUFJLEdBQUcsbUJBQUEseUJBQXlCLENBQUMsTUFBTSxDQUFDLEVBQUM7O1lBQ3pDLE9BQU8sR0FBRyxFQUFFOztZQUVsQixLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBL0IsSUFBTSxRQUFRLFdBQUE7O29CQUNYLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFFMUMsSUFBSSxXQUFXLEVBQUU7O3dCQUNmLEtBQXlCLElBQUEsZ0JBQUEsaUJBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFOzRCQUFqQyxJQUFNLFVBQVUsd0JBQUE7O2dDQUNiLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDOzRCQUMzRSxJQUFJOztvQ0FDRSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztnQ0FFbkUsSUFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO29DQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lDQUN2QjtnQ0FFRCxJQUFJLE1BQU0sWUFBWSxVQUFVLEVBQUU7b0NBQ2hDLHFEQUFxRDtvQ0FDckQsOERBQThEO29DQUM5RCxxREFBcUQ7b0NBQ3JELDJCQUEyQjtvQ0FDM0Isa0VBQWtFO29DQUNsRSxtQ0FBbUM7b0NBQ25DLG9DQUFvQztvQ0FDcEMsZ0RBQWdEO29DQUNoRCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FFekMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO3dDQUN4Qyw0REFBNEQ7d0NBQzVELE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUNsQixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FDNUQsQ0FBQztxQ0FDSDtpQ0FDRjtxQ0FBTTtvQ0FDTCxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2lDQUNyQztnQ0FFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUN0Qjs0QkFBQyxPQUFPLENBQUMsRUFBRTtnQ0FDVixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUM3Qjt5QkFDRjs7Ozs7Ozs7O2lCQUNGO2FBQ0Y7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxxQ0FBYzs7Ozs7SUFBdEIsVUFDRSxZQUFrQzs7O1lBRTVCLFNBQVMsR0FBeUIsRUFBRTs7WUFDcEMsU0FBUyxHQUFpQixJQUFJLENBQUMsWUFBWTs7WUFFakQsS0FBeUIsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7Z0JBQWxDLElBQU0sVUFBVSx5QkFBQTs7b0JBQ2IsU0FBUyxHQUFXLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDOztvQkFDakYsY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztnQkFDNUMsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzNCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ25DO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFTywyQ0FBb0I7Ozs7OztJQUE1QixVQUE2QixJQUFtQixFQUFFLElBQVk7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkMscUZBQXFGO1FBQ3JGLDZFQUE2RTtRQUM3RSx5RkFBeUY7UUFDekYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNLLG9EQUE2Qjs7Ozs7Ozs7O0lBQXJDLFVBQXNDLElBQVksRUFBRSxJQUFZOztZQUN4RCxpQ0FBaUMsR0FDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssU0FBUztRQUNsRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWlDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBL1FGLFVBQVU7Ozs7Z0JBekNVLFFBQVE7Z0JBWVYsVUFBVTtnQkFzQ0QsWUFBWSx1QkFGbkMsUUFBUSxZQUNSLFFBQVE7Z0JBbEJ5QixlQUFlO2dCQUM1QywrQkFBK0I7Z0JBQy9CLG1CQUFtQjtnREFxQnZCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COztJQWtRL0IsbUJBQUM7Q0FBQSxBQWhSRCxJQWdSQztTQS9RWSxZQUFZOzs7Ozs7SUFDdkIsNENBQXlEOzs7OztJQWdCekQsK0JBQW9DOzs7OztJQU1wQyxxQ0FBeUM7Ozs7O0lBTXpDLG1DQUFnRDs7SUFNaEQsaURBaUNHOzs7OztJQWhFRCxpQ0FBMkI7Ozs7O0lBQzNCLCtCQUEyQjs7Ozs7SUFDM0Isc0NBRW9DOzs7OztJQUNwQyxnQ0FBaUM7Ozs7O0lBQ2pDLHNDQUF1RDs7Ozs7SUFDdkQsNENBQWlEOzs7OztJQUNqRCxxQ0FFMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwsIFNraXBTZWxmLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmb3JrSm9pbiwgZnJvbSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIGNhdGNoRXJyb3IsXHJcbiAgZGVmYXVsdElmRW1wdHksXHJcbiAgZmlsdGVyLFxyXG4gIG1hcCxcclxuICBtZXJnZU1hcCxcclxuICBzaGFyZVJlcGxheSxcclxuICB0YWtlVW50aWxcclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBNRVRBX0tFWSwgTmd4c0NvbmZpZyB9IGZyb20gJy4uL3N5bWJvbHMnO1xyXG5pbXBvcnQge1xyXG4gIGJ1aWxkR3JhcGgsXHJcbiAgZmluZEZ1bGxQYXJlbnRQYXRoLFxyXG4gIGlzT2JqZWN0LFxyXG4gIE1hcHBlZFN0b3JlLFxyXG4gIE1ldGFEYXRhTW9kZWwsXHJcbiAgbmFtZVRvU3RhdGUsXHJcbiAgcHJvcEdldHRlcixcclxuICBTdGF0ZUNsYXNzSW50ZXJuYWwsXHJcbiAgU3RhdGVLZXlHcmFwaCxcclxuICBTdGF0ZXNBbmREZWZhdWx0cyxcclxuICBTdGF0ZXNCeU5hbWUsXHJcbiAgdG9wb2xvZ2ljYWxTb3J0LFxyXG4gIFJ1bnRpbWVTZWxlY3RvckNvbnRleHQsXHJcbiAgU2hhcmVkU2VsZWN0b3JPcHRpb25zXHJcbn0gZnJvbSAnLi9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlLCBnZXRWYWx1ZSwgc2V0VmFsdWUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IG9mQWN0aW9uRGlzcGF0Y2hlZCB9IGZyb20gJy4uL29wZXJhdG9ycy9vZi1hY3Rpb24nO1xyXG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0LCBBY3Rpb25TdGF0dXMsIEludGVybmFsQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMtc3RyZWFtJztcclxuaW1wb3J0IHsgSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyB9IGZyb20gJy4uL2ludGVybmFsL2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHRGYWN0b3J5IH0gZnJvbSAnLi4vaW50ZXJuYWwvc3RhdGUtY29udGV4dC1mYWN0b3J5JztcclxuaW1wb3J0IHsgU3RvcmVWYWxpZGF0b3JzIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmUtdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IElOSVRJQUxfU1RBVEVfVE9LRU4sIFBsYWluT2JqZWN0T2YsIG1lbW9pemUgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xyXG5cclxuLyoqXHJcbiAqIFN0YXRlIGZhY3RvcnkgY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdGVGYWN0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9hY3Rpb25zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIF9jb25maWc6IE5neHNDb25maWcsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQFNraXBTZWxmKClcclxuICAgIHByaXZhdGUgX3BhcmVudEZhY3Rvcnk6IFN0YXRlRmFjdG9yeSxcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEludGVybmFsQWN0aW9ucyxcclxuICAgIHByaXZhdGUgX2FjdGlvblJlc3VsdHM6IEludGVybmFsRGlzcGF0Y2hlZEFjdGlvblJlc3VsdHMsXHJcbiAgICBwcml2YXRlIF9zdGF0ZUNvbnRleHRGYWN0b3J5OiBTdGF0ZUNvbnRleHRGYWN0b3J5LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoSU5JVElBTF9TVEFURV9UT0tFTilcclxuICAgIHByaXZhdGUgX2luaXRpYWxTdGF0ZTogYW55XHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIF9zdGF0ZXM6IE1hcHBlZFN0b3JlW10gPSBbXTtcclxuXHJcbiAgZ2V0IHN0YXRlcygpOiBNYXBwZWRTdG9yZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGYWN0b3J5ID8gdGhpcy5fcGFyZW50RmFjdG9yeS5zdGF0ZXMgOiB0aGlzLl9zdGF0ZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGF0ZXNCeU5hbWU6IFN0YXRlc0J5TmFtZSA9IHt9O1xyXG5cclxuICBnZXQgc3RhdGVzQnlOYW1lKCk6IFN0YXRlc0J5TmFtZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RmFjdG9yeSA/IHRoaXMuX3BhcmVudEZhY3Rvcnkuc3RhdGVzQnlOYW1lIDogdGhpcy5fc3RhdGVzQnlOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhdGVQYXRoczogUGxhaW5PYmplY3RPZjxzdHJpbmc+ID0ge307XHJcblxyXG4gIHByaXZhdGUgZ2V0IHN0YXRlUGF0aHMoKTogUGxhaW5PYmplY3RPZjxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGYWN0b3J5ID8gdGhpcy5fcGFyZW50RmFjdG9yeS5zdGF0ZVBhdGhzIDogdGhpcy5fc3RhdGVQYXRocztcclxuICB9XHJcblxyXG4gIGdldFJ1bnRpbWVTZWxlY3RvckNvbnRleHQgPSBtZW1vaXplKCgpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlRmFjdG9yeSA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUdldHRlcihrZXk6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBwYXRoID0gc3RhdGVGYWN0b3J5LnN0YXRlUGF0aHNba2V5XTtcclxuICAgICAgcmV0dXJuIHBhdGggPyBwcm9wR2V0dGVyKHBhdGguc3BsaXQoJy4nKSwgc3RhdGVGYWN0b3J5Ll9jb25maWcpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250ZXh0OiBSdW50aW1lU2VsZWN0b3JDb250ZXh0ID0gdGhpcy5fcGFyZW50RmFjdG9yeVxyXG4gICAgICA/IHRoaXMuX3BhcmVudEZhY3RvcnkuZ2V0UnVudGltZVNlbGVjdG9yQ29udGV4dCgpXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgZ2V0U3RhdGVHZXR0ZXIoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGdldHRlciA9IHJlc29sdmVHZXR0ZXIoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGdldHRlcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBnZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gTGF0ZSBsb2FkZWQgZ2V0dGVyXHJcbiAgICAgICAgICAgICAgaWYgKCFnZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGdldHRlciA9IHJlc29sdmVHZXR0ZXIoa2V5KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGdldHRlciA/IGdldHRlciguLi5hcmdzKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBnZXRTZWxlY3Rvck9wdGlvbnMobG9jYWxPcHRpb25zPzogU2hhcmVkU2VsZWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdsb2JhbFNlbGVjdG9yT3B0aW9ucyA9IHN0YXRlRmFjdG9yeS5fY29uZmlnLnNlbGVjdG9yT3B0aW9ucztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5nbG9iYWxTZWxlY3Rvck9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgLi4uKGxvY2FsT3B0aW9ucyB8fCB7fSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgfSk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNsb25lRGVmYXVsdHMoZGVmYXVsdHM6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdmFsdWUgPSB7fTtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWZhdWx0cykpIHtcclxuICAgICAgdmFsdWUgPSBkZWZhdWx0cy5zbGljZSgpO1xyXG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkZWZhdWx0cykpIHtcclxuICAgICAgdmFsdWUgPSB7IC4uLmRlZmF1bHRzIH07XHJcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFsdWUgPSB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gZGVmYXVsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tTdGF0ZXNBcmVWYWxpZChzdGF0ZUNsYXNzZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdKTogdm9pZCB7XHJcbiAgICBzdGF0ZUNsYXNzZXMuZm9yRWFjaChTdG9yZVZhbGlkYXRvcnMuZ2V0VmFsaWRTdGF0ZU1ldGEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBJJ20gdXNpbmcgbm9uLW51bGwgYXNzZXJ0aW9uIGhlcmUgc2luY2UgYF9hY3Rpb25zU3Vic2NyaXRpb25gIHdpbGxcclxuICAgIC8vIGJlIDEwMCUgZGVmaW5lZC4gVGhpcyBpcyBiZWNhdXNlIGBuZ09uRGVzdHJveSgpYCBjYW5ub3QgYmUgaW52b2tlZFxyXG4gICAgLy8gb24gdGhlIGBTdGF0ZUZhY3RvcnlgIHVudGlsIGl0cyBpbml0aWFsaXplZCA6KSBBbiBpdCdzIGluaXRpYWxpemVkXHJcbiAgICAvLyBmb3IgdGhlIGZpcnN0IHRpbWUgYWxvbmcgd2l0aCB0aGUgYE5neHNSb290TW9kdWxlYC5cclxuICAgIHRoaXMuX2FjdGlvbnNTdWJzY3JpcHRpb24hLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBuZXcgc3RhdGUgdG8gdGhlIGdsb2JhbCBkZWZzLlxyXG4gICAqL1xyXG4gIGFkZChzdGF0ZUNsYXNzZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdKTogTWFwcGVkU3RvcmVbXSB7XHJcbiAgICBTdGF0ZUZhY3RvcnkuY2hlY2tTdGF0ZXNBcmVWYWxpZChzdGF0ZUNsYXNzZXMpO1xyXG4gICAgY29uc3QgeyBuZXdTdGF0ZXMgfSA9IHRoaXMuYWRkVG9TdGF0ZXNNYXAoc3RhdGVDbGFzc2VzKTtcclxuICAgIGlmICghbmV3U3RhdGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlR3JhcGg6IFN0YXRlS2V5R3JhcGggPSBidWlsZEdyYXBoKG5ld1N0YXRlcyk7XHJcbiAgICBjb25zdCBzb3J0ZWRTdGF0ZXM6IHN0cmluZ1tdID0gdG9wb2xvZ2ljYWxTb3J0KHN0YXRlR3JhcGgpO1xyXG4gICAgY29uc3QgcGF0aHM6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiA9IGZpbmRGdWxsUGFyZW50UGF0aChzdGF0ZUdyYXBoKTtcclxuICAgIGNvbnN0IG5hbWVHcmFwaDogUGxhaW5PYmplY3RPZjxTdGF0ZUNsYXNzSW50ZXJuYWw+ID0gbmFtZVRvU3RhdGUobmV3U3RhdGVzKTtcclxuICAgIGNvbnN0IGJvb3RzdHJhcHBlZFN0b3JlczogTWFwcGVkU3RvcmVbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBzb3J0ZWRTdGF0ZXMpIHtcclxuICAgICAgY29uc3Qgc3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsID0gbmFtZUdyYXBoW25hbWVdO1xyXG4gICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSBwYXRoc1tuYW1lXTtcclxuICAgICAgY29uc3QgbWV0YTogTWV0YURhdGFNb2RlbCA9IHN0YXRlQ2xhc3NbTUVUQV9LRVldITtcclxuXHJcbiAgICAgIHRoaXMuYWRkUnVudGltZUluZm9Ub01ldGEobWV0YSwgcGF0aCk7XHJcblxyXG4gICAgICBjb25zdCBzdGF0ZU1hcDogTWFwcGVkU3RvcmUgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwYXRoLFxyXG4gICAgICAgIGlzSW5pdGlhbGlzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGFjdGlvbnM6IG1ldGEuYWN0aW9ucyxcclxuICAgICAgICBpbnN0YW5jZTogdGhpcy5faW5qZWN0b3IuZ2V0KHN0YXRlQ2xhc3MpLFxyXG4gICAgICAgIGRlZmF1bHRzOiBTdGF0ZUZhY3RvcnkuY2xvbmVEZWZhdWx0cyhtZXRhLmRlZmF1bHRzKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gZW5zdXJlIG91ciBzdG9yZSBoYXNuJ3QgYWxyZWFkeSBiZWVuIGFkZGVkXHJcbiAgICAgIC8vIGJ1dCBkb24ndCB0aHJvdyBzaW5jZSBpdCBjb3VsZCBiZSBsYXp5XHJcbiAgICAgIC8vIGxvYWRlZCBmcm9tIGRpZmZlcmVudCBwYXRoc1xyXG4gICAgICBpZiAoIXRoaXMuaGFzQmVlbk1vdW50ZWRBbmRCb290c3RyYXBwZWQobmFtZSwgcGF0aCkpIHtcclxuICAgICAgICBib290c3RyYXBwZWRTdG9yZXMucHVzaChzdGF0ZU1hcCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RhdGVzLnB1c2goc3RhdGVNYXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib290c3RyYXBwZWRTdG9yZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBzZXQgb2Ygc3RhdGVzIHRvIHRoZSBzdG9yZSBhbmQgcmV0dXJuIHRoZSBkZWZhdWx0c1xyXG4gICAqL1xyXG4gIGFkZEFuZFJldHVybkRlZmF1bHRzKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiBTdGF0ZXNBbmREZWZhdWx0cyB7XHJcbiAgICBjb25zdCBjbGFzc2VzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSA9IHN0YXRlQ2xhc3NlcyB8fCBbXTtcclxuXHJcbiAgICBjb25zdCBtYXBwZWRTdG9yZXM6IE1hcHBlZFN0b3JlW10gPSB0aGlzLmFkZChjbGFzc2VzKTtcclxuICAgIGNvbnN0IGRlZmF1bHRzID0gbWFwcGVkU3RvcmVzLnJlZHVjZShcclxuICAgICAgKHJlc3VsdDogYW55LCBtYXBwZWRTdG9yZTogTWFwcGVkU3RvcmUpID0+XHJcbiAgICAgICAgc2V0VmFsdWUocmVzdWx0LCBtYXBwZWRTdG9yZS5wYXRoLCBtYXBwZWRTdG9yZS5kZWZhdWx0cyksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgZGVmYXVsdHMsIHN0YXRlczogbWFwcGVkU3RvcmVzIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRoZSBhY3Rpb25zIHRvIHRoZSBoYW5kbGVyc1xyXG4gICAqL1xyXG4gIGNvbm5lY3RBY3Rpb25IYW5kbGVycygpIHtcclxuICAgIGlmICh0aGlzLl9hY3Rpb25zU3Vic2NyaXB0aW9uICE9PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLl9hY3Rpb25zU3Vic2NyaXB0aW9uID0gdGhpcy5fYWN0aW9uc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKGN0eDogQWN0aW9uQ29udGV4dCkgPT4gY3R4LnN0YXR1cyA9PT0gQWN0aW9uU3RhdHVzLkRpc3BhdGNoZWQpLFxyXG4gICAgICAgIG1lcmdlTWFwKCh7IGFjdGlvbiB9KSA9PlxyXG4gICAgICAgICAgdGhpcy5pbnZva2VBY3Rpb25zKHRoaXMuX2FjdGlvbnMsIGFjdGlvbiEpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoKSA9PiA8QWN0aW9uQ29udGV4dD57IGFjdGlvbiwgc3RhdHVzOiBBY3Rpb25TdGF0dXMuU3VjY2Vzc2Z1bCB9KSxcclxuICAgICAgICAgICAgZGVmYXVsdElmRW1wdHkoPEFjdGlvbkNvbnRleHQ+eyBhY3Rpb24sIHN0YXR1czogQWN0aW9uU3RhdHVzLkNhbmNlbGVkIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XHJcbiAgICAgICAgICAgICAgb2YoPEFjdGlvbkNvbnRleHQ+eyBhY3Rpb24sIHN0YXR1czogQWN0aW9uU3RhdHVzLkVycm9yZWQsIGVycm9yIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShjdHggPT4gdGhpcy5fYWN0aW9uUmVzdWx0cy5uZXh0KGN0eCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW52b2tlIGFjdGlvbnMgb24gdGhlIHN0YXRlcy5cclxuICAgKi9cclxuICBpbnZva2VBY3Rpb25zKGFjdGlvbnMkOiBJbnRlcm5hbEFjdGlvbnMsIGFjdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCB0eXBlID0gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZShhY3Rpb24pITtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG1ldGFkYXRhIG9mIHRoaXMuc3RhdGVzKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbk1ldGFzID0gbWV0YWRhdGEuYWN0aW9uc1t0eXBlXTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb25NZXRhcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgYWN0aW9uTWV0YSBvZiBhY3Rpb25NZXRhcykge1xyXG4gICAgICAgICAgY29uc3Qgc3RhdGVDb250ZXh0ID0gdGhpcy5fc3RhdGVDb250ZXh0RmFjdG9yeS5jcmVhdGVTdGF0ZUNvbnRleHQobWV0YWRhdGEpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1ldGFkYXRhLmluc3RhbmNlW2FjdGlvbk1ldGEuZm5dKHN0YXRlQ29udGV4dCwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gZnJvbShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICAgICAgICAgIC8vIElmIHRoaXMgb2JzZXJ2YWJsZSBoYXMgYmVlbiBjb21wbGV0ZWQgdy9vIGVtaXR0aW5nXHJcbiAgICAgICAgICAgICAgLy8gYW55IHZhbHVlIHRoZW4gd2Ugd291bGRuJ3Qgd2FudCB0byBjb21wbGV0ZSB0aGUgd2hvbGUgY2hhaW5cclxuICAgICAgICAgICAgICAvLyBvZiBhY3Rpb25zLiBTaW5jZSBpZiBhbnkgb2JzZXJ2YWJsZSBjb21wbGV0ZXMgdGhlblxyXG4gICAgICAgICAgICAgIC8vIGFjdGlvbiB3aWxsIGJlIGNhbmNlbGVkLlxyXG4gICAgICAgICAgICAgIC8vIEZvciBpbnN0YW5jZSBpZiBhbnkgYWN0aW9uIGhhbmRsZXIgd291bGQndmUgaGFkIHN1Y2ggc3RhdGVtZW50OlxyXG4gICAgICAgICAgICAgIC8vIGBoYW5kbGVyKGN0eCkgeyByZXR1cm4gRU1QVFk7IH1gXHJcbiAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgYWN0aW9uIHdpbGwgYmUgY2FuY2VsZWQuXHJcbiAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL2lzc3Vlcy8xNTY4XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnBpcGUoZGVmYXVsdElmRW1wdHkoe30pKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbk1ldGEub3B0aW9ucy5jYW5jZWxVbmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogb2ZBY3Rpb25EaXNwYXRjaGVkIHNob3VsZCBiZSB1c2VkIHdpdGggYWN0aW9uIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGlwZShcclxuICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKGFjdGlvbnMkLnBpcGUob2ZBY3Rpb25EaXNwYXRjaGVkKGFjdGlvbiBhcyBhbnkpKSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IG9mKHt9KS5waXBlKHNoYXJlUmVwbGF5KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRocm93RXJyb3IoZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgcmVzdWx0cy5wdXNoKG9mKHt9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvcmtKb2luKHJlc3VsdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb1N0YXRlc01hcChcclxuICAgIHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW11cclxuICApOiB7IG5ld1N0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW10gfSB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdID0gW107XHJcbiAgICBjb25zdCBzdGF0ZXNNYXA6IFN0YXRlc0J5TmFtZSA9IHRoaXMuc3RhdGVzQnlOYW1lO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RhdGVDbGFzcyBvZiBzdGF0ZUNsYXNzZXMpIHtcclxuICAgICAgY29uc3Qgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdG9yZVZhbGlkYXRvcnMuY2hlY2tTdGF0ZU5hbWVJc1VuaXF1ZShzdGF0ZUNsYXNzLCBzdGF0ZXNNYXApO1xyXG4gICAgICBjb25zdCB1bm1vdW50ZWRTdGF0ZSA9ICFzdGF0ZXNNYXBbc3RhdGVOYW1lXTtcclxuICAgICAgaWYgKHVubW91bnRlZFN0YXRlKSB7XHJcbiAgICAgICAgbmV3U3RhdGVzLnB1c2goc3RhdGVDbGFzcyk7XHJcbiAgICAgICAgc3RhdGVzTWFwW3N0YXRlTmFtZV0gPSBzdGF0ZUNsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbmV3U3RhdGVzIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFJ1bnRpbWVJbmZvVG9NZXRhKG1ldGE6IE1ldGFEYXRhTW9kZWwsIHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZVBhdGhzW21ldGEubmFtZSFdID0gcGF0aDtcclxuICAgIC8vIFRPRE86IHY0IC0gd2UgcGxhbiB0byBnZXQgcmlkIG9mIHRoZSBwYXRoIHByb3BlcnR5IGJlY2F1c2UgaXQgaXMgbm9uLWRldGVybWluaXN0aWNcclxuICAgIC8vIHdlIGNhbiBkbyB0aGlzIHdoZW4gd2UgZ2V0IHJpZCBvZiB0aGUgaW5jb3JyZWN0bHkgZXhwb3NlZCBnZXRTdG9yZU1ldGFkYXRhXHJcbiAgICAvLyBXZSB3aWxsIG5lZWQgdG8gY29tZSB1cCB3aXRoIGFuIGFsdGVybmF0aXZlIGluIHY0IGJlY2F1c2UgdGhpcyBpcyB1c2VkIGJ5IG1hbnkgcGx1Z2luc1xyXG4gICAgbWV0YS5wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIHRoZSBtZXRob2QgY2hlY2tzIGlmIHRoZSBzdGF0ZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSB0cmVlXHJcbiAgICogYW5kIGNvbXBsZXRlZCB0aGUgbGlmZSBjeWNsZVxyXG4gICAqIEBwYXJhbSBuYW1lXHJcbiAgICogQHBhcmFtIHBhdGhcclxuICAgKi9cclxuICBwcml2YXRlIGhhc0JlZW5Nb3VudGVkQW5kQm9vdHN0cmFwcGVkKG5hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZUlzQm9vdHN0cmFwcGVkSW5Jbml0aWFsU3RhdGU6IGJvb2xlYW4gPVxyXG4gICAgICBnZXRWYWx1ZSh0aGlzLl9pbml0aWFsU3RhdGUsIHBhdGgpICE9PSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXNCeU5hbWVbbmFtZV0gJiYgdmFsdWVJc0Jvb3RzdHJhcHBlZEluSW5pdGlhbFN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=