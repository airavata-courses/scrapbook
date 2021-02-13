/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StateFactory {
    /**
     * @param {?} _injector
     * @param {?} _config
     * @param {?} _parentFactory
     * @param {?} _actions
     * @param {?} _actionResults
     * @param {?} _stateContextFactory
     * @param {?} _initialState
     */
    constructor(_injector, _config, _parentFactory, _actions, _actionResults, _stateContextFactory, _initialState) {
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
        () => {
            /** @type {?} */
            const stateFactory = this;
            /**
             * @param {?} key
             * @return {?}
             */
            function resolveGetter(key) {
                /** @type {?} */
                const path = stateFactory.statePaths[key];
                return path ? propGetter(path.split('.'), stateFactory._config) : null;
            }
            /** @type {?} */
            const context = this._parentFactory
                ? this._parentFactory.getRuntimeSelectorContext()
                : {
                    /**
                     * @param {?} key
                     * @return {?}
                     */
                    getStateGetter(key) {
                        /** @type {?} */
                        let getter = resolveGetter(key);
                        if (getter) {
                            return getter;
                        }
                        return (/**
                         * @param {...?} args
                         * @return {?}
                         */
                        (...args) => {
                            // Late loaded getter
                            if (!getter) {
                                getter = resolveGetter(key);
                            }
                            return getter ? getter(...args) : undefined;
                        });
                    },
                    /**
                     * @param {?=} localOptions
                     * @return {?}
                     */
                    getSelectorOptions(localOptions) {
                        /** @type {?} */
                        const globalSelectorOptions = stateFactory._config.selectorOptions;
                        return Object.assign({}, globalSelectorOptions, (localOptions || {}));
                    }
                };
            return context;
        }));
    }
    /**
     * @return {?}
     */
    get states() {
        return this._parentFactory ? this._parentFactory.states : this._states;
    }
    /**
     * @return {?}
     */
    get statesByName() {
        return this._parentFactory ? this._parentFactory.statesByName : this._statesByName;
    }
    /**
     * @private
     * @return {?}
     */
    get statePaths() {
        return this._parentFactory ? this._parentFactory.statePaths : this._statePaths;
    }
    /**
     * @private
     * @param {?} defaults
     * @return {?}
     */
    static cloneDefaults(defaults) {
        /** @type {?} */
        let value = {};
        if (Array.isArray(defaults)) {
            value = defaults.slice();
        }
        else if (isObject(defaults)) {
            value = Object.assign({}, defaults);
        }
        else if (defaults === undefined) {
            value = {};
        }
        else {
            value = defaults;
        }
        return value;
    }
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    static checkStatesAreValid(stateClasses) {
        stateClasses.forEach(StoreValidators.getValidStateMeta);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // I'm using non-null assertion here since `_actionsSubscrition` will
        // be 100% defined. This is because `ngOnDestroy()` cannot be invoked
        // on the `StateFactory` until its initialized :) An it's initialized
        // for the first time along with the `NgxsRootModule`.
        (/** @type {?} */ (this._actionsSubscription)).unsubscribe();
    }
    /**
     * Add a new state to the global defs.
     * @param {?} stateClasses
     * @return {?}
     */
    add(stateClasses) {
        StateFactory.checkStatesAreValid(stateClasses);
        const { newStates } = this.addToStatesMap(stateClasses);
        if (!newStates.length)
            return [];
        /** @type {?} */
        const stateGraph = buildGraph(newStates);
        /** @type {?} */
        const sortedStates = topologicalSort(stateGraph);
        /** @type {?} */
        const paths = findFullParentPath(stateGraph);
        /** @type {?} */
        const nameGraph = nameToState(newStates);
        /** @type {?} */
        const bootstrappedStores = [];
        for (const name of sortedStates) {
            /** @type {?} */
            const stateClass = nameGraph[name];
            /** @type {?} */
            const path = paths[name];
            /** @type {?} */
            const meta = (/** @type {?} */ (stateClass[META_KEY]));
            this.addRuntimeInfoToMeta(meta, path);
            /** @type {?} */
            const stateMap = {
                name,
                path,
                isInitialised: false,
                actions: meta.actions,
                instance: this._injector.get(stateClass),
                defaults: StateFactory.cloneDefaults(meta.defaults)
            };
            // ensure our store hasn't already been added
            // but don't throw since it could be lazy
            // loaded from different paths
            if (!this.hasBeenMountedAndBootstrapped(name, path)) {
                bootstrappedStores.push(stateMap);
            }
            this.states.push(stateMap);
        }
        return bootstrappedStores;
    }
    /**
     * Add a set of states to the store and return the defaults
     * @param {?} stateClasses
     * @return {?}
     */
    addAndReturnDefaults(stateClasses) {
        /** @type {?} */
        const classes = stateClasses || [];
        /** @type {?} */
        const mappedStores = this.add(classes);
        /** @type {?} */
        const defaults = mappedStores.reduce((/**
         * @param {?} result
         * @param {?} mappedStore
         * @return {?}
         */
        (result, mappedStore) => setValue(result, mappedStore.path, mappedStore.defaults)), {});
        return { defaults, states: mappedStores };
    }
    /**
     * Bind the actions to the handlers
     * @return {?}
     */
    connectActionHandlers() {
        if (this._actionsSubscription !== null)
            return;
        this._actionsSubscription = this._actions
            .pipe(filter((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => ctx.status === "DISPATCHED" /* Dispatched */)), mergeMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ action }) => this.invokeActions(this._actions, (/** @type {?} */ (action))).pipe(map((/**
         * @return {?}
         */
        () => (/** @type {?} */ ({ action, status: "SUCCESSFUL" /* Successful */ })))), defaultIfEmpty((/** @type {?} */ ({ action, status: "CANCELED" /* Canceled */ }))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of((/** @type {?} */ ({ action, status: "ERRORED" /* Errored */, error })))))))))
            .subscribe((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => this._actionResults.next(ctx)));
    }
    /**
     * Invoke actions on the states.
     * @param {?} actions$
     * @param {?} action
     * @return {?}
     */
    invokeActions(actions$, action) {
        /** @type {?} */
        const type = (/** @type {?} */ (getActionTypeFromInstance(action)));
        /** @type {?} */
        const results = [];
        for (const metadata of this.states) {
            /** @type {?} */
            const actionMetas = metadata.actions[type];
            if (actionMetas) {
                for (const actionMeta of actionMetas) {
                    /** @type {?} */
                    const stateContext = this._stateContextFactory.createStateContext(metadata);
                    try {
                        /** @type {?} */
                        let result = metadata.instance[actionMeta.fn](stateContext, action);
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
        }
        if (!results.length) {
            results.push(of({}));
        }
        return forkJoin(results);
    }
    /**
     * @private
     * @param {?} stateClasses
     * @return {?}
     */
    addToStatesMap(stateClasses) {
        /** @type {?} */
        const newStates = [];
        /** @type {?} */
        const statesMap = this.statesByName;
        for (const stateClass of stateClasses) {
            /** @type {?} */
            const stateName = StoreValidators.checkStateNameIsUnique(stateClass, statesMap);
            /** @type {?} */
            const unmountedState = !statesMap[stateName];
            if (unmountedState) {
                newStates.push(stateClass);
                statesMap[stateName] = stateClass;
            }
        }
        return { newStates };
    }
    /**
     * @private
     * @param {?} meta
     * @param {?} path
     * @return {?}
     */
    addRuntimeInfoToMeta(meta, path) {
        this.statePaths[(/** @type {?} */ (meta.name))] = path;
        // TODO: v4 - we plan to get rid of the path property because it is non-deterministic
        // we can do this when we get rid of the incorrectly exposed getStoreMetadata
        // We will need to come up with an alternative in v4 because this is used by many plugins
        meta.path = path;
    }
    /**
     * \@description
     * the method checks if the state has already been added to the tree
     * and completed the life cycle
     * @private
     * @param {?} name
     * @param {?} path
     * @return {?}
     */
    hasBeenMountedAndBootstrapped(name, path) {
        /** @type {?} */
        const valueIsBootstrappedInInitialState = getValue(this._initialState, path) !== undefined;
        return this.statesByName[name] && valueIsBootstrappedInInitialState;
    }
}
StateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateFactory.ctorParameters = () => [
    { type: Injector },
    { type: NgxsConfig },
    { type: StateFactory, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: InternalActions },
    { type: InternalDispatchedActionResults },
    { type: StateContextFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_STATE_TOKEN,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL3N0YXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQ0wsVUFBVSxFQUNWLGNBQWMsRUFDZCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxFQUNMLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUdSLFdBQVcsRUFDWCxVQUFVLEVBS1YsZUFBZSxFQUdoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBK0IsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBaUIsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7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QUksQ0FBQyxLQUFLLFNBQVM7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFpQyxDQUFDO0lBQ3RFLENBQUM7OztZQS9RRixVQUFVOzs7O1lBekNVLFFBQVE7WUFZVixVQUFVO1lBc0NELFlBQVksdUJBRm5DLFFBQVEsWUFDUixRQUFRO1lBbEJ5QixlQUFlO1lBQzVDLCtCQUErQjtZQUMvQixtQkFBbUI7NENBcUJ2QixRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjs7Ozs7OztJQVo3Qiw0Q0FBeUQ7Ozs7O0lBZ0J6RCwrQkFBb0M7Ozs7O0lBTXBDLHFDQUF5Qzs7Ozs7SUFNekMsbUNBQWdEOztJQU1oRCxpREFpQ0c7Ozs7O0lBaEVELGlDQUEyQjs7Ozs7SUFDM0IsK0JBQTJCOzs7OztJQUMzQixzQ0FFb0M7Ozs7O0lBQ3BDLGdDQUFpQzs7Ozs7SUFDakMsc0NBQXVEOzs7OztJQUN2RCw0Q0FBaUQ7Ozs7O0lBQ2pELHFDQUUwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCwgU2tpcFNlbGYsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBmcm9tLCBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgY2F0Y2hFcnJvcixcclxuICBkZWZhdWx0SWZFbXB0eSxcclxuICBmaWx0ZXIsXHJcbiAgbWFwLFxyXG4gIG1lcmdlTWFwLFxyXG4gIHNoYXJlUmVwbGF5LFxyXG4gIHRha2VVbnRpbFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE1FVEFfS0VZLCBOZ3hzQ29uZmlnIH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcbmltcG9ydCB7XHJcbiAgYnVpbGRHcmFwaCxcclxuICBmaW5kRnVsbFBhcmVudFBhdGgsXHJcbiAgaXNPYmplY3QsXHJcbiAgTWFwcGVkU3RvcmUsXHJcbiAgTWV0YURhdGFNb2RlbCxcclxuICBuYW1lVG9TdGF0ZSxcclxuICBwcm9wR2V0dGVyLFxyXG4gIFN0YXRlQ2xhc3NJbnRlcm5hbCxcclxuICBTdGF0ZUtleUdyYXBoLFxyXG4gIFN0YXRlc0FuZERlZmF1bHRzLFxyXG4gIFN0YXRlc0J5TmFtZSxcclxuICB0b3BvbG9naWNhbFNvcnQsXHJcbiAgUnVudGltZVNlbGVjdG9yQ29udGV4dCxcclxuICBTaGFyZWRTZWxlY3Rvck9wdGlvbnNcclxufSBmcm9tICcuL2ludGVybmFscyc7XHJcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UsIGdldFZhbHVlLCBzZXRWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgb2ZBY3Rpb25EaXNwYXRjaGVkIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29mLWFjdGlvbic7XHJcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQsIEFjdGlvblN0YXR1cywgSW50ZXJuYWxBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy1zdHJlYW0nO1xyXG5pbXBvcnQgeyBJbnRlcm5hbERpc3BhdGNoZWRBY3Rpb25SZXN1bHRzIH0gZnJvbSAnLi4vaW50ZXJuYWwvZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dEZhY3RvcnkgfSBmcm9tICcuLi9pbnRlcm5hbC9zdGF0ZS1jb250ZXh0LWZhY3RvcnknO1xyXG5pbXBvcnQgeyBTdG9yZVZhbGlkYXRvcnMgfSBmcm9tICcuLi91dGlscy9zdG9yZS12YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgSU5JVElBTF9TVEFURV9UT0tFTiwgUGxhaW5PYmplY3RPZiwgbWVtb2l6ZSB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcblxyXG4vKipcclxuICogU3RhdGUgZmFjdG9yeSBjbGFzc1xyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUZhY3RvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2FjdGlvbnNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2NvbmZpZzogTmd4c0NvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBAU2tpcFNlbGYoKVxyXG4gICAgcHJpdmF0ZSBfcGFyZW50RmFjdG9yeTogU3RhdGVGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogSW50ZXJuYWxBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uUmVzdWx0czogSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyxcclxuICAgIHByaXZhdGUgX3N0YXRlQ29udGV4dEZhY3Rvcnk6IFN0YXRlQ29udGV4dEZhY3RvcnksXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChJTklUSUFMX1NUQVRFX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbFN0YXRlOiBhbnlcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgX3N0YXRlczogTWFwcGVkU3RvcmVbXSA9IFtdO1xyXG5cclxuICBnZXQgc3RhdGVzKCk6IE1hcHBlZFN0b3JlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZhY3RvcnkgPyB0aGlzLl9wYXJlbnRGYWN0b3J5LnN0YXRlcyA6IHRoaXMuX3N0YXRlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXRlc0J5TmFtZTogU3RhdGVzQnlOYW1lID0ge307XHJcblxyXG4gIGdldCBzdGF0ZXNCeU5hbWUoKTogU3RhdGVzQnlOYW1lIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGYWN0b3J5ID8gdGhpcy5fcGFyZW50RmFjdG9yeS5zdGF0ZXNCeU5hbWUgOiB0aGlzLl9zdGF0ZXNCeU5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGF0ZVBhdGhzOiBQbGFpbk9iamVjdE9mPHN0cmluZz4gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgc3RhdGVQYXRocygpOiBQbGFpbk9iamVjdE9mPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZhY3RvcnkgPyB0aGlzLl9wYXJlbnRGYWN0b3J5LnN0YXRlUGF0aHMgOiB0aGlzLl9zdGF0ZVBhdGhzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UnVudGltZVNlbGVjdG9yQ29udGV4dCA9IG1lbW9pemUoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiByZXNvbHZlR2V0dGVyKGtleTogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBzdGF0ZUZhY3Rvcnkuc3RhdGVQYXRoc1trZXldO1xyXG4gICAgICByZXR1cm4gcGF0aCA/IHByb3BHZXR0ZXIocGF0aC5zcGxpdCgnLicpLCBzdGF0ZUZhY3RvcnkuX2NvbmZpZykgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHQgPSB0aGlzLl9wYXJlbnRGYWN0b3J5XHJcbiAgICAgID8gdGhpcy5fcGFyZW50RmFjdG9yeS5nZXRSdW50aW1lU2VsZWN0b3JDb250ZXh0KClcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBnZXRTdGF0ZUdldHRlcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgZ2V0dGVyID0gcmVzb2x2ZUdldHRlcihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoZ2V0dGVyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAvLyBMYXRlIGxvYWRlZCBnZXR0ZXJcclxuICAgICAgICAgICAgICBpZiAoIWdldHRlcikge1xyXG4gICAgICAgICAgICAgICAgZ2V0dGVyID0gcmVzb2x2ZUdldHRlcihrZXkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVyID8gZ2V0dGVyKC4uLmFyZ3MpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdldFNlbGVjdG9yT3B0aW9ucyhsb2NhbE9wdGlvbnM/OiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2xvYmFsU2VsZWN0b3JPcHRpb25zID0gc3RhdGVGYWN0b3J5Ll9jb25maWcuc2VsZWN0b3JPcHRpb25zO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmdsb2JhbFNlbGVjdG9yT3B0aW9ucyxcclxuICAgICAgICAgICAgICAuLi4obG9jYWxPcHRpb25zIHx8IHt9KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY2xvbmVEZWZhdWx0cyhkZWZhdWx0czogYW55KTogYW55IHtcclxuICAgIGxldCB2YWx1ZSA9IHt9O1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHRzKSkge1xyXG4gICAgICB2YWx1ZSA9IGRlZmF1bHRzLnNsaWNlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRlZmF1bHRzKSkge1xyXG4gICAgICB2YWx1ZSA9IHsgLi4uZGVmYXVsdHMgfTtcclxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YWx1ZSA9IHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWUgPSBkZWZhdWx0cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjaGVja1N0YXRlc0FyZVZhbGlkKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiB2b2lkIHtcclxuICAgIHN0YXRlQ2xhc3Nlcy5mb3JFYWNoKFN0b3JlVmFsaWRhdG9ycy5nZXRWYWxpZFN0YXRlTWV0YSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIEknbSB1c2luZyBub24tbnVsbCBhc3NlcnRpb24gaGVyZSBzaW5jZSBgX2FjdGlvbnNTdWJzY3JpdGlvbmAgd2lsbFxyXG4gICAgLy8gYmUgMTAwJSBkZWZpbmVkLiBUaGlzIGlzIGJlY2F1c2UgYG5nT25EZXN0cm95KClgIGNhbm5vdCBiZSBpbnZva2VkXHJcbiAgICAvLyBvbiB0aGUgYFN0YXRlRmFjdG9yeWAgdW50aWwgaXRzIGluaXRpYWxpemVkIDopIEFuIGl0J3MgaW5pdGlhbGl6ZWRcclxuICAgIC8vIGZvciB0aGUgZmlyc3QgdGltZSBhbG9uZyB3aXRoIHRoZSBgTmd4c1Jvb3RNb2R1bGVgLlxyXG4gICAgdGhpcy5fYWN0aW9uc1N1YnNjcmlwdGlvbiEudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIG5ldyBzdGF0ZSB0byB0aGUgZ2xvYmFsIGRlZnMuXHJcbiAgICovXHJcbiAgYWRkKHN0YXRlQ2xhc3NlczogU3RhdGVDbGFzc0ludGVybmFsW10pOiBNYXBwZWRTdG9yZVtdIHtcclxuICAgIFN0YXRlRmFjdG9yeS5jaGVja1N0YXRlc0FyZVZhbGlkKHN0YXRlQ2xhc3Nlcyk7XHJcbiAgICBjb25zdCB7IG5ld1N0YXRlcyB9ID0gdGhpcy5hZGRUb1N0YXRlc01hcChzdGF0ZUNsYXNzZXMpO1xyXG4gICAgaWYgKCFuZXdTdGF0ZXMubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3Qgc3RhdGVHcmFwaDogU3RhdGVLZXlHcmFwaCA9IGJ1aWxkR3JhcGgobmV3U3RhdGVzKTtcclxuICAgIGNvbnN0IHNvcnRlZFN0YXRlczogc3RyaW5nW10gPSB0b3BvbG9naWNhbFNvcnQoc3RhdGVHcmFwaCk7XHJcbiAgICBjb25zdCBwYXRoczogUGxhaW5PYmplY3RPZjxzdHJpbmc+ID0gZmluZEZ1bGxQYXJlbnRQYXRoKHN0YXRlR3JhcGgpO1xyXG4gICAgY29uc3QgbmFtZUdyYXBoOiBQbGFpbk9iamVjdE9mPFN0YXRlQ2xhc3NJbnRlcm5hbD4gPSBuYW1lVG9TdGF0ZShuZXdTdGF0ZXMpO1xyXG4gICAgY29uc3QgYm9vdHN0cmFwcGVkU3RvcmVzOiBNYXBwZWRTdG9yZVtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHNvcnRlZFN0YXRlcykge1xyXG4gICAgICBjb25zdCBzdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwgPSBuYW1lR3JhcGhbbmFtZV07XHJcbiAgICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IHBhdGhzW25hbWVdO1xyXG4gICAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gc3RhdGVDbGFzc1tNRVRBX0tFWV0hO1xyXG5cclxuICAgICAgdGhpcy5hZGRSdW50aW1lSW5mb1RvTWV0YShtZXRhLCBwYXRoKTtcclxuXHJcbiAgICAgIGNvbnN0IHN0YXRlTWFwOiBNYXBwZWRTdG9yZSA9IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHBhdGgsXHJcbiAgICAgICAgaXNJbml0aWFsaXNlZDogZmFsc2UsXHJcbiAgICAgICAgYWN0aW9uczogbWV0YS5hY3Rpb25zLFxyXG4gICAgICAgIGluc3RhbmNlOiB0aGlzLl9pbmplY3Rvci5nZXQoc3RhdGVDbGFzcyksXHJcbiAgICAgICAgZGVmYXVsdHM6IFN0YXRlRmFjdG9yeS5jbG9uZURlZmF1bHRzKG1ldGEuZGVmYXVsdHMpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBlbnN1cmUgb3VyIHN0b3JlIGhhc24ndCBhbHJlYWR5IGJlZW4gYWRkZWRcclxuICAgICAgLy8gYnV0IGRvbid0IHRocm93IHNpbmNlIGl0IGNvdWxkIGJlIGxhenlcclxuICAgICAgLy8gbG9hZGVkIGZyb20gZGlmZmVyZW50IHBhdGhzXHJcbiAgICAgIGlmICghdGhpcy5oYXNCZWVuTW91bnRlZEFuZEJvb3RzdHJhcHBlZChuYW1lLCBwYXRoKSkge1xyXG4gICAgICAgIGJvb3RzdHJhcHBlZFN0b3Jlcy5wdXNoKHN0YXRlTWFwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZU1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvb3RzdHJhcHBlZFN0b3JlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIHNldCBvZiBzdGF0ZXMgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gdGhlIGRlZmF1bHRzXHJcbiAgICovXHJcbiAgYWRkQW5kUmV0dXJuRGVmYXVsdHMoc3RhdGVDbGFzc2VzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSk6IFN0YXRlc0FuZERlZmF1bHRzIHtcclxuICAgIGNvbnN0IGNsYXNzZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdID0gc3RhdGVDbGFzc2VzIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IG1hcHBlZFN0b3JlczogTWFwcGVkU3RvcmVbXSA9IHRoaXMuYWRkKGNsYXNzZXMpO1xyXG4gICAgY29uc3QgZGVmYXVsdHMgPSBtYXBwZWRTdG9yZXMucmVkdWNlKFxyXG4gICAgICAocmVzdWx0OiBhbnksIG1hcHBlZFN0b3JlOiBNYXBwZWRTdG9yZSkgPT5cclxuICAgICAgICBzZXRWYWx1ZShyZXN1bHQsIG1hcHBlZFN0b3JlLnBhdGgsIG1hcHBlZFN0b3JlLmRlZmF1bHRzKSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0cywgc3RhdGVzOiBtYXBwZWRTdG9yZXMgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdGhlIGFjdGlvbnMgdG8gdGhlIGhhbmRsZXJzXHJcbiAgICovXHJcbiAgY29ubmVjdEFjdGlvbkhhbmRsZXJzKCkge1xyXG4gICAgaWYgKHRoaXMuX2FjdGlvbnNTdWJzY3JpcHRpb24gIT09IG51bGwpIHJldHVybjtcclxuICAgIHRoaXMuX2FjdGlvbnNTdWJzY3JpcHRpb24gPSB0aGlzLl9hY3Rpb25zXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoY3R4OiBBY3Rpb25Db250ZXh0KSA9PiBjdHguc3RhdHVzID09PSBBY3Rpb25TdGF0dXMuRGlzcGF0Y2hlZCksXHJcbiAgICAgICAgbWVyZ2VNYXAoKHsgYWN0aW9uIH0pID0+XHJcbiAgICAgICAgICB0aGlzLmludm9rZUFjdGlvbnModGhpcy5fYWN0aW9ucywgYWN0aW9uISkucGlwZShcclxuICAgICAgICAgICAgbWFwKCgpID0+IDxBY3Rpb25Db250ZXh0PnsgYWN0aW9uLCBzdGF0dXM6IEFjdGlvblN0YXR1cy5TdWNjZXNzZnVsIH0pLFxyXG4gICAgICAgICAgICBkZWZhdWx0SWZFbXB0eSg8QWN0aW9uQ29udGV4dD57IGFjdGlvbiwgc3RhdHVzOiBBY3Rpb25TdGF0dXMuQ2FuY2VsZWQgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cclxuICAgICAgICAgICAgICBvZig8QWN0aW9uQ29udGV4dD57IGFjdGlvbiwgc3RhdHVzOiBBY3Rpb25TdGF0dXMuRXJyb3JlZCwgZXJyb3IgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGN0eCA9PiB0aGlzLl9hY3Rpb25SZXN1bHRzLm5leHQoY3R4KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnZva2UgYWN0aW9ucyBvbiB0aGUgc3RhdGVzLlxyXG4gICAqL1xyXG4gIGludm9rZUFjdGlvbnMoYWN0aW9ucyQ6IEludGVybmFsQWN0aW9ucywgYWN0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IHR5cGUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGFjdGlvbikhO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbWV0YWRhdGEgb2YgdGhpcy5zdGF0ZXMpIHtcclxuICAgICAgY29uc3QgYWN0aW9uTWV0YXMgPSBtZXRhZGF0YS5hY3Rpb25zW3R5cGVdO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbk1ldGFzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpb25NZXRhIG9mIGFjdGlvbk1ldGFzKSB7XHJcbiAgICAgICAgICBjb25zdCBzdGF0ZUNvbnRleHQgPSB0aGlzLl9zdGF0ZUNvbnRleHRGYWN0b3J5LmNyZWF0ZVN0YXRlQ29udGV4dChtZXRhZGF0YSk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbWV0YWRhdGEuaW5zdGFuY2VbYWN0aW9uTWV0YS5mbl0oc3RhdGVDb250ZXh0LCBhY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSBmcm9tKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhpcyBvYnNlcnZhYmxlIGhhcyBiZWVuIGNvbXBsZXRlZCB3L28gZW1pdHRpbmdcclxuICAgICAgICAgICAgICAvLyBhbnkgdmFsdWUgdGhlbiB3ZSB3b3VsZG4ndCB3YW50IHRvIGNvbXBsZXRlIHRoZSB3aG9sZSBjaGFpblxyXG4gICAgICAgICAgICAgIC8vIG9mIGFjdGlvbnMuIFNpbmNlIGlmIGFueSBvYnNlcnZhYmxlIGNvbXBsZXRlcyB0aGVuXHJcbiAgICAgICAgICAgICAgLy8gYWN0aW9uIHdpbGwgYmUgY2FuY2VsZWQuXHJcbiAgICAgICAgICAgICAgLy8gRm9yIGluc3RhbmNlIGlmIGFueSBhY3Rpb24gaGFuZGxlciB3b3VsZCd2ZSBoYWQgc3VjaCBzdGF0ZW1lbnQ6XHJcbiAgICAgICAgICAgICAgLy8gYGhhbmRsZXIoY3R4KSB7IHJldHVybiBFTVBUWTsgfWBcclxuICAgICAgICAgICAgICAvLyB0aGVuIHRoZSBhY3Rpb24gd2lsbCBiZSBjYW5jZWxlZC5cclxuICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25neHMvc3RvcmUvaXNzdWVzLzE1NjhcclxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGlwZShkZWZhdWx0SWZFbXB0eSh7fSkpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWN0aW9uTWV0YS5vcHRpb25zLmNhbmNlbFVuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBvZkFjdGlvbkRpc3BhdGNoZWQgc2hvdWxkIGJlIHVzZWQgd2l0aCBhY3Rpb24gY2xhc3NcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5waXBlKFxyXG4gICAgICAgICAgICAgICAgICB0YWtlVW50aWwoYWN0aW9ucyQucGlwZShvZkFjdGlvbkRpc3BhdGNoZWQoYWN0aW9uIGFzIGFueSkpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gb2Yoe30pLnBpcGUoc2hhcmVSZXBsYXkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhyb3dFcnJvcihlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICByZXN1bHRzLnB1c2gob2Yoe30pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ya0pvaW4ocmVzdWx0cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvU3RhdGVzTWFwKFxyXG4gICAgc3RhdGVDbGFzc2VzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXVxyXG4gICk6IHsgbmV3U3RhdGVzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSB9IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXRlc01hcDogU3RhdGVzQnlOYW1lID0gdGhpcy5zdGF0ZXNCeU5hbWU7XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGF0ZUNsYXNzIG9mIHN0YXRlQ2xhc3Nlcykge1xyXG4gICAgICBjb25zdCBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0b3JlVmFsaWRhdG9ycy5jaGVja1N0YXRlTmFtZUlzVW5pcXVlKHN0YXRlQ2xhc3MsIHN0YXRlc01hcCk7XHJcbiAgICAgIGNvbnN0IHVubW91bnRlZFN0YXRlID0gIXN0YXRlc01hcFtzdGF0ZU5hbWVdO1xyXG4gICAgICBpZiAodW5tb3VudGVkU3RhdGUpIHtcclxuICAgICAgICBuZXdTdGF0ZXMucHVzaChzdGF0ZUNsYXNzKTtcclxuICAgICAgICBzdGF0ZXNNYXBbc3RhdGVOYW1lXSA9IHN0YXRlQ2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBuZXdTdGF0ZXMgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkUnVudGltZUluZm9Ub01ldGEobWV0YTogTWV0YURhdGFNb2RlbCwgcGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlUGF0aHNbbWV0YS5uYW1lIV0gPSBwYXRoO1xyXG4gICAgLy8gVE9ETzogdjQgLSB3ZSBwbGFuIHRvIGdldCByaWQgb2YgdGhlIHBhdGggcHJvcGVydHkgYmVjYXVzZSBpdCBpcyBub24tZGV0ZXJtaW5pc3RpY1xyXG4gICAgLy8gd2UgY2FuIGRvIHRoaXMgd2hlbiB3ZSBnZXQgcmlkIG9mIHRoZSBpbmNvcnJlY3RseSBleHBvc2VkIGdldFN0b3JlTWV0YWRhdGFcclxuICAgIC8vIFdlIHdpbGwgbmVlZCB0byBjb21lIHVwIHdpdGggYW4gYWx0ZXJuYXRpdmUgaW4gdjQgYmVjYXVzZSB0aGlzIGlzIHVzZWQgYnkgbWFueSBwbHVnaW5zXHJcbiAgICBtZXRhLnBhdGggPSBwYXRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogdGhlIG1ldGhvZCBjaGVja3MgaWYgdGhlIHN0YXRlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHRyZWVcclxuICAgKiBhbmQgY29tcGxldGVkIHRoZSBsaWZlIGN5Y2xlXHJcbiAgICogQHBhcmFtIG5hbWVcclxuICAgKiBAcGFyYW0gcGF0aFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFzQmVlbk1vdW50ZWRBbmRCb290c3RyYXBwZWQobmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlSXNCb290c3RyYXBwZWRJbkluaXRpYWxTdGF0ZTogYm9vbGVhbiA9XHJcbiAgICAgIGdldFZhbHVlKHRoaXMuX2luaXRpYWxTdGF0ZSwgcGF0aCkgIT09IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlc0J5TmFtZVtuYW1lXSAmJiB2YWx1ZUlzQm9vdHN0cmFwcGVkSW5Jbml0aWFsU3RhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==