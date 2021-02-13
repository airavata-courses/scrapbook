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
    const length = prev.length;
    for (let i = 0; i < length; i++) {
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
export function memoize(func, equalityCheck = defaultEqualityCheck) {
    /** @type {?} */
    let lastArgs = null;
    /** @type {?} */
    let lastResult = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbIm1lbW9pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0IsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELFNBQVMsMEJBQTBCLENBQ2pDLGFBQTBDLEVBQzFDLElBQXVCLEVBQ3ZCLElBQXVCO0lBRXZCLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNqRSxPQUFPLEtBQUssQ0FBQztLQUNkOzs7VUFHSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsSUFBTyxFQUNQLGFBQWEsR0FBRyxvQkFBb0I7O1FBRWhDLFFBQVEsR0FBc0IsSUFBSTs7UUFDbEMsVUFBVSxHQUFRLElBQUk7Ozs7O0lBRTFCLFNBQVMsUUFBUTtRQUNmLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ25FLHdEQUF3RDtZQUN4RCxVQUFVLEdBQUcsQ0FBQyxtQkFBVSxJQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxDQUFDLG1CQUFLLFFBQVEsRUFBQSxDQUFDLENBQUMsS0FBSzs7O0lBQUc7UUFDdEIsd0RBQXdEO1FBQ3hELFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUEsQ0FBQztJQUNGLE9BQU8sbUJBQUEsUUFBUSxFQUFLLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGE6IGFueSwgYjogYW55KSB7XHJcbiAgcmV0dXJuIGEgPT09IGI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKFxyXG4gIGVxdWFsaXR5Q2hlY2s6IChhOiBhbnksIGI6IGFueSkgPT4gYm9vbGVhbixcclxuICBwcmV2OiBJQXJndW1lbnRzIHwgbnVsbCxcclxuICBuZXh0OiBJQXJndW1lbnRzIHwgbnVsbFxyXG4pIHtcclxuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cclxuICBjb25zdCBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZW1vaXplIGEgZnVuY3Rpb24gb24gaXRzIGxhc3QgaW5wdXRzIG9ubHkuXHJcbiAqIE9yaWdpbmFsbHkgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3JlZHV4anMvcmVzZWxlY3QvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXHJcbiAqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXHJcbiAgZnVuYzogVCxcclxuICBlcXVhbGl0eUNoZWNrID0gZGVmYXVsdEVxdWFsaXR5Q2hlY2tcclxuKTogVCB7XHJcbiAgbGV0IGxhc3RBcmdzOiBJQXJndW1lbnRzIHwgbnVsbCA9IG51bGw7XHJcbiAgbGV0IGxhc3RSZXN1bHQ6IGFueSA9IG51bGw7XHJcbiAgLy8gd2UgcmVmZXJlbmNlIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XHJcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XHJcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXHJcbiAgICAgIGxhc3RSZXN1bHQgPSAoPEZ1bmN0aW9uPmZ1bmMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcclxuICB9XHJcbiAgKDxhbnk+bWVtb2l6ZWQpLnJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBUaGUgaGlkZGVuIChmb3Igbm93KSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBtZW1vaXphdGlvblxyXG4gICAgbGFzdEFyZ3MgPSBudWxsO1xyXG4gICAgbGFzdFJlc3VsdCA9IG51bGw7XHJcbiAgfTtcclxuICByZXR1cm4gbWVtb2l6ZWQgYXMgVDtcclxufVxyXG4iXX0=