/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function defaultEqualityCheck(a, b) {
    return a === b;
}
/**
 * @param {?} equalityCheck
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
        return false;
    }
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    /** @type {?} */
    var length = prev.length;
    for (var i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Memoize a function on its last inputs only.
 * Originally from: https://github.com/reduxjs/reselect/blob/master/src/index.js
 *
 * @ignore
 * @template T
 * @param {?} func
 * @param {?=} equalityCheck
 * @return {?}
 */
export function memoize(func, equalityCheck) {
    if (equalityCheck === void 0) { equalityCheck = defaultEqualityCheck; }
    /** @type {?} */
    var lastArgs = null;
    /** @type {?} */
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    /**
     * @return {?}
     */
    function memoized() {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
            // apply arguments instead of spreading for performance.
            lastResult = ((/** @type {?} */ (func))).apply(null, arguments);
        }
        lastArgs = arguments;
        return lastResult;
    }
    ((/** @type {?} */ (memoized))).reset = (/**
     * @return {?}
     */
    function () {
        // The hidden (for now) ability to reset the memoization
        lastArgs = null;
        lastResult = null;
    });
    return (/** @type {?} */ (memoized));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbIm1lbW9pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0IsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELFNBQVMsMEJBQTBCLENBQ2pDLGFBQTBDLEVBQzFDLElBQXVCLEVBQ3ZCLElBQXVCO0lBRXZCLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNqRSxPQUFPLEtBQUssQ0FBQztLQUNkOzs7UUFHSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsSUFBTyxFQUNQLGFBQW9DO0lBQXBDLDhCQUFBLEVBQUEsb0NBQW9DOztRQUVoQyxRQUFRLEdBQXNCLElBQUk7O1FBQ2xDLFVBQVUsR0FBUSxJQUFJOzs7OztJQUUxQixTQUFTLFFBQVE7UUFDZixJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRTtZQUNuRSx3REFBd0Q7WUFDeEQsVUFBVSxHQUFHLENBQUMsbUJBQVUsSUFBSSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsQ0FBQyxtQkFBSyxRQUFRLEVBQUEsQ0FBQyxDQUFDLEtBQUs7OztJQUFHO1FBQ3RCLHdEQUF3RDtRQUN4RCxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQyxDQUFBLENBQUM7SUFDRixPQUFPLG1CQUFBLFFBQVEsRUFBSyxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhOiBhbnksIGI6IGFueSkge1xyXG4gIHJldHVybiBhID09PSBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChcclxuICBlcXVhbGl0eUNoZWNrOiAoYTogYW55LCBiOiBhbnkpID0+IGJvb2xlYW4sXHJcbiAgcHJldjogSUFyZ3VtZW50cyB8IG51bGwsXHJcbiAgbmV4dDogSUFyZ3VtZW50cyB8IG51bGxcclxuKSB7XHJcbiAgaWYgKHByZXYgPT09IG51bGwgfHwgbmV4dCA9PT0gbnVsbCB8fCBwcmV2Lmxlbmd0aCAhPT0gbmV4dC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXHJcbiAgY29uc3QgbGVuZ3RoID0gcHJldi5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWVtb2l6ZSBhIGZ1bmN0aW9uIG9uIGl0cyBsYXN0IGlucHV0cyBvbmx5LlxyXG4gKiBPcmlnaW5hbGx5IGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR1eGpzL3Jlc2VsZWN0L2Jsb2IvbWFzdGVyL3NyYy9pbmRleC5qc1xyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVtb2l6ZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxyXG4gIGZ1bmM6IFQsXHJcbiAgZXF1YWxpdHlDaGVjayA9IGRlZmF1bHRFcXVhbGl0eUNoZWNrXHJcbik6IFQge1xyXG4gIGxldCBsYXN0QXJnczogSUFyZ3VtZW50cyB8IG51bGwgPSBudWxsO1xyXG4gIGxldCBsYXN0UmVzdWx0OiBhbnkgPSBudWxsO1xyXG4gIC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xyXG4gICAgaWYgKCFhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChlcXVhbGl0eUNoZWNrLCBsYXN0QXJncywgYXJndW1lbnRzKSkge1xyXG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxyXG4gICAgICBsYXN0UmVzdWx0ID0gKDxGdW5jdGlvbj5mdW5jKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xyXG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XHJcbiAgfVxyXG4gICg8YW55Pm1lbW9pemVkKS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gVGhlIGhpZGRlbiAoZm9yIG5vdykgYWJpbGl0eSB0byByZXNldCB0aGUgbWVtb2l6YXRpb25cclxuICAgIGxhc3RBcmdzID0gbnVsbDtcclxuICAgIGxhc3RSZXN1bHQgPSBudWxsO1xyXG4gIH07XHJcbiAgcmV0dXJuIG1lbW9pemVkIGFzIFQ7XHJcbn1cclxuIl19