/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, Optional } from '@angular/core';
import { Store } from '../store';
import { InternalStateOperations } from '../internal/state-operations';
import { StateFactory } from '../internal/state-factory';
import { FEATURE_STATE_TOKEN } from '../symbols';
import { LifecycleStateManager } from '../internal/lifecycle-state-manager';
import { UpdateState } from '../actions/actions';
/**
 * Feature module
 * @ignore
 */
var NgxsFeatureModule = /** @class */ (function () {
    function NgxsFeatureModule(_store, internalStateOperations, factory, states, lifecycleStateManager) {
        if (states === void 0) { states = []; }
        // Since FEATURE_STATE_TOKEN is a multi token, we need to
        // flatten it [[Feature1State, Feature2State], [Feature3State]]
        /** @type {?} */
        var flattenedStates = NgxsFeatureModule.flattenStates(states);
        // add stores to the state graph and return their defaults
        /** @type {?} */
        var results = factory.addAndReturnDefaults(flattenedStates);
        if (results.states.length) {
            internalStateOperations.setStateToTheCurrentWithNew(results);
            // dispatch the update action and invoke init and bootstrap functions after
            lifecycleStateManager.ngxsBootstrap(new UpdateState(results.defaults), results);
        }
    }
    /**
     * @private
     * @param {?=} states
     * @return {?}
     */
    NgxsFeatureModule.flattenStates = /**
     * @private
     * @param {?=} states
     * @return {?}
     */
    function (states) {
        if (states === void 0) { states = []; }
        return states.reduce((/**
         * @param {?} total
         * @param {?} values
         * @return {?}
         */
        function (total, values) { return total.concat(values); }), []);
    };
    NgxsFeatureModule.decorators = [
        { type: NgModule }
    ];
    /** @nocollapse */
    NgxsFeatureModule.ctorParameters = function () { return [
        { type: Store },
        { type: InternalStateOperations },
        { type: StateFactory },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [FEATURE_STATE_TOKEN,] }] },
        { type: LifecycleStateManager }
    ]; };
    return NgxsFeatureModule;
}());
export { NgxsFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy1mZWF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvbmd4cy1mZWF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBTWpEO0lBRUUsMkJBQ0UsTUFBYSxFQUNiLHVCQUFnRCxFQUNoRCxPQUFxQixFQUdyQixNQUFtQyxFQUNuQyxxQkFBNEM7UUFINUMsdUJBQUEsRUFBQSxXQUVtQzs7OztZQUs3QixlQUFlLEdBQXlCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7OztZQUcvRSxPQUFPLEdBQXNCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7UUFFaEYsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN6Qix1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3RCwyRUFBMkU7WUFDM0UscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7OztJQUVjLCtCQUFhOzs7OztJQUE1QixVQUE2QixNQUFtQztRQUFuQyx1QkFBQSxFQUFBLFdBQW1DO1FBQzlELE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O1FBQ2xCLFVBQUMsS0FBMkIsRUFBRSxNQUE0QixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBcEIsQ0FBb0IsR0FDbkYsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDOztnQkEvQkYsUUFBUTs7OztnQkFaQSxLQUFLO2dCQUNMLHVCQUF1QjtnQkFDdkIsWUFBWTs0Q0FnQmhCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1CO2dCQWZ0QixxQkFBcUI7O0lBd0M5Qix3QkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTmdNb2R1bGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuLi9pbnRlcm5hbC9zdGF0ZS1vcGVyYXRpb25zJztcclxuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vaW50ZXJuYWwvc3RhdGUtZmFjdG9yeSc7XHJcbmltcG9ydCB7IEZFQVRVUkVfU1RBVEVfVE9LRU4gfSBmcm9tICcuLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgTGlmZWN5Y2xlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi4vaW50ZXJuYWwvbGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBTdGF0ZUNsYXNzSW50ZXJuYWwsIFN0YXRlc0FuZERlZmF1bHRzIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgVXBkYXRlU3RhdGUgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEZlYXR1cmUgbW9kdWxlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzRmVhdHVyZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfc3RvcmU6IFN0b3JlLFxyXG4gICAgaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnM6IEludGVybmFsU3RhdGVPcGVyYXRpb25zLFxyXG4gICAgZmFjdG9yeTogU3RhdGVGYWN0b3J5LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoRkVBVFVSRV9TVEFURV9UT0tFTilcclxuICAgIHN0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW11bXSA9IFtdLFxyXG4gICAgbGlmZWN5Y2xlU3RhdGVNYW5hZ2VyOiBMaWZlY3ljbGVTdGF0ZU1hbmFnZXJcclxuICApIHtcclxuICAgIC8vIFNpbmNlIEZFQVRVUkVfU1RBVEVfVE9LRU4gaXMgYSBtdWx0aSB0b2tlbiwgd2UgbmVlZCB0b1xyXG4gICAgLy8gZmxhdHRlbiBpdCBbW0ZlYXR1cmUxU3RhdGUsIEZlYXR1cmUyU3RhdGVdLCBbRmVhdHVyZTNTdGF0ZV1dXHJcbiAgICBjb25zdCBmbGF0dGVuZWRTdGF0ZXM6IFN0YXRlQ2xhc3NJbnRlcm5hbFtdID0gTmd4c0ZlYXR1cmVNb2R1bGUuZmxhdHRlblN0YXRlcyhzdGF0ZXMpO1xyXG5cclxuICAgIC8vIGFkZCBzdG9yZXMgdG8gdGhlIHN0YXRlIGdyYXBoIGFuZCByZXR1cm4gdGhlaXIgZGVmYXVsdHNcclxuICAgIGNvbnN0IHJlc3VsdHM6IFN0YXRlc0FuZERlZmF1bHRzID0gZmFjdG9yeS5hZGRBbmRSZXR1cm5EZWZhdWx0cyhmbGF0dGVuZWRTdGF0ZXMpO1xyXG5cclxuICAgIGlmIChyZXN1bHRzLnN0YXRlcy5sZW5ndGgpIHtcclxuICAgICAgaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMuc2V0U3RhdGVUb1RoZUN1cnJlbnRXaXRoTmV3KHJlc3VsdHMpO1xyXG5cclxuICAgICAgLy8gZGlzcGF0Y2ggdGhlIHVwZGF0ZSBhY3Rpb24gYW5kIGludm9rZSBpbml0IGFuZCBib290c3RyYXAgZnVuY3Rpb25zIGFmdGVyXHJcbiAgICAgIGxpZmVjeWNsZVN0YXRlTWFuYWdlci5uZ3hzQm9vdHN0cmFwKG5ldyBVcGRhdGVTdGF0ZShyZXN1bHRzLmRlZmF1bHRzKSwgcmVzdWx0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuU3RhdGVzKHN0YXRlczogU3RhdGVDbGFzc0ludGVybmFsW11bXSA9IFtdKTogU3RhdGVDbGFzc0ludGVybmFsW10ge1xyXG4gICAgcmV0dXJuIHN0YXRlcy5yZWR1Y2UoXHJcbiAgICAgICh0b3RhbDogU3RhdGVDbGFzc0ludGVybmFsW10sIHZhbHVlczogU3RhdGVDbGFzc0ludGVybmFsW10pID0+IHRvdGFsLmNvbmNhdCh2YWx1ZXMpLFxyXG4gICAgICBbXVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19