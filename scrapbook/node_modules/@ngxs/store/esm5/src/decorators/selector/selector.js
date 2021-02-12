/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../../configs/messages.config';
import { createSelector } from '../../utils/selector-utils';
/**
 * Decorator for memoizing a state selector.
 * @template T
 * @param {?=} selectors
 * @return {?}
 */
export function Selector(selectors) {
    return (/**
     * @template U
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function (target, key, descriptor) {
        /** @type {?} */
        var isNotMethod = !(descriptor && descriptor.value !== null);
        if (isNotMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.SELECTOR_DECORATOR]());
        }
        /** @type {?} */
        var originalFn = descriptor.value;
        /** @type {?} */
        var memoizedFn = createSelector(selectors, (/** @type {?} */ (originalFn)), {
            containerClass: target,
            selectorName: key.toString(),
            getSelectorOptions: /**
             * @return {?}
             */
            function () {
                return {};
            }
        });
        /** @type {?} */
        var newDescriptor = {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                return memoizedFn;
            }
        };
        // Add hidden property to descriptor
        ((/** @type {?} */ (newDescriptor)))['originalFn'] = originalFn;
        return newDescriptor;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3NlbGVjdG9yL3NlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU01RCxNQUFNLFVBQVUsUUFBUSxDQUFJLFNBQWU7SUFDekM7Ozs7Ozs7SUFBTyxVQUNMLE1BQVcsRUFDWCxHQUFvQixFQUNwQixVQUF1RDs7WUFFakQsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFFOUQsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEU7O1lBRUssVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLOztZQUM3QixVQUFVLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxtQkFBQSxVQUFVLEVBQU8sRUFBRTtZQUM5RCxjQUFjLEVBQUUsTUFBTTtZQUN0QixZQUFZLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUM1QixrQkFBa0I7Ozs7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQztTQUNGLENBQUM7O1lBQ0ksYUFBYSxHQUFHO1lBQ3BCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Ozs7Z0JBQ0QsT0FBTyxVQUFVLENBQUM7WUFDcEIsQ0FBQztTQUNGO1FBQ0Qsb0NBQW9DO1FBQ3BDLENBQUMsbUJBQUssYUFBYSxFQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDaEQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJy4uLy4uL3V0aWxzL3NlbGVjdG9yLXV0aWxzJztcclxuaW1wb3J0IHsgU2VsZWN0b3JTcGVjLCBTZWxlY3RvclR5cGUgfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmb3IgbWVtb2l6aW5nIGEgc3RhdGUgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0b3I8VD4oc2VsZWN0b3JzPzogVFtdKTogU2VsZWN0b3JUeXBlPFQ+IHtcclxuICByZXR1cm4gPFU+KFxyXG4gICAgdGFyZ2V0OiBhbnksXHJcbiAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcclxuICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFNlbGVjdG9yU3BlYzxULCBVPj5cclxuICApOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxTZWxlY3RvclNwZWM8VCwgVT4+IHwgdm9pZCA9PiB7XHJcbiAgICBjb25zdCBpc05vdE1ldGhvZCA9ICEoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlICE9PSBudWxsKTtcclxuXHJcbiAgICBpZiAoaXNOb3RNZXRob2QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKENPTkZJR19NRVNTQUdFU1tWQUxJREFUSU9OX0NPREUuU0VMRUNUT1JfREVDT1JBVE9SXSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbEZuID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgIGNvbnN0IG1lbW9pemVkRm4gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RvcnMsIG9yaWdpbmFsRm4gYXMgYW55LCB7XHJcbiAgICAgIGNvbnRhaW5lckNsYXNzOiB0YXJnZXQsXHJcbiAgICAgIHNlbGVjdG9yTmFtZToga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgIGdldFNlbGVjdG9yT3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3RGVzY3JpcHRvciA9IHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkRm47XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBBZGQgaGlkZGVuIHByb3BlcnR5IHRvIGRlc2NyaXB0b3JcclxuICAgICg8YW55Pm5ld0Rlc2NyaXB0b3IpWydvcmlnaW5hbEZuJ10gPSBvcmlnaW5hbEZuO1xyXG4gICAgcmV0dXJuIG5ld0Rlc2NyaXB0b3I7XHJcbiAgfTtcclxufVxyXG4iXX0=