/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const inheritanceOptions = inheritedStateClass[META_OPTIONS_KEY] || {};
        return (/** @type {?} */ (Object.assign({}, inheritanceOptions, options)));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function mutateMetaData(params) {
        const { meta, inheritedStateClass, optionsWithInheritance } = params;
        const { children, defaults, name } = optionsWithInheritance;
        /** @type {?} */
        const stateName = typeof name === 'string' ? name : (name && name.getName()) || null;
        StoreValidators.checkCorrectStateName(stateName);
        if (inheritedStateClass.hasOwnProperty(META_KEY)) {
            /** @type {?} */
            const inheritedMeta = inheritedStateClass[META_KEY] || {};
            meta.actions = Object.assign({}, meta.actions, inheritedMeta.actions);
        }
        meta.children = children;
        meta.defaults = defaults;
        meta.name = stateName;
    }
    return (/**
     * @param {?} target
     * @return {?}
     */
    (target) => {
        ensureStateClassIsInjectable(target);
        /** @type {?} */
        const stateClass = target;
        /** @type {?} */
        const meta = ensureStoreMetadata(stateClass);
        /** @type {?} */
        const inheritedStateClass = Object.getPrototypeOf(stateClass);
        /** @type {?} */
        const optionsWithInheritance = getStateOptions(inheritedStateClass);
        mutateMetaData({ meta, inheritedStateClass, optionsWithInheritance });
        stateClass[META_OPTIONS_KEY] = optionsWithInheritance;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQXFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUV2RixnQ0FJQzs7O0lBSEMsaUNBQW9COztJQUNwQixnREFBd0M7O0lBQ3hDLG1EQUF3Qzs7Ozs7Ozs7QUFNMUMsTUFBTSxVQUFVLEtBQUssQ0FBSSxPQUF3Qjs7Ozs7SUFDL0MsU0FBUyxlQUFlLENBQUMsbUJBQXVDOztjQUN4RCxrQkFBa0IsR0FDdEIsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFO1FBQzdDLE9BQU8scUNBQUssa0JBQWtCLEVBQUssT0FBTyxHQUFxQixDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsU0FBUyxjQUFjLENBQUMsTUFBNEI7Y0FDNUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxNQUFNO2NBQzlELEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxzQkFBc0I7O2NBQ3JELFNBQVMsR0FDYixPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSTtRQUNwRSxlQUFlLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUMxQyxhQUFhLEdBQTJCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakYsSUFBSSxDQUFDLE9BQU8scUJBQVEsSUFBSSxDQUFDLE9BQU8sRUFBSyxhQUFhLENBQUMsT0FBTyxDQUFFLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7SUFBTyxDQUFDLE1BQWtCLEVBQVEsRUFBRTtRQUNsQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Y0FDL0IsVUFBVSxHQUF1QixNQUFNOztjQUN2QyxJQUFJLEdBQWtCLG1CQUFtQixDQUFDLFVBQVUsQ0FBQzs7Y0FDckQsbUJBQW1CLEdBQXVCLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOztjQUMzRSxzQkFBc0IsR0FBb0IsZUFBZSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BGLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsc0JBQXNCLENBQUM7SUFDeEQsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlQ2xhc3MgfSBmcm9tICdAbmd4cy9zdG9yZS9pbnRlcm5hbHMnO1xyXG5cclxuaW1wb3J0IHsgZW5zdXJlU3RvcmVNZXRhZGF0YSwgTWV0YURhdGFNb2RlbCwgU3RhdGVDbGFzc0ludGVybmFsIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgTUVUQV9LRVksIE1FVEFfT1BUSU9OU19LRVksIFN0b3JlT3B0aW9ucyB9IGZyb20gJy4uL3N5bWJvbHMnO1xyXG5pbXBvcnQgeyBTdG9yZVZhbGlkYXRvcnMgfSBmcm9tICcuLi91dGlscy9zdG9yZS12YWxpZGF0b3JzJztcclxuaW1wb3J0IHsgZW5zdXJlU3RhdGVDbGFzc0lzSW5qZWN0YWJsZSB9IGZyb20gJy4uL2l2eS9lbnN1cmUtc3RhdGUtY2xhc3MtaXMtaW5qZWN0YWJsZSc7XHJcblxyXG5pbnRlcmZhY2UgTXV0YXRlTWV0YU9wdGlvbnM8VD4ge1xyXG4gIG1ldGE6IE1ldGFEYXRhTW9kZWw7XHJcbiAgaW5oZXJpdGVkU3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsO1xyXG4gIG9wdGlvbnNXaXRoSW5oZXJpdGFuY2U6IFN0b3JlT3B0aW9uczxUPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRlcyBhIGNsYXNzIHdpdGggbmd4cyBzdGF0ZSBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZTxUPihvcHRpb25zOiBTdG9yZU9wdGlvbnM8VD4pIHtcclxuICBmdW5jdGlvbiBnZXRTdGF0ZU9wdGlvbnMoaW5oZXJpdGVkU3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsKTogU3RvcmVPcHRpb25zPFQ+IHtcclxuICAgIGNvbnN0IGluaGVyaXRhbmNlT3B0aW9uczogUGFydGlhbDxTdG9yZU9wdGlvbnM8VD4+ID1cclxuICAgICAgaW5oZXJpdGVkU3RhdGVDbGFzc1tNRVRBX09QVElPTlNfS0VZXSB8fCB7fTtcclxuICAgIHJldHVybiB7IC4uLmluaGVyaXRhbmNlT3B0aW9ucywgLi4ub3B0aW9ucyB9IGFzIFN0b3JlT3B0aW9uczxUPjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG11dGF0ZU1ldGFEYXRhKHBhcmFtczogTXV0YXRlTWV0YU9wdGlvbnM8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbWV0YSwgaW5oZXJpdGVkU3RhdGVDbGFzcywgb3B0aW9uc1dpdGhJbmhlcml0YW5jZSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgZGVmYXVsdHMsIG5hbWUgfSA9IG9wdGlvbnNXaXRoSW5oZXJpdGFuY2U7XHJcbiAgICBjb25zdCBzdGF0ZU5hbWU6IHN0cmluZyB8IG51bGwgPVxyXG4gICAgICB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgPyBuYW1lIDogKG5hbWUgJiYgbmFtZS5nZXROYW1lKCkpIHx8IG51bGw7XHJcbiAgICBTdG9yZVZhbGlkYXRvcnMuY2hlY2tDb3JyZWN0U3RhdGVOYW1lKHN0YXRlTmFtZSk7XHJcblxyXG4gICAgaWYgKGluaGVyaXRlZFN0YXRlQ2xhc3MuaGFzT3duUHJvcGVydHkoTUVUQV9LRVkpKSB7XHJcbiAgICAgIGNvbnN0IGluaGVyaXRlZE1ldGE6IFBhcnRpYWw8TWV0YURhdGFNb2RlbD4gPSBpbmhlcml0ZWRTdGF0ZUNsYXNzW01FVEFfS0VZXSB8fCB7fTtcclxuICAgICAgbWV0YS5hY3Rpb25zID0geyAuLi5tZXRhLmFjdGlvbnMsIC4uLmluaGVyaXRlZE1ldGEuYWN0aW9ucyB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIG1ldGEuZGVmYXVsdHMgPSBkZWZhdWx0cztcclxuICAgIG1ldGEubmFtZSA9IHN0YXRlTmFtZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAodGFyZ2V0OiBTdGF0ZUNsYXNzKTogdm9pZCA9PiB7XHJcbiAgICBlbnN1cmVTdGF0ZUNsYXNzSXNJbmplY3RhYmxlKHRhcmdldCk7XHJcbiAgICBjb25zdCBzdGF0ZUNsYXNzOiBTdGF0ZUNsYXNzSW50ZXJuYWwgPSB0YXJnZXQ7XHJcbiAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gZW5zdXJlU3RvcmVNZXRhZGF0YShzdGF0ZUNsYXNzKTtcclxuICAgIGNvbnN0IGluaGVyaXRlZFN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzdGF0ZUNsYXNzKTtcclxuICAgIGNvbnN0IG9wdGlvbnNXaXRoSW5oZXJpdGFuY2U6IFN0b3JlT3B0aW9uczxUPiA9IGdldFN0YXRlT3B0aW9ucyhpbmhlcml0ZWRTdGF0ZUNsYXNzKTtcclxuICAgIG11dGF0ZU1ldGFEYXRhKHsgbWV0YSwgaW5oZXJpdGVkU3RhdGVDbGFzcywgb3B0aW9uc1dpdGhJbmhlcml0YW5jZSB9KTtcclxuICAgIHN0YXRlQ2xhc3NbTUVUQV9PUFRJT05TX0tFWV0gPSBvcHRpb25zV2l0aEluaGVyaXRhbmNlO1xyXG4gIH07XHJcbn1cclxuIl19