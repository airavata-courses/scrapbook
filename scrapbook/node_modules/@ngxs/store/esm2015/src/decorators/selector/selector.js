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
    (target, key, descriptor) => {
        /** @type {?} */
        const isNotMethod = !(descriptor && descriptor.value !== null);
        if (isNotMethod) {
            throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.SELECTOR_DECORATOR]());
        }
        /** @type {?} */
        const originalFn = descriptor.value;
        /** @type {?} */
        const memoizedFn = createSelector(selectors, (/** @type {?} */ (originalFn)), {
            containerClass: target,
            selectorName: key.toString(),
            /**
             * @return {?}
             */
            getSelectorOptions() {
                return {};
            }
        });
        /** @type {?} */
        const newDescriptor = {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                return memoizedFn;
            }
        };
        // Add hidden property to descriptor
        ((/** @type {?} */ (newDescriptor)))['originalFn'] = originalFn;
        return newDescriptor;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3NlbGVjdG9yL3NlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU01RCxNQUFNLFVBQVUsUUFBUSxDQUFJLFNBQWU7SUFDekM7Ozs7Ozs7SUFBTyxDQUNMLE1BQVcsRUFDWCxHQUFvQixFQUNwQixVQUF1RCxFQUNILEVBQUU7O2NBQ2hELFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDO1FBRTlELElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFOztjQUVLLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSzs7Y0FDN0IsVUFBVSxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsbUJBQUEsVUFBVSxFQUFPLEVBQUU7WUFDOUQsY0FBYyxFQUFFLE1BQU07WUFDdEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Ozs7WUFDNUIsa0JBQWtCO2dCQUNoQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7U0FDRixDQUFDOztjQUNJLGFBQWEsR0FBRztZQUNwQixZQUFZLEVBQUUsSUFBSTs7OztZQUNsQixHQUFHO2dCQUNELE9BQU8sVUFBVSxDQUFDO1lBQ3BCLENBQUM7U0FDRjtRQUNELG9DQUFvQztRQUNwQyxDQUFDLG1CQUFLLGFBQWEsRUFBQSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2hELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05GSUdfTUVTU0FHRVMsIFZBTElEQVRJT05fQ09ERSB9IGZyb20gJy4uLy4uL2NvbmZpZ3MvbWVzc2FnZXMuY29uZmlnJztcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi91dGlscy9zZWxlY3Rvci11dGlscyc7XHJcbmltcG9ydCB7IFNlbGVjdG9yU3BlYywgU2VsZWN0b3JUeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZm9yIG1lbW9pemluZyBhIHN0YXRlIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdG9yPFQ+KHNlbGVjdG9ycz86IFRbXSk6IFNlbGVjdG9yVHlwZTxUPiB7XHJcbiAgcmV0dXJuIDxVPihcclxuICAgIHRhcmdldDogYW55LFxyXG4gICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgICBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxTZWxlY3RvclNwZWM8VCwgVT4+XHJcbiAgKTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8U2VsZWN0b3JTcGVjPFQsIFU+PiB8IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgaXNOb3RNZXRob2QgPSAhKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZSAhPT0gbnVsbCk7XHJcblxyXG4gICAgaWYgKGlzTm90TWV0aG9kKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLlNFTEVDVE9SX0RFQ09SQVRPUl0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxGbiA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICBjb25zdCBtZW1vaXplZEZuID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0b3JzLCBvcmlnaW5hbEZuIGFzIGFueSwge1xyXG4gICAgICBjb250YWluZXJDbGFzczogdGFyZ2V0LFxyXG4gICAgICBzZWxlY3Rvck5hbWU6IGtleS50b1N0cmluZygpLFxyXG4gICAgICBnZXRTZWxlY3Rvck9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0Rlc2NyaXB0b3IgPSB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiBtZW1vaXplZEZuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gQWRkIGhpZGRlbiBwcm9wZXJ0eSB0byBkZXNjcmlwdG9yXHJcbiAgICAoPGFueT5uZXdEZXNjcmlwdG9yKVsnb3JpZ2luYWxGbiddID0gb3JpZ2luYWxGbjtcclxuICAgIHJldHVybiBuZXdEZXNjcmlwdG9yO1xyXG4gIH07XHJcbn1cclxuIl19