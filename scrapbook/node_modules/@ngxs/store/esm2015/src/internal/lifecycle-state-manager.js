/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxsBootstrapper } from '@ngxs/store/internals';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { StateContextFactory } from './state-context-factory';
import { InternalStateOperations } from './state-operations';
import { getStateDiffChanges } from './internals';
export class LifecycleStateManager {
    /**
     * @param {?} internalStateOperations
     * @param {?} stateContextFactory
     * @param {?} bootstrapper
     */
    constructor(internalStateOperations, stateContextFactory, bootstrapper) {
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
    ngxsBootstrap(action, results) {
        this.internalStateOperations
            .getRootStateOperations()
            .dispatch(action)
            .pipe(filter((/**
         * @return {?}
         */
        () => !!results)), tap((/**
         * @return {?}
         */
        () => this.invokeInit((/** @type {?} */ (results)).states))), mergeMap((/**
         * @return {?}
         */
        () => this.bootstrapper.appBootstrapped$)), filter((/**
         * @param {?} appBootstrapped
         * @return {?}
         */
        appBootstrapped => !!appBootstrapped)))
            .subscribe((/**
         * @return {?}
         */
        () => this.invokeBootstrap((/** @type {?} */ (results)).states)));
    }
    /**
     * Invoke the init function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    invokeInit(mappedStores) {
        for (const mappedStore of mappedStores) {
            /** @type {?} */
            const instance = mappedStore.instance;
            if (instance.ngxsOnChanges) {
                /** @type {?} */
                const currentAppState = {};
                /** @type {?} */
                const newAppState = this.internalStateOperations
                    .getRootStateOperations()
                    .getState();
                /** @type {?} */
                const firstDiffChange = getStateDiffChanges(mappedStore, {
                    currentAppState,
                    newAppState
                });
                instance.ngxsOnChanges(firstDiffChange);
            }
            if (instance.ngxsOnInit) {
                instance.ngxsOnInit(this.getStateContext(mappedStore));
            }
            mappedStore.isInitialised = true;
        }
    }
    /**
     * Invoke the bootstrap function on the states.
     * @param {?} mappedStores
     * @return {?}
     */
    invokeBootstrap(mappedStores) {
        for (const mappedStore of mappedStores) {
            /** @type {?} */
            const instance = mappedStore.instance;
            if (instance.ngxsAfterBootstrap) {
                instance.ngxsAfterBootstrap(this.getStateContext(mappedStore));
            }
        }
    }
    /**
     * @private
     * @param {?} mappedStore
     * @return {?}
     */
    getStateContext(mappedStore) {
        return this.stateContextFactory.createStateContext(mappedStore);
    }
}
LifecycleStateManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LifecycleStateManager.ctorParameters = () => [
    { type: InternalStateOperations },
    { type: StateContextFactory },
    { type: NgxsBootstrapper }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcm5hbC9saWZlY3ljbGUtc3RhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQWtDLE1BQU0sYUFBYSxDQUFDO0FBSWxGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNVLHVCQUFnRCxFQUNoRCxtQkFBd0MsRUFDeEMsWUFBOEI7UUFGOUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUNyQyxDQUFDOzs7Ozs7O0lBRUosYUFBYSxDQUFJLE1BQVMsRUFBRSxPQUFzQztRQUNoRSxJQUFJLENBQUMsdUJBQXVCO2FBQ3pCLHNCQUFzQixFQUFFO2FBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUNILE1BQU07OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFDdkIsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUMzQyxRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFDLEVBQ2xELE1BQU07Ozs7UUFBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUMsQ0FDN0M7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLFlBQTJCO1FBQ3BDLEtBQUssTUFBTSxXQUFXLElBQUksWUFBWSxFQUFFOztrQkFDaEMsUUFBUSxHQUFrQixXQUFXLENBQUMsUUFBUTtZQUVwRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7O3NCQUNwQixlQUFlLEdBQWdCLEVBQUU7O3NCQUNqQyxXQUFXLEdBQWdCLElBQUksQ0FBQyx1QkFBdUI7cUJBQzFELHNCQUFzQixFQUFFO3FCQUN4QixRQUFRLEVBQUU7O3NCQUVQLGVBQWUsR0FBcUIsbUJBQW1CLENBQUMsV0FBVyxFQUFFO29CQUN6RSxlQUFlO29CQUNmLFdBQVc7aUJBQ1osQ0FBQztnQkFFRixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUN2QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUN4RDtZQUVELFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7O0lBS0QsZUFBZSxDQUFDLFlBQTJCO1FBQ3pDLEtBQUssTUFBTSxXQUFXLElBQUksWUFBWSxFQUFFOztrQkFDaEMsUUFBUSxHQUFrQixXQUFXLENBQUMsUUFBUTtZQUNwRCxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtnQkFDL0IsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQWhFRixVQUFVOzs7O1lBSkYsdUJBQXVCO1lBRHZCLG1CQUFtQjtZQUhuQixnQkFBZ0I7Ozs7Ozs7SUFXckIsd0RBQXdEOzs7OztJQUN4RCxvREFBZ0Q7Ozs7O0lBQ2hELDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4c0Jvb3RzdHJhcHBlciwgUGxhaW5PYmplY3QgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHRGYWN0b3J5IH0gZnJvbSAnLi9zdGF0ZS1jb250ZXh0LWZhY3RvcnknO1xyXG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4vc3RhdGUtb3BlcmF0aW9ucyc7XHJcbmltcG9ydCB7IGdldFN0YXRlRGlmZkNoYW5nZXMsIE1hcHBlZFN0b3JlLCBTdGF0ZXNBbmREZWZhdWx0cyB9IGZyb20gJy4vaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgTmd4c0xpZmVDeWNsZSwgTmd4c1NpbXBsZUNoYW5nZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFN0YXRlT3BlcmF0aW9uczogSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMsXHJcbiAgICBwcml2YXRlIHN0YXRlQ29udGV4dEZhY3Rvcnk6IFN0YXRlQ29udGV4dEZhY3RvcnksXHJcbiAgICBwcml2YXRlIGJvb3RzdHJhcHBlcjogTmd4c0Jvb3RzdHJhcHBlclxyXG4gICkge31cclxuXHJcbiAgbmd4c0Jvb3RzdHJhcDxUPihhY3Rpb246IFQsIHJlc3VsdHM6IFN0YXRlc0FuZERlZmF1bHRzIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsU3RhdGVPcGVyYXRpb25zXHJcbiAgICAgIC5nZXRSb290U3RhdGVPcGVyYXRpb25zKClcclxuICAgICAgLmRpc3BhdGNoKGFjdGlvbilcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhcmVzdWx0cyksXHJcbiAgICAgICAgdGFwKCgpID0+IHRoaXMuaW52b2tlSW5pdChyZXN1bHRzIS5zdGF0ZXMpKSxcclxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLmJvb3RzdHJhcHBlci5hcHBCb290c3RyYXBwZWQkKSxcclxuICAgICAgICBmaWx0ZXIoYXBwQm9vdHN0cmFwcGVkID0+ICEhYXBwQm9vdHN0cmFwcGVkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbnZva2VCb290c3RyYXAocmVzdWx0cyEuc3RhdGVzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnZva2UgdGhlIGluaXQgZnVuY3Rpb24gb24gdGhlIHN0YXRlcy5cclxuICAgKi9cclxuICBpbnZva2VJbml0KG1hcHBlZFN0b3JlczogTWFwcGVkU3RvcmVbXSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBtYXBwZWRTdG9yZSBvZiBtYXBwZWRTdG9yZXMpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2U6IE5neHNMaWZlQ3ljbGUgPSBtYXBwZWRTdG9yZS5pbnN0YW5jZTtcclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzT25DaGFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlOiBQbGFpbk9iamVjdCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG5ld0FwcFN0YXRlOiBQbGFpbk9iamVjdCA9IHRoaXMuaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnNcclxuICAgICAgICAgIC5nZXRSb290U3RhdGVPcGVyYXRpb25zKClcclxuICAgICAgICAgIC5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdERpZmZDaGFuZ2U6IE5neHNTaW1wbGVDaGFuZ2UgPSBnZXRTdGF0ZURpZmZDaGFuZ2VzKG1hcHBlZFN0b3JlLCB7XHJcbiAgICAgICAgICBjdXJyZW50QXBwU3RhdGUsXHJcbiAgICAgICAgICBuZXdBcHBTdGF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5uZ3hzT25DaGFuZ2VzKGZpcnN0RGlmZkNoYW5nZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnN0YW5jZS5uZ3hzT25Jbml0KSB7XHJcbiAgICAgICAgaW5zdGFuY2Uubmd4c09uSW5pdCh0aGlzLmdldFN0YXRlQ29udGV4dChtYXBwZWRTdG9yZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXBwZWRTdG9yZS5pc0luaXRpYWxpc2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludm9rZSB0aGUgYm9vdHN0cmFwIGZ1bmN0aW9uIG9uIHRoZSBzdGF0ZXMuXHJcbiAgICovXHJcbiAgaW52b2tlQm9vdHN0cmFwKG1hcHBlZFN0b3JlczogTWFwcGVkU3RvcmVbXSkge1xyXG4gICAgZm9yIChjb25zdCBtYXBwZWRTdG9yZSBvZiBtYXBwZWRTdG9yZXMpIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2U6IE5neHNMaWZlQ3ljbGUgPSBtYXBwZWRTdG9yZS5pbnN0YW5jZTtcclxuICAgICAgaWYgKGluc3RhbmNlLm5neHNBZnRlckJvb3RzdHJhcCkge1xyXG4gICAgICAgIGluc3RhbmNlLm5neHNBZnRlckJvb3RzdHJhcCh0aGlzLmdldFN0YXRlQ29udGV4dChtYXBwZWRTdG9yZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0YXRlQ29udGV4dChtYXBwZWRTdG9yZTogTWFwcGVkU3RvcmUpOiBTdGF0ZUNvbnRleHQ8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZUNvbnRleHRGYWN0b3J5LmNyZWF0ZVN0YXRlQ29udGV4dChtYXBwZWRTdG9yZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==