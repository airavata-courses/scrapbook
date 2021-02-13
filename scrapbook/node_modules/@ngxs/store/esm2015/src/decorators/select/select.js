/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelectObservable, createSelectorFn } from './symbols';
/**
 * Decorator for selecting a slice of state from the store.
 * @template T
 * @param {?=} rawSelector
 * @param {...?} paths
 * @return {?}
 */
export function Select(rawSelector, ...paths) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        const name = key.toString();
        /** @type {?} */
        const selectorId = `__${name}__selector`;
        /** @type {?} */
        const selector = createSelectorFn(name, rawSelector, paths);
        Object.defineProperties(target, {
            [selectorId]: {
                writable: true,
                enumerable: false,
                configurable: true
            },
            [name]: {
                enumerable: true,
                configurable: true,
                /**
                 * @return {?}
                 */
                get() {
                    return this[selectorId] || (this[selectorId] = createSelectObservable(selector));
                }
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvZGVjb3JhdG9ycy9zZWxlY3Qvc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sV0FBVyxDQUFDOzs7Ozs7OztBQUtuRixNQUFNLFVBQVUsTUFBTSxDQUFJLFdBQWUsRUFBRSxHQUFHLEtBQWU7SUFDM0Q7Ozs7O0lBQU8sVUFBUyxNQUFNLEVBQUUsR0FBRzs7Y0FDbkIsSUFBSSxHQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUU7O2NBQzdCLFVBQVUsR0FBRyxLQUFLLElBQUksWUFBWTs7Y0FDbEMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsS0FBSztnQkFDakIsWUFBWSxFQUFFLElBQUk7YUFDbkI7WUFDRCxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNOLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTs7OztnQkFDbEIsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0T2JzZXJ2YWJsZSwgY3JlYXRlU2VsZWN0b3JGbiwgUHJvcGVydHlUeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZm9yIHNlbGVjdGluZyBhIHNsaWNlIG9mIHN0YXRlIGZyb20gdGhlIHN0b3JlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDxUPihyYXdTZWxlY3Rvcj86IFQsIC4uLnBhdGhzOiBzdHJpbmdbXSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBrZXkpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgY29uc3Qgc2VsZWN0b3JJZCA9IGBfXyR7bmFtZX1fX3NlbGVjdG9yYDtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JGbihuYW1lLCByYXdTZWxlY3RvciwgcGF0aHMpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwge1xyXG4gICAgICBbc2VsZWN0b3JJZF06IHtcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgW25hbWVdOiB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0KCk6IFByb3BlcnR5VHlwZTxUPiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1tzZWxlY3RvcklkXSB8fCAodGhpc1tzZWxlY3RvcklkXSA9IGNyZWF0ZVNlbGVjdE9ic2VydmFibGUoc2VsZWN0b3IpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19