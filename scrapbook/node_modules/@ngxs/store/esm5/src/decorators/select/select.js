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
export function Select(rawSelector) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return (/**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        var _a;
        /** @type {?} */
        var name = key.toString();
        /** @type {?} */
        var selectorId = "__" + name + "__selector";
        /** @type {?} */
        var selector = createSelectorFn(name, rawSelector, paths);
        Object.defineProperties(target, (_a = {},
            _a[selectorId] = {
                writable: true,
                enumerable: false,
                configurable: true
            },
            _a[name] = {
                enumerable: true,
                configurable: true,
                get: /**
                 * @return {?}
                 */
                function () {
                    return this[selectorId] || (this[selectorId] = createSelectObservable(selector));
                }
            },
            _a));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvZGVjb3JhdG9ycy9zZWxlY3Qvc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sV0FBVyxDQUFDOzs7Ozs7OztBQUtuRixNQUFNLFVBQVUsTUFBTSxDQUFJLFdBQWU7SUFBRSxlQUFrQjtTQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7UUFBbEIsOEJBQWtCOztJQUMzRDs7Ozs7SUFBTyxVQUFTLE1BQU0sRUFBRSxHQUFHOzs7WUFDbkIsSUFBSSxHQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUU7O1lBQzdCLFVBQVUsR0FBRyxPQUFLLElBQUksZUFBWTs7WUFDbEMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzVCLEdBQUMsVUFBVSxJQUFHO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixZQUFZLEVBQUUsSUFBSTthQUNuQjtZQUNELEdBQUMsSUFBSSxJQUFHO2dCQUNOLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsR0FBRzs7O2dCQUFIO29CQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7YUFDRjtnQkFDRCxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdE9ic2VydmFibGUsIGNyZWF0ZVNlbGVjdG9yRm4sIFByb3BlcnR5VHlwZSB9IGZyb20gJy4vc3ltYm9scyc7XHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZvciBzZWxlY3RpbmcgYSBzbGljZSBvZiBzdGF0ZSBmcm9tIHRoZSBzdG9yZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Q8VD4ocmF3U2VsZWN0b3I/OiBULCAuLi5wYXRoczogc3RyaW5nW10pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwga2V5KTogdm9pZCB7XHJcbiAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdG9ySWQgPSBgX18ke25hbWV9X19zZWxlY3RvcmA7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yRm4obmFtZSwgcmF3U2VsZWN0b3IsIHBhdGhzKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcclxuICAgICAgW3NlbGVjdG9ySWRdOiB7XHJcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIFtuYW1lXToge1xyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldCgpOiBQcm9wZXJ0eVR5cGU8VD4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0b3JJZF0gfHwgKHRoaXNbc2VsZWN0b3JJZF0gPSBjcmVhdGVTZWxlY3RPYnNlcnZhYmxlKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==