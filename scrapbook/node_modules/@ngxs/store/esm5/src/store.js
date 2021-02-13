/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:unified-signatures
import { Inject, Injectable, Optional } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, map, take } from 'rxjs/operators';
import { INITIAL_STATE_TOKEN } from '@ngxs/store/internals';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
import { InternalStateOperations } from './internal/state-operations';
import { getRootSelectorFactory } from './utils/selector-utils';
import { StateStream } from './internal/state-stream';
import { leaveNgxs } from './operators/leave-ngxs';
import { NgxsConfig } from './symbols';
import { StateFactory } from './internal/state-factory';
var Store = /** @class */ (function () {
    function Store(_stateStream, _internalStateOperations, _config, _internalExecutionStrategy, _stateFactory, initialStateValue) {
        this._stateStream = _stateStream;
        this._internalStateOperations = _internalStateOperations;
        this._config = _config;
        this._internalExecutionStrategy = _internalExecutionStrategy;
        this._stateFactory = _stateFactory;
        this.initStateStream(initialStateValue);
    }
    /**
     * Dispatches event(s).
     */
    /**
     * Dispatches event(s).
     * @param {?} actionOrActions
     * @return {?}
     */
    Store.prototype.dispatch = /**
     * Dispatches event(s).
     * @param {?} actionOrActions
     * @return {?}
     */
    function (actionOrActions) {
        return this._internalStateOperations.getRootStateOperations().dispatch(actionOrActions);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    Store.prototype.select = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        var _this = this;
        /** @type {?} */
        var selectorFn = this.getStoreBoundSelectorFn(selector);
        return this._stateStream.pipe(map(selectorFn), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            // if error is TypeError we swallow it to prevent usual errors with property access
            var suppressErrors = _this._config.selectorOptions.suppressErrors;
            if (err instanceof TypeError && suppressErrors) {
                return of(undefined);
            }
            // rethrow other errors
            return throwError(err);
        })), distinctUntilChanged(), leaveNgxs(this._internalExecutionStrategy));
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    Store.prototype.selectOnce = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return this.select(selector).pipe(take(1));
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    Store.prototype.selectSnapshot = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var selectorFn = this.getStoreBoundSelectorFn(selector);
        return selectorFn(this._stateStream.getValue());
    };
    /**
     * Allow the user to subscribe to the root of the state
     */
    /**
     * Allow the user to subscribe to the root of the state
     * @param {?=} fn
     * @return {?}
     */
    Store.prototype.subscribe = /**
     * Allow the user to subscribe to the root of the state
     * @param {?=} fn
     * @return {?}
     */
    function (fn) {
        return this._stateStream.pipe(leaveNgxs(this._internalExecutionStrategy)).subscribe(fn);
    };
    /**
     * Return the raw value of the state.
     */
    /**
     * Return the raw value of the state.
     * @return {?}
     */
    Store.prototype.snapshot = /**
     * Return the raw value of the state.
     * @return {?}
     */
    function () {
        return this._internalStateOperations.getRootStateOperations().getState();
    };
    /**
     * Reset the state to a specific point in time. This method is useful
     * for plugin's who need to modify the state directly or unit testing.
     */
    /**
     * Reset the state to a specific point in time. This method is useful
     * for plugin's who need to modify the state directly or unit testing.
     * @param {?} state
     * @return {?}
     */
    Store.prototype.reset = /**
     * Reset the state to a specific point in time. This method is useful
     * for plugin's who need to modify the state directly or unit testing.
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return this._internalStateOperations.getRootStateOperations().setState(state);
    };
    /**
     * @private
     * @param {?} selector
     * @return {?}
     */
    Store.prototype.getStoreBoundSelectorFn = /**
     * @private
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var makeSelectorFn = getRootSelectorFactory(selector);
        /** @type {?} */
        var runtimeContext = this._stateFactory.getRuntimeSelectorContext();
        return makeSelectorFn(runtimeContext);
    };
    /**
     * @private
     * @param {?} initialStateValue
     * @return {?}
     */
    Store.prototype.initStateStream = /**
     * @private
     * @param {?} initialStateValue
     * @return {?}
     */
    function (initialStateValue) {
        /** @type {?} */
        var value = this._stateStream.value;
        /** @type {?} */
        var storeIsEmpty = !value || Object.keys(value).length === 0;
        if (storeIsEmpty) {
            /** @type {?} */
            var defaultStateNotEmpty = Object.keys(this._config.defaultsState).length > 0;
            /** @type {?} */
            var storeValues = defaultStateNotEmpty
                ? tslib_1.__assign({}, this._config.defaultsState, initialStateValue) : initialStateValue;
            this._stateStream.next(storeValues);
        }
    };
    Store.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Store.ctorParameters = function () { return [
        { type: StateStream },
        { type: InternalStateOperations },
        { type: NgxsConfig },
        { type: InternalNgxsExecutionStrategy },
        { type: StateFactory },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_STATE_TOKEN,] }] }
    ]; };
    return Store;
}());
export { Store };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Store.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._internalStateOperations;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._config;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._internalExecutionStrategy;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._stateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFjLEVBQUUsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRXpFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQ7SUFFRSxlQUNVLFlBQXlCLEVBQ3pCLHdCQUFpRCxFQUNqRCxPQUFtQixFQUNuQiwwQkFBeUQsRUFDekQsYUFBMkIsRUFHbkMsaUJBQXNCO1FBUGQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQUNqRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBK0I7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFLbkMsSUFBSSxDQUFD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QyxhQUFhLEVBQUssaUJBQWlCLEVBQ3ZELENBQUMsQ0FBQyxpQkFBaUI7WUFFckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOztnQkE3R0YsVUFBVTs7OztnQkFORixXQUFXO2dCQUZYLHVCQUF1QjtnQkFJdkIsVUFBVTtnQkFMViw2QkFBNkI7Z0JBTzdCLFlBQVk7Z0RBVWhCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1COztJQXFHL0IsWUFBQztDQUFBLEFBOUdELElBOEdDO1NBN0dZLEtBQUs7Ozs7OztJQUVkLDZCQUFpQzs7Ozs7SUFDakMseUNBQXlEOzs7OztJQUN6RCx3QkFBMkI7Ozs7O0lBQzNCLDJDQUFpRTs7Ozs7SUFDakUsOEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6dW5pZmllZC1zaWduYXR1cmVzXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJTklUSUFMX1NUQVRFX1RPS0VOLCBQbGFpbk9iamVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcblxyXG5pbXBvcnQgeyBJbnRlcm5hbE5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2ludGVybmFsLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRSb290U2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnLi91dGlscy9zZWxlY3Rvci11dGlscyc7XHJcbmltcG9ydCB7IFN0YXRlU3RyZWFtIH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1zdHJlYW0nO1xyXG5pbXBvcnQgeyBsZWF2ZU5neHMgfSBmcm9tICcuL29wZXJhdG9ycy9sZWF2ZS1uZ3hzJztcclxuaW1wb3J0IHsgTmd4c0NvbmZpZyB9IGZyb20gJy4vc3ltYm9scyc7XHJcbmltcG9ydCB7IFN0YXRlVG9rZW4gfSBmcm9tICcuL3N0YXRlLXRva2VuL3N0YXRlLXRva2VuJztcclxuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1mYWN0b3J5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0YXRlU3RyZWFtOiBTdGF0ZVN0cmVhbSxcclxuICAgIHByaXZhdGUgX2ludGVybmFsU3RhdGVPcGVyYXRpb25zOiBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyxcclxuICAgIHByaXZhdGUgX2NvbmZpZzogTmd4c0NvbmZpZyxcclxuICAgIHByaXZhdGUgX2ludGVybmFsRXhlY3V0aW9uU3RyYXRlZ3k6IEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSBfc3RhdGVGYWN0b3J5OiBTdGF0ZUZhY3RvcnksXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChJTklUSUFMX1NUQVRFX1RPS0VOKVxyXG4gICAgaW5pdGlhbFN0YXRlVmFsdWU6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5pbml0U3RhdGVTdHJlYW0oaW5pdGlhbFN0YXRlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGF0Y2hlcyBldmVudChzKS5cclxuICAgKi9cclxuICBkaXNwYXRjaChhY3Rpb25PckFjdGlvbnM6IGFueSB8IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCkuZGlzcGF0Y2goYWN0aW9uT3JBY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdHMgYSBzbGljZSBvZiBkYXRhIGZyb20gdGhlIHN0b3JlLlxyXG4gICAqL1xyXG4gIHNlbGVjdDxUPihzZWxlY3RvcjogKHN0YXRlOiBhbnksIC4uLnN0YXRlczogYW55W10pID0+IFQpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIHNlbGVjdDxUID0gYW55PihzZWxlY3Rvcjogc3RyaW5nIHwgVHlwZTxhbnk+KTogT2JzZXJ2YWJsZTxUPjtcclxuICBzZWxlY3Q8VD4oc2VsZWN0b3I6IFN0YXRlVG9rZW48VD4pOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIHNlbGVjdChzZWxlY3RvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHNlbGVjdG9yRm4gPSB0aGlzLmdldFN0b3JlQm91bmRTZWxlY3RvckZuKHNlbGVjdG9yKTtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0cmVhbS5waXBlKFxyXG4gICAgICBtYXAoc2VsZWN0b3JGbiksXHJcbiAgICAgIGNhdGNoRXJyb3IoKGVycjogRXJyb3IpOiBPYnNlcnZhYmxlPG5ldmVyPiB8IE9ic2VydmFibGU8dW5kZWZpbmVkPiA9PiB7XHJcbiAgICAgICAgLy8gaWYgZXJyb3IgaXMgVHlwZUVycm9yIHdlIHN3YWxsb3cgaXQgdG8gcHJldmVudCB1c3VhbCBlcnJvcnMgd2l0aCBwcm9wZXJ0eSBhY2Nlc3NcclxuICAgICAgICBjb25zdCB7IHN1cHByZXNzRXJyb3JzIH0gPSB0aGlzLl9jb25maWcuc2VsZWN0b3JPcHRpb25zO1xyXG5cclxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yICYmIHN1cHByZXNzRXJyb3JzKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldGhyb3cgb3RoZXIgZXJyb3JzXHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgfSksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIGxlYXZlTmd4cyh0aGlzLl9pbnRlcm5hbEV4ZWN1dGlvblN0cmF0ZWd5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBvbmUgc2xpY2Ugb2YgZGF0YSBmcm9tIHRoZSBzdG9yZS5cclxuICAgKi9cclxuXHJcbiAgc2VsZWN0T25jZTxUPihzZWxlY3RvcjogKHN0YXRlOiBhbnksIC4uLnN0YXRlczogYW55W10pID0+IFQpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIHNlbGVjdE9uY2U8VCA9IGFueT4oc2VsZWN0b3I6IHN0cmluZyB8IFR5cGU8YW55Pik6IE9ic2VydmFibGU8VD47XHJcbiAgc2VsZWN0T25jZTxUPihzZWxlY3RvcjogU3RhdGVUb2tlbjxUPik6IE9ic2VydmFibGU8VD47XHJcbiAgc2VsZWN0T25jZShzZWxlY3RvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdChzZWxlY3RvcikucGlwZSh0YWtlKDEpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhIHNuYXBzaG90IGZyb20gdGhlIHN0YXRlLlxyXG4gICAqL1xyXG4gIHNlbGVjdFNuYXBzaG90PFQ+KHNlbGVjdG9yOiAoc3RhdGU6IGFueSwgLi4uc3RhdGVzOiBhbnlbXSkgPT4gVCk6IFQ7XHJcbiAgc2VsZWN0U25hcHNob3Q8VCA9IGFueT4oc2VsZWN0b3I6IHN0cmluZyB8IFR5cGU8YW55Pik6IFQ7XHJcbiAgc2VsZWN0U25hcHNob3Q8VD4oc2VsZWN0b3I6IFN0YXRlVG9rZW48VD4pOiBUO1xyXG4gIHNlbGVjdFNuYXBzaG90KHNlbGVjdG9yOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3Qgc2VsZWN0b3JGbiA9IHRoaXMuZ2V0U3RvcmVCb3VuZFNlbGVjdG9yRm4oc2VsZWN0b3IpO1xyXG4gICAgcmV0dXJuIHNlbGVjdG9yRm4odGhpcy5fc3RhdGVTdHJlYW0uZ2V0VmFsdWUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGxvdyB0aGUgdXNlciB0byBzdWJzY3JpYmUgdG8gdGhlIHJvb3Qgb2YgdGhlIHN0YXRlXHJcbiAgICovXHJcbiAgc3Vic2NyaWJlKGZuPzogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RyZWFtLnBpcGUobGVhdmVOZ3hzKHRoaXMuX2ludGVybmFsRXhlY3V0aW9uU3RyYXRlZ3kpKS5zdWJzY3JpYmUoZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSByYXcgdmFsdWUgb2YgdGhlIHN0YXRlLlxyXG4gICAqL1xyXG4gIHNuYXBzaG90KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMuZ2V0Um9vdFN0YXRlT3BlcmF0aW9ucygpLmdldFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0aGUgc3RhdGUgdG8gYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lLiBUaGlzIG1ldGhvZCBpcyB1c2VmdWxcclxuICAgKiBmb3IgcGx1Z2luJ3Mgd2hvIG5lZWQgdG8gbW9kaWZ5IHRoZSBzdGF0ZSBkaXJlY3RseSBvciB1bml0IHRlc3RpbmcuXHJcbiAgICovXHJcbiAgcmVzZXQoc3RhdGU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludGVybmFsU3RhdGVPcGVyYXRpb25zLmdldFJvb3RTdGF0ZU9wZXJhdGlvbnMoKS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0b3JlQm91bmRTZWxlY3RvckZuKHNlbGVjdG9yOiBhbnkpIHtcclxuICAgIGNvbnN0IG1ha2VTZWxlY3RvckZuID0gZ2V0Um9vdFNlbGVjdG9yRmFjdG9yeShzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBydW50aW1lQ29udGV4dCA9IHRoaXMuX3N0YXRlRmFjdG9yeS5nZXRSdW50aW1lU2VsZWN0b3JDb250ZXh0KCk7XHJcbiAgICByZXR1cm4gbWFrZVNlbGVjdG9yRm4ocnVudGltZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0U3RhdGVTdHJlYW0oaW5pdGlhbFN0YXRlVmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWU6IFBsYWluT2JqZWN0ID0gdGhpcy5fc3RhdGVTdHJlYW0udmFsdWU7XHJcbiAgICBjb25zdCBzdG9yZUlzRW1wdHk6IGJvb2xlYW4gPSAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgIGlmIChzdG9yZUlzRW1wdHkpIHtcclxuICAgICAgY29uc3QgZGVmYXVsdFN0YXRlTm90RW1wdHk6IGJvb2xlYW4gPSBPYmplY3Qua2V5cyh0aGlzLl9jb25maWcuZGVmYXVsdHNTdGF0ZSkubGVuZ3RoID4gMDtcclxuICAgICAgY29uc3Qgc3RvcmVWYWx1ZXM6IFBsYWluT2JqZWN0ID0gZGVmYXVsdFN0YXRlTm90RW1wdHlcclxuICAgICAgICA/IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRzU3RhdGUsIC4uLmluaXRpYWxTdGF0ZVZhbHVlIH1cclxuICAgICAgICA6IGluaXRpYWxTdGF0ZVZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fc3RhdGVTdHJlYW0ubmV4dChzdG9yZVZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==