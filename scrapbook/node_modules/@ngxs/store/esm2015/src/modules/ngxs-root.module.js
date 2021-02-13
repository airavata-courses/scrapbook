/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, Optional } from '@angular/core';
import { StateFactory } from '../internal/state-factory';
import { InternalStateOperations } from '../internal/state-operations';
import { Store } from '../store';
import { SelectFactory } from '../decorators/select/select-factory';
import { ROOT_STATE_TOKEN } from '../symbols';
import { LifecycleStateManager } from '../internal/lifecycle-state-manager';
import { InitState } from '../actions/actions';
import { setIvyEnabledInDevMode } from '../ivy/ivy-enabled-in-dev-mode';
/**
 * Root module
 * @ignore
 */
export class NgxsRootModule {
    /**
     * @param {?} factory
     * @param {?} internalStateOperations
     * @param {?} _store
     * @param {?} _select
     * @param {?=} states
     * @param {?=} lifecycleStateManager
     */
    constructor(factory, internalStateOperations, _store, _select, states = [], lifecycleStateManager) {
        // Validate states on having the `@Injectable()` decorator in Ivy
        setIvyEnabledInDevMode();
        // Add stores to the state graph and return their defaults
        /** @type {?} */
        const results = factory.addAndReturnDefaults(states);
        internalStateOperations.setStateToTheCurrentWithNew(results);
        // Connect our actions stream
        factory.connectActionHandlers();
        // Dispatch the init action and invoke init and bootstrap functions after
        lifecycleStateManager.ngxsBootstrap(new InitState(), results);
    }
}
NgxsRootModule.decorators = [
    { type: NgModule }
];
/** @nocollapse */
NgxsRootModule.ctorParameters = () => [
    { type: StateFactory },
    { type: InternalStateOperations },
    { type: Store },
    { type: SelectFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ROOT_STATE_TOKEN,] }] },
    { type: LifecycleStateManager }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy1yb290Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvbmd4cy1yb290Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQU94RSxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBQ3pCLFlBQ0UsT0FBcUIsRUFDckIsdUJBQWdELEVBQ2hELE1BQWEsRUFDYixPQUFzQixFQUd0QixTQUErQixFQUFFLEVBQ2pDLHFCQUE0QztRQUU1QyxpRUFBaUU7UUFDakUsc0JBQXNCLEVBQUUsQ0FBQzs7O2NBR25CLE9BQU8sR0FBc0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUV2RSx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RCw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFaEMseUVBQXlFO1FBQ3pFLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQXpCRixRQUFROzs7O1lBZEEsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixLQUFLO1lBQ0wsYUFBYTt3Q0FrQmpCLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCO1lBaEJuQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE5nTW9kdWxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vaW50ZXJuYWwvc3RhdGUtZmFjdG9yeSc7XHJcbmltcG9ydCB7IEludGVybmFsU3RhdGVPcGVyYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJuYWwvc3RhdGUtb3BlcmF0aW9ucyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3RGYWN0b3J5IH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9zZWxlY3Qvc2VsZWN0LWZhY3RvcnknO1xyXG5pbXBvcnQgeyBST09UX1NUQVRFX1RPS0VOIH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcbmltcG9ydCB7IFN0YXRlQ2xhc3NJbnRlcm5hbCwgU3RhdGVzQW5kRGVmYXVsdHMgfSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuLi9pbnRlcm5hbC9saWZlY3ljbGUtc3RhdGUtbWFuYWdlcic7XHJcbmltcG9ydCB7IEluaXRTdGF0ZSB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldEl2eUVuYWJsZWRJbkRldk1vZGUgfSBmcm9tICcuLi9pdnkvaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUnO1xyXG5cclxuLyoqXHJcbiAqIFJvb3QgbW9kdWxlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzUm9vdE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBmYWN0b3J5OiBTdGF0ZUZhY3RvcnksXHJcbiAgICBpbnRlcm5hbFN0YXRlT3BlcmF0aW9uczogSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMsXHJcbiAgICBfc3RvcmU6IFN0b3JlLFxyXG4gICAgX3NlbGVjdDogU2VsZWN0RmFjdG9yeSxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KFJPT1RfU1RBVEVfVE9LRU4pXHJcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdID0gW10sXHJcbiAgICBsaWZlY3ljbGVTdGF0ZU1hbmFnZXI6IExpZmVjeWNsZVN0YXRlTWFuYWdlclxyXG4gICkge1xyXG4gICAgLy8gVmFsaWRhdGUgc3RhdGVzIG9uIGhhdmluZyB0aGUgYEBJbmplY3RhYmxlKClgIGRlY29yYXRvciBpbiBJdnlcclxuICAgIHNldEl2eUVuYWJsZWRJbkRldk1vZGUoKTtcclxuXHJcbiAgICAvLyBBZGQgc3RvcmVzIHRvIHRoZSBzdGF0ZSBncmFwaCBhbmQgcmV0dXJuIHRoZWlyIGRlZmF1bHRzXHJcbiAgICBjb25zdCByZXN1bHRzOiBTdGF0ZXNBbmREZWZhdWx0cyA9IGZhY3RvcnkuYWRkQW5kUmV0dXJuRGVmYXVsdHMoc3RhdGVzKTtcclxuXHJcbiAgICBpbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5zZXRTdGF0ZVRvVGhlQ3VycmVudFdpdGhOZXcocmVzdWx0cyk7XHJcblxyXG4gICAgLy8gQ29ubmVjdCBvdXIgYWN0aW9ucyBzdHJlYW1cclxuICAgIGZhY3RvcnkuY29ubmVjdEFjdGlvbkhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGluaXQgYWN0aW9uIGFuZCBpbnZva2UgaW5pdCBhbmQgYm9vdHN0cmFwIGZ1bmN0aW9ucyBhZnRlclxyXG4gICAgbGlmZWN5Y2xlU3RhdGVNYW5hZ2VyLm5neHNCb290c3RyYXAobmV3IEluaXRTdGF0ZSgpLCByZXN1bHRzKTtcclxuICB9XHJcbn1cclxuIl19