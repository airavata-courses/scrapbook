/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ensureStoreMetadata } from '../internal/internals';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
/**
 * Decorates a method with a action information.
 * @param {?} actions
 * @param {?=} options
 * @return {?}
 */
export function Action(actions, options) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        var e_1, _a;
        /** @type {?} */
        var isStaticMethod = target.hasOwnProperty('prototype');
        if (isStaticMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.ACTION_DECORATOR]());
        }
        /** @type {?} */
        var meta = ensureStoreMetadata(target.constructor);
        if (!Array.isArray(actions)) {
            actions = [actions];
        }
        try {
            for (var actions_1 = tslib_1.__values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                var action = actions_1_1.value;
                /** @type {?} */
                var type = action.type;
                if (!meta.actions[type]) {
                    meta.actions[type] = [];
                }
                meta.actions[type].push({
                    fn: name,
                    options: options || {},
                    type: type
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvZGVjb3JhdG9ycy9hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBSzlFLE1BQU0sVUFBVSxNQUFNLENBQ3BCLE9BQWtDLEVBQ2xDLE9BQXVCO0lBRXZCOzs7OztJQUFPLFVBQUMsTUFBVyxFQUFFLElBQXFCOzs7WUFDbEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBRXpELElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0RTs7WUFFSyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjs7WUFFRCxLQUFxQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUF6QixJQUFNLE1BQU0sb0JBQUE7O29CQUNULElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtnQkFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDdEIsRUFBRSxFQUFFLElBQUk7b0JBQ1IsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO29CQUN0QixJQUFJLE1BQUE7aUJBQ0wsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7OztJQUNILENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnN1cmVTdG9yZU1ldGFkYXRhIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvc3ltYm9scyc7XHJcbmltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRlcyBhIG1ldGhvZCB3aXRoIGEgYWN0aW9uIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvbihcclxuICBhY3Rpb25zOiBBY3Rpb25UeXBlIHwgQWN0aW9uVHlwZVtdLFxyXG4gIG9wdGlvbnM/OiBBY3Rpb25PcHRpb25zXHJcbik6IE1ldGhvZERlY29yYXRvciB7XHJcbiAgcmV0dXJuICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nIHwgc3ltYm9sKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBpc1N0YXRpY01ldGhvZCA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XHJcblxyXG4gICAgaWYgKGlzU3RhdGljTWV0aG9kKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLkFDVElPTl9ERUNPUkFUT1JdKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ldGEgPSBlbnN1cmVTdG9yZU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3Rvcik7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbnMpKSB7XHJcbiAgICAgIGFjdGlvbnMgPSBbYWN0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2YgYWN0aW9ucykge1xyXG4gICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGU7XHJcblxyXG4gICAgICBpZiAoIW1ldGEuYWN0aW9uc1t0eXBlXSkge1xyXG4gICAgICAgIG1ldGEuYWN0aW9uc1t0eXBlXSA9IFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtZXRhLmFjdGlvbnNbdHlwZV0ucHVzaCh7XHJcbiAgICAgICAgZm46IG5hbWUsXHJcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fSxcclxuICAgICAgICB0eXBlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19