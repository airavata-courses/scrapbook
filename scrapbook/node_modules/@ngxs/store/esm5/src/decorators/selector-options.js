/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { selectorOptionsMetaAccessor } from '../utils/selector-utils';
/**
 * Decorator for setting selector options at a method or class level.
 * @param {?} options
 * @return {?}
 */
export function SelectorOptions(options) {
    return (/** @type {?} */ (((/**
     * @template T
     * @param {?} target
     * @param {?} methodName
     * @param {?} descriptor
     * @return {?}
     */
    function decorate(target, methodName, descriptor) {
        if (methodName) {
            // Method Decorator
            /** @type {?} */
            var originalFn = descriptor.value || ((/** @type {?} */ (descriptor))).originalFn;
            if (originalFn) {
                selectorOptionsMetaAccessor.defineOptions(originalFn, options);
            }
        }
        else {
            // Class Decorator
            selectorOptionsMetaAccessor.defineOptions(target, options);
        }
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3Itb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2RlY29yYXRvcnMvc2VsZWN0b3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUt0RSxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQThCO0lBQzVELE9BQU8sbUJBQWtDOzs7Ozs7O0lBQ3ZDLFNBQVMsUUFBUSxDQUNmLE1BQVcsRUFDWCxVQUFrQixFQUNsQixVQUFzQztRQUV0QyxJQUFJLFVBQVUsRUFBRTs7O2dCQUVSLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQUssVUFBVSxFQUFBLENBQUMsQ0FBQyxVQUFVO1lBQ25FLElBQUksVUFBVSxFQUFFO2dCQUNkLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDaEU7U0FDRjthQUFNO1lBQ0wsa0JBQWtCO1lBQ2xCLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDLEVBQ0YsRUFBQSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYXJlZFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XHJcbmltcG9ydCB7IHNlbGVjdG9yT3B0aW9uc01ldGFBY2Nlc3NvciB9IGZyb20gJy4uL3V0aWxzL3NlbGVjdG9yLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZm9yIHNldHRpbmcgc2VsZWN0b3Igb3B0aW9ucyBhdCBhIG1ldGhvZCBvciBjbGFzcyBsZXZlbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rvck9wdGlvbnMob3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zKSB7XHJcbiAgcmV0dXJuIDxDbGFzc0RlY29yYXRvciAmIE1ldGhvZERlY29yYXRvcj4oXHJcbiAgICBmdW5jdGlvbiBkZWNvcmF0ZTxUPihcclxuICAgICAgdGFyZ2V0OiBhbnksXHJcbiAgICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcclxuICAgICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8VD5cclxuICAgICkge1xyXG4gICAgICBpZiAobWV0aG9kTmFtZSkge1xyXG4gICAgICAgIC8vIE1ldGhvZCBEZWNvcmF0b3JcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEZuID0gZGVzY3JpcHRvci52YWx1ZSB8fCAoPGFueT5kZXNjcmlwdG9yKS5vcmlnaW5hbEZuO1xyXG4gICAgICAgIGlmIChvcmlnaW5hbEZuKSB7XHJcbiAgICAgICAgICBzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IuZGVmaW5lT3B0aW9ucyhvcmlnaW5hbEZuLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2xhc3MgRGVjb3JhdG9yXHJcbiAgICAgICAgc2VsZWN0b3JPcHRpb25zTWV0YUFjY2Vzc29yLmRlZmluZU9wdGlvbnModGFyZ2V0LCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIl19