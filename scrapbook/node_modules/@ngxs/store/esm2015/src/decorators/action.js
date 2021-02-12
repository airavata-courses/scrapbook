/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    (target, name) => {
        /** @type {?} */
        const isStaticMethod = target.hasOwnProperty('prototype');
        if (isStaticMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.ACTION_DECORATOR]());
        }
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        if (!Array.isArray(actions)) {
            actions = [actions];
        }
        for (const action of actions) {
            /** @type {?} */
            const type = action.type;
            if (!meta.actions[type]) {
                meta.actions[type] = [];
            }
            meta.actions[type].push({
                fn: name,
                options: options || {},
                type
            });
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvZGVjb3JhdG9ycy9hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFLOUUsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsT0FBa0MsRUFDbEMsT0FBdUI7SUFFdkI7Ozs7O0lBQU8sQ0FBQyxNQUFXLEVBQUUsSUFBcUIsRUFBUSxFQUFFOztjQUM1QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFFekQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFOztjQUVLLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7O2tCQUN0QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7WUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLEVBQUUsRUFBRSxJQUFJO2dCQUNSLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRTtnQkFDdEIsSUFBSTthQUNMLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuc3VyZVN0b3JlTWV0YWRhdGEgfSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBBY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9zeW1ib2xzJztcclxuaW1wb3J0IHsgQ09ORklHX01FU1NBR0VTLCBWQUxJREFUSU9OX0NPREUgfSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XHJcblxyXG4vKipcclxuICogRGVjb3JhdGVzIGEgbWV0aG9kIHdpdGggYSBhY3Rpb24gaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uKFxyXG4gIGFjdGlvbnM6IEFjdGlvblR5cGUgfCBBY3Rpb25UeXBlW10sXHJcbiAgb3B0aW9ucz86IEFjdGlvbk9wdGlvbnNcclxuKTogTWV0aG9kRGVjb3JhdG9yIHtcclxuICByZXR1cm4gKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcgfCBzeW1ib2wpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGlzU3RhdGljTWV0aG9kID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcclxuXHJcbiAgICBpZiAoaXNTdGF0aWNNZXRob2QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKENPTkZJR19NRVNTQUdFU1tWQUxJREFUSU9OX0NPREUuQUNUSU9OX0RFQ09SQVRPUl0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWV0YSA9IGVuc3VyZVN0b3JlTWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcclxuICAgICAgYWN0aW9ucyA9IFthY3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZTtcclxuXHJcbiAgICAgIGlmICghbWV0YS5hY3Rpb25zW3R5cGVdKSB7XHJcbiAgICAgICAgbWV0YS5hY3Rpb25zW3R5cGVdID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1ldGEuYWN0aW9uc1t0eXBlXS5wdXNoKHtcclxuICAgICAgICBmbjogbmFtZSxcclxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxyXG4gICAgICAgIHR5cGVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=