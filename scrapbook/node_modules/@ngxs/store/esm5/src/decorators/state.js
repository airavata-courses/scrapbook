/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ensureStoreMetadata } from '../internal/internals';
import { META_KEY, META_OPTIONS_KEY } from '../symbols';
import { StoreValidators } from '../utils/store-validators';
import { ensureStateClassIsInjectable } from '../ivy/ensure-state-class-is-injectable';
/**
 * @record
 * @template T
 */
function MutateMetaOptions() { }
if (false) {
    /** @type {?} */
    MutateMetaOptions.prototype.meta;
    /** @type {?} */
    MutateMetaOptions.prototype.inheritedStateClass;
    /** @type {?} */
    MutateMetaOptions.prototype.optionsWithInheritance;
}
/**
 * Decorates a class with ngxs state information.
 * @template T
 * @param {?} options
 * @return {?}
 */
export function State(options) {
    /**
     * @param {?} inheritedStateClass
     * @return {?}
     */
    function getStateOptions(inheritedStateClass) {
        /** @type {?} */
        var inheritanceOptions = inheritedStateClass[META_OPTIONS_KEY] || {};
        return (/** @type {?} */ (tslib_1.__assign({}, inheritanceOptions, options)));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function mutateMetaData(params) {
        var meta = params.meta, inheritedStateClass = params.inheritedStateClass, optionsWithInheritance = params.optionsWithInheritance;
        var children = optionsWithInheritance.children, defaults = optionsWithInheritance.defaults, name = optionsWithInheritance.name;
        /** @type {?} */
        var stateName = typeof name === 'string' ? name : (name && name.getName()) || null;
        StoreValidators.checkCorrectStateName(stateName);
        if (inheritedStateClass.hasOwnProperty(META_KEY)) {
            /** @type {?} */
            var inheritedMeta = inheritedStateClass[META_KEY] || {};
            meta.actions = tslib_1.__assign({}, meta.actions, inheritedMeta.actions);
        }
        meta.children = children;
        meta.defaults = defaults;
        meta.name = stateName;
    }
    return (/**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        ensureStateClassIsInjectable(target);
        /** @type {?} */
        var stateClass = target;
        /** @type {?} */
        var meta = ensureStoreMetadata(stateClass);
        /** @type {?} */
        var inheritedStateClass = Object.getPrototypeOf(stateClass);
        /** @type {?} */
        var optionsWithInheritance = getStateOptions(inheritedStateClass);
        mutateMetaData({ meta: meta, inheritedStateClass: inheritedStateClass, optionsWithInheritance: optionsWithInheritance });
        stateClass[META_OPTIONS_KEY] = optionsWithInheritance;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG1CQUFtQixFQUFxQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9GLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sWUFBWSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFFdkYsZ0NBSUM7OztJQUhDLGlDQUFvQjs7SUFDcEIsZ0RBQXdDOztJQUN4QyxtREFBd0M7Ozs7Ozs7O0FBTTFDLE1BQU0sVUFBVSxLQUFLLENBQUksT0FBd0I7Ozs7O0lBQy9DLFNBQVMsZUFBZSxDQUFDLG1CQUF1Qzs7WUFDeEQsa0JBQWtCLEdBQ3RCLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtRQUM3QyxPQUFPLHdDQUFLLGtCQUFrQixFQUFLLE9BQU8sR0FBcUIsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELFNBQVMsY0FBYyxDQUFDLE1BQTRCO1FBQzFDLElBQUEsa0JBQUksRUFBRSxnREFBbUIsRUFBRSxzREFBc0I7UUFDakQsSUFBQSwwQ0FBUSxFQUFFLDBDQUFRLEVBQUUsa0NBQUk7O1lBQzFCLFNBQVMsR0FDYixPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSTtRQUNwRSxlQUFlLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUMxQyxhQUFhLEdBQTJCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakYsSUFBSSxDQUFDLE9BQU8sd0JBQVEsSUFBSSxDQUFDLE9BQU8sRUFBSyxhQUFhLENBQUMsT0FBTyxDQUFFLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7SUFBTyxVQUFDLE1BQWtCO1FBQ3hCLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUMvQixVQUFVLEdBQXVCLE1BQU07O1lBQ3ZDLElBQUksR0FBa0IsbUJBQW1CLENBQUMsVUFBVSxDQUFDOztZQUNyRCxtQkFBbUIsR0FBdUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7O1lBQzNFLHNCQUFzQixHQUFvQixlQUFlLENBQUMsbUJBQW1CLENBQUM7UUFDcEYsY0FBYyxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsbUJBQW1CLHFCQUFBLEVBQUUsc0JBQXNCLHdCQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0lBQ3hELENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUNsYXNzIH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcclxuXHJcbmltcG9ydCB7IGVuc3VyZVN0b3JlTWV0YWRhdGEsIE1ldGFEYXRhTW9kZWwsIFN0YXRlQ2xhc3NJbnRlcm5hbCB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XHJcbmltcG9ydCB7IE1FVEFfS0VZLCBNRVRBX09QVElPTlNfS0VZLCBTdG9yZU9wdGlvbnMgfSBmcm9tICcuLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgU3RvcmVWYWxpZGF0b3JzIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmUtdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IGVuc3VyZVN0YXRlQ2xhc3NJc0luamVjdGFibGUgfSBmcm9tICcuLi9pdnkvZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUnO1xyXG5cclxuaW50ZXJmYWNlIE11dGF0ZU1ldGFPcHRpb25zPFQ+IHtcclxuICBtZXRhOiBNZXRhRGF0YU1vZGVsO1xyXG4gIGluaGVyaXRlZFN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbDtcclxuICBvcHRpb25zV2l0aEluaGVyaXRhbmNlOiBTdG9yZU9wdGlvbnM8VD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0ZXMgYSBjbGFzcyB3aXRoIG5neHMgc3RhdGUgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU3RhdGU8VD4ob3B0aW9uczogU3RvcmVPcHRpb25zPFQ+KSB7XHJcbiAgZnVuY3Rpb24gZ2V0U3RhdGVPcHRpb25zKGluaGVyaXRlZFN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IFN0b3JlT3B0aW9uczxUPiB7XHJcbiAgICBjb25zdCBpbmhlcml0YW5jZU9wdGlvbnM6IFBhcnRpYWw8U3RvcmVPcHRpb25zPFQ+PiA9XHJcbiAgICAgIGluaGVyaXRlZFN0YXRlQ2xhc3NbTUVUQV9PUFRJT05TX0tFWV0gfHwge307XHJcbiAgICByZXR1cm4geyAuLi5pbmhlcml0YW5jZU9wdGlvbnMsIC4uLm9wdGlvbnMgfSBhcyBTdG9yZU9wdGlvbnM8VD47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtdXRhdGVNZXRhRGF0YShwYXJhbXM6IE11dGF0ZU1ldGFPcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG1ldGEsIGluaGVyaXRlZFN0YXRlQ2xhc3MsIG9wdGlvbnNXaXRoSW5oZXJpdGFuY2UgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGRlZmF1bHRzLCBuYW1lIH0gPSBvcHRpb25zV2l0aEluaGVyaXRhbmNlO1xyXG4gICAgY29uc3Qgc3RhdGVOYW1lOiBzdHJpbmcgfCBudWxsID1cclxuICAgICAgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gbmFtZSA6IChuYW1lICYmIG5hbWUuZ2V0TmFtZSgpKSB8fCBudWxsO1xyXG4gICAgU3RvcmVWYWxpZGF0b3JzLmNoZWNrQ29ycmVjdFN0YXRlTmFtZShzdGF0ZU5hbWUpO1xyXG5cclxuICAgIGlmIChpbmhlcml0ZWRTdGF0ZUNsYXNzLmhhc093blByb3BlcnR5KE1FVEFfS0VZKSkge1xyXG4gICAgICBjb25zdCBpbmhlcml0ZWRNZXRhOiBQYXJ0aWFsPE1ldGFEYXRhTW9kZWw+ID0gaW5oZXJpdGVkU3RhdGVDbGFzc1tNRVRBX0tFWV0gfHwge307XHJcbiAgICAgIG1ldGEuYWN0aW9ucyA9IHsgLi4ubWV0YS5hY3Rpb25zLCAuLi5pbmhlcml0ZWRNZXRhLmFjdGlvbnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICBtZXRhLmRlZmF1bHRzID0gZGVmYXVsdHM7XHJcbiAgICBtZXRhLm5hbWUgPSBzdGF0ZU5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKHRhcmdldDogU3RhdGVDbGFzcyk6IHZvaWQgPT4ge1xyXG4gICAgZW5zdXJlU3RhdGVDbGFzc0lzSW5qZWN0YWJsZSh0YXJnZXQpO1xyXG4gICAgY29uc3Qgc3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsID0gdGFyZ2V0O1xyXG4gICAgY29uc3QgbWV0YTogTWV0YURhdGFNb2RlbCA9IGVuc3VyZVN0b3JlTWV0YWRhdGEoc3RhdGVDbGFzcyk7XHJcbiAgICBjb25zdCBpbmhlcml0ZWRTdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGVDbGFzcyk7XHJcbiAgICBjb25zdCBvcHRpb25zV2l0aEluaGVyaXRhbmNlOiBTdG9yZU9wdGlvbnM8VD4gPSBnZXRTdGF0ZU9wdGlvbnMoaW5oZXJpdGVkU3RhdGVDbGFzcyk7XHJcbiAgICBtdXRhdGVNZXRhRGF0YSh7IG1ldGEsIGluaGVyaXRlZFN0YXRlQ2xhc3MsIG9wdGlvbnNXaXRoSW5oZXJpdGFuY2UgfSk7XHJcbiAgICBzdGF0ZUNsYXNzW01FVEFfT1BUSU9OU19LRVldID0gb3B0aW9uc1dpdGhJbmhlcml0YW5jZTtcclxuICB9O1xyXG59XHJcbiJdfQ==