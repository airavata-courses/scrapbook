/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgxsBootstrapper } from '@ngxs/store/internals';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { StateContextFactory } from './state-context-factory';
import { InternalStateOperations } from './state-operations';
import { getStateDiffChanges } from './internals';
var LifecycleStateManager = /** @class */ (function () {
    function LifecycleStateManager(internalStateOperations, stateContextFactory, bootstrapper) {
        this.internalStateOperations = internalStateOperations;
        this.stateContextFactory = stateContextFactory;
        this.bootstrapper = bootstrapper;
    }
    /**
     * @template T
     * @param {?} action
     * @param {?} results
     * @return {?}
     */
    LifecycleStateManager.prototype.ngxsBootstrap = /**
     * @template T
     * @param {?} action
     * @param {?} results
     * @return {?}
     */
    function (action, results) {
        var _this = this;
        this.internalStateOperations
            .getRootStateOperations()
            .dispatch(action)
            .pipe(filter((/**
         * @return {?}
         */
        function () { return !!results; })), tap((/**
         * @return {?}
         */
        function () { return _this.invokeInit((/** @type {?} */ (results)).states); })), mergeMap((/**
         * @return {?}
         */
        function () { return _this.bootstrapper.appBootstrapped$; })), filter((/**
         * @param {?} appBootstrapped
         * @return {?}
         */
        function (appBootstrapped) { return !!appBootstrapped; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.invokeBootstrap((/** @type {?} */ (results)).states); }));
    };
    /**
     * Invoke the init function on the states.
     */
    /**
     * Invoke the init function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    LifecycleStateManager.prototype.invokeInit = /**
     * Invoke the init function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    function (mappedStores) {
        var e_1, _a;
        try {
            for (var mappedStores_1 = tslib_1.__values(mappedStores), mappedStores_1_1 = mappedStores_1.next(); !mappedStores_1_1.done; mappedStores_1_1 = mappedStores_1.next()) {
                var mappedStore = mappedStores_1_1.value;
                /** @type {?} */
                var instance = mappedStore.instance;
                if (instance.ngxsOnChanges) {
                    /** @type {?} */
                    var currentAppState = {};
                    /** @type {?} */
                    var newAppState = this.internalStateOperations
                        .getRootStateOperations()
                        .getState();
                    /** @type {?} */
                    var firstDiffChange = getStateDiffChanges(mappedStore, {
                        currentAppState: currentAppState,
                        newAppState: newAppState
                    });
                    instance.ngxsOnChanges(firstDiffChange);
                }
                if (instance.ngxsOnInit) {
                    instance.ngxsOnInit(this.getStateContext(mappedStore));
                }
                mappedStore.isInitialised = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (mappedStores_1_1 && !mappedStores_1_1.done && (_a = mappedStores_1.return)) _a.call(mappedStores_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Invoke the bootstrap function on the states.
     */
    /**
     * Invoke the bootstrap function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    LifecycleStateManager.prototype.invokeBootstrap = /**
     * Invoke the bootstrap function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    function (mappedStores) {
        var e_2, _a;
        try {
            for (var mappedStores_2 = tslib_1.__values(mappedStores), mappedStores_2_1 = mappedStores_2.next(); !mappedStores_2_1.done; mappedStores_2_1 = mappedStores_2.next()) {
                var mappedStore = mappedStores_2_1.value;
                /** @type {?} */
                var instance = mappedStore.instance;
                if (instance.ngxsAfterBootstrap) {
                    instance.ngxsAfterBootstrap(this.getStateContext(mappedStore));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (mappedStores_2_1 && !mappedStores_2_1.done && (_a = mappedStores_2.return)) _a.call(mappedStores_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} mappedStore
     * @return {?}
     */
    LifecycleStateManager.prototype.getStateContext = /**
     * @private
     * @param {?} mappedStore
     * @return {?}
     */
    function (mappedStore) {
        return this.stateContextFactory.createStateContext(mappedStore);
    };
    LifecycleStateManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LifecycleStateManager.ctorParameters = function () { return [
        { type: InternalStateOperations },
        { type: StateContextFactory },
        { type: NgxsBootstrapper }
    ]; };
    return LifecycleStateManager;
}());
export { LifecycleStateManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.internalStateOperations;
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.stateContextFactory;
    /**
     * @type {?}
     * @private
     */
    LifecycleStateManager.prototype.bootstrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcm5hbC9saWZlY3ljbGUtc3RhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFrQyxNQUFNLGFBQWEsQ0FBQztBQUdsRjtJQUVFLCtCQUNVLHVCQUFnRCxFQUNoRCxtQkFBd0MsRUFDeEMsWUFBOEI7UUFGOUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUNyQyxDQUFDOzs7Ozs7O0lBRUosNkNBQWE7Ozs7OztJQUFiLFVBQWlCLE1BQVMsRUFBRSxPQUFzQztRQUFsRSxpQkFXQztRQVZDLElBQUksQ0FBQyx1QkFBdUI7YUFDekIsc0JBQXNCLEVBQUU7YUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQ0gsTUFBTTs7O1FBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxFQUFDLEVBQ3ZCLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLEVBQzNDLFFBQVE7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFsQyxDQUFrQyxFQUFDLEVBQ2xELE1BQU07Ozs7UUFBQyxVQUFBLGVBQWUsSUFBSSxPQUFBLENBQUMsQ0FBQyxlQUFlLEVBQWpCLENBQWlCLEVBQUMsQ0FDN0M7YUFDQSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckMsQ0FBcUMsRUFBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMENBQVU7Ozs7O0lBQVYsVUFBVyxZQUEyQjs7O1lBQ3BDLEtBQTBCLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBLG9FQUFFO2dCQUFuQyxJQUFNLFdBQVcseUJBQUE7O29CQUNkLFFBQVEsR0FBa0IsV0FBVyxDQUFDLFFBQVE7Z0JBRXBELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTs7d0JBQ3BCLGVBQWUsR0FBZ0IsRUFBRTs7d0JBQ2pDLFdBQVcsR0FBZ0IsSUFBSSxDQUFDLHVCQUF1Qjt5QkFDMUQsc0JBQXNCLEVBQUU7eUJBQ3hCLFFBQVEsRUFBRTs7d0JBRVAsZUFBZSxHQUFxQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7d0JBQ3pFLGVBQWUsaUJBQUE7d0JBQ2YsV0FBVyxhQUFBO3FCQUNaLENBQUM7b0JBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUN2QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBRUQsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDbEM7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsK0NBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBMkI7OztZQUN6QyxLQUEwQixJQUFBLGlCQUFBLGlCQUFBLFlBQVksQ0FBQSwwQ0FBQSxvRUFBRTtnQkFBbkMsSUFBTSxXQUFXLHlCQUFBOztvQkFDZCxRQUFRLEdBQWtCLFdBQVcsQ0FBQyxRQUFRO2dCQUNwRCxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDL0IsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDaEU7YUFDRjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sK0NBQWU7Ozs7O0lBQXZCLFVBQXdCLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQWhFRixVQUFVOzs7O2dCQUpGLHVCQUF1QjtnQkFEdkIsbUJBQW1CO2dCQUhuQixnQkFBZ0I7O0lBeUV6Qiw0QkFBQztDQUFBLEFBakVELElBaUVDO1NBaEVZLHFCQUFxQjs7Ozs7O0lBRTlCLHdEQUF3RDs7Ozs7SUFDeEQsb0RBQWdEOzs7OztJQUNoRCw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neHNCb290c3RyYXBwZXIsIFBsYWluT2JqZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0RmFjdG9yeSB9IGZyb20gJy4vc3RhdGUtY29udGV4dC1mYWN0b3J5JztcclxuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuL3N0YXRlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRTdGF0ZURpZmZDaGFuZ2VzLCBNYXBwZWRTdG9yZSwgU3RhdGVzQW5kRGVmYXVsdHMgfSBmcm9tICcuL2ludGVybmFscyc7XHJcbmltcG9ydCB7IE5neHNMaWZlQ3ljbGUsIE5neHNTaW1wbGVDaGFuZ2UsIFN0YXRlQ29udGV4dCB9IGZyb20gJy4uL3N5bWJvbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlmZWN5Y2xlU3RhdGVNYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnM6IEludGVybmFsU3RhdGVPcGVyYXRpb25zLFxyXG4gICAgcHJpdmF0ZSBzdGF0ZUNvbnRleHRGYWN0b3J5OiBTdGF0ZUNvbnRleHRGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBib290c3RyYXBwZXI6IE5neHNCb290c3RyYXBwZXJcclxuICApIHt9XHJcblxyXG4gIG5neHNCb290c3RyYXA8VD4oYWN0aW9uOiBULCByZXN1bHRzOiBTdGF0ZXNBbmREZWZhdWx0cyB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcm5hbFN0YXRlT3BlcmF0aW9uc1xyXG4gICAgICAuZ2V0Um9vdFN0YXRlT3BlcmF0aW9ucygpXHJcbiAgICAgIC5kaXNwYXRjaChhY3Rpb24pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXJlc3VsdHMpLFxyXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLmludm9rZUluaXQocmVzdWx0cyEuc3RhdGVzKSksXHJcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy5ib290c3RyYXBwZXIuYXBwQm9vdHN0cmFwcGVkJCksXHJcbiAgICAgICAgZmlsdGVyKGFwcEJvb3RzdHJhcHBlZCA9PiAhIWFwcEJvb3RzdHJhcHBlZClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW52b2tlQm9vdHN0cmFwKHJlc3VsdHMhLnN0YXRlcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW52b2tlIHRoZSBpbml0IGZ1bmN0aW9uIG9uIHRoZSBzdGF0ZXMuXHJcbiAgICovXHJcbiAgaW52b2tlSW5pdChtYXBwZWRTdG9yZXM6IE1hcHBlZFN0b3JlW10pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgbWFwcGVkU3RvcmUgb2YgbWFwcGVkU3RvcmVzKSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlOiBOZ3hzTGlmZUN5Y2xlID0gbWFwcGVkU3RvcmUuaW5zdGFuY2U7XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2Uubmd4c09uQ2hhbmdlcykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZTogUGxhaW5PYmplY3QgPSB7fTtcclxuICAgICAgICBjb25zdCBuZXdBcHBTdGF0ZTogUGxhaW5PYmplY3QgPSB0aGlzLmludGVybmFsU3RhdGVPcGVyYXRpb25zXHJcbiAgICAgICAgICAuZ2V0Um9vdFN0YXRlT3BlcmF0aW9ucygpXHJcbiAgICAgICAgICAuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlyc3REaWZmQ2hhbmdlOiBOZ3hzU2ltcGxlQ2hhbmdlID0gZ2V0U3RhdGVEaWZmQ2hhbmdlcyhtYXBwZWRTdG9yZSwge1xyXG4gICAgICAgICAgY3VycmVudEFwcFN0YXRlLFxyXG4gICAgICAgICAgbmV3QXBwU3RhdGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2Uubmd4c09uQ2hhbmdlcyhmaXJzdERpZmZDaGFuZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5zdGFuY2Uubmd4c09uSW5pdCkge1xyXG4gICAgICAgIGluc3RhbmNlLm5neHNPbkluaXQodGhpcy5nZXRTdGF0ZUNvbnRleHQobWFwcGVkU3RvcmUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWFwcGVkU3RvcmUuaXNJbml0aWFsaXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnZva2UgdGhlIGJvb3RzdHJhcCBmdW5jdGlvbiBvbiB0aGUgc3RhdGVzLlxyXG4gICAqL1xyXG4gIGludm9rZUJvb3RzdHJhcChtYXBwZWRTdG9yZXM6IE1hcHBlZFN0b3JlW10pIHtcclxuICAgIGZvciAoY29uc3QgbWFwcGVkU3RvcmUgb2YgbWFwcGVkU3RvcmVzKSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlOiBOZ3hzTGlmZUN5Y2xlID0gbWFwcGVkU3RvcmUuaW5zdGFuY2U7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzQWZ0ZXJCb290c3RyYXApIHtcclxuICAgICAgICBpbnN0YW5jZS5uZ3hzQWZ0ZXJCb290c3RyYXAodGhpcy5nZXRTdGF0ZUNvbnRleHQobWFwcGVkU3RvcmUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdGF0ZUNvbnRleHQobWFwcGVkU3RvcmU6IE1hcHBlZFN0b3JlKTogU3RhdGVDb250ZXh0PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVDb250ZXh0RmFjdG9yeS5jcmVhdGVTdGF0ZUNvbnRleHQobWFwcGVkU3RvcmUpO1xyXG4gIH1cclxufVxyXG4iXX0=