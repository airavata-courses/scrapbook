/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} items - Specific items to append to the end of an array
 * @return {?}
 */
export function append(items) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function appendOperator(existing) {
        // If `items` is `undefined` or `null` or `[]` but `existing` is provided
        // just return `existing`
        /** @type {?} */
        const itemsNotProvidedButExistingIs = (!items || !items.length) && existing;
        if (itemsNotProvidedButExistingIs) {
            return (/** @type {?} */ (existing));
        }
        if (Array.isArray(existing)) {
            return existing.concat((/** @type {?} */ (items)));
        }
        // For example if some property is added dynamically
        // and didn't exist before thus it's not `ArrayLike`
        return (/** @type {?} */ (items));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvb3BlcmF0b3JzLyIsInNvdXJjZXMiOlsiYXBwZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sVUFBVSxNQUFNLENBQUksS0FBVTtJQUNsQzs7OztJQUFPLFNBQVMsY0FBYyxDQUFDLFFBQW1DOzs7O2NBRzFELDZCQUE2QixHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUTtRQUMzRSxJQUFJLDZCQUE2QixFQUFFO1lBQ2pDLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxLQUFLLEVBQW1CLENBQUMsQ0FBQztTQUNsRDtRQUVELG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsT0FBTyxtQkFBQSxLQUFLLEVBQW1CLENBQUM7SUFDbEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFJlcGFpclR5cGUgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaXRlbXMgLSBTcGVjaWZpYyBpdGVtcyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiBhbiBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZDxUPihpdGVtczogVFtdKTogU3RhdGVPcGVyYXRvcjxSZXBhaXJUeXBlPFQ+W10+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gYXBwZW5kT3BlcmF0b3IoZXhpc3Rpbmc6IFJlYWRvbmx5PFJlcGFpclR5cGU8VD5bXT4pOiBSZXBhaXJUeXBlPFQ+W10ge1xyXG4gICAgLy8gSWYgYGl0ZW1zYCBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAgb3IgYFtdYCBidXQgYGV4aXN0aW5nYCBpcyBwcm92aWRlZFxyXG4gICAgLy8ganVzdCByZXR1cm4gYGV4aXN0aW5nYFxyXG4gICAgY29uc3QgaXRlbXNOb3RQcm92aWRlZEJ1dEV4aXN0aW5nSXMgPSAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGgpICYmIGV4aXN0aW5nO1xyXG4gICAgaWYgKGl0ZW1zTm90UHJvdmlkZWRCdXRFeGlzdGluZ0lzKSB7XHJcbiAgICAgIHJldHVybiBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+W107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpKSB7XHJcbiAgICAgIHJldHVybiBleGlzdGluZy5jb25jYXQoaXRlbXMgYXMgUmVwYWlyVHlwZTxUPltdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgZXhhbXBsZSBpZiBzb21lIHByb3BlcnR5IGlzIGFkZGVkIGR5bmFtaWNhbGx5XHJcbiAgICAvLyBhbmQgZGlkbid0IGV4aXN0IGJlZm9yZSB0aHVzIGl0J3Mgbm90IGBBcnJheUxpa2VgXHJcbiAgICByZXR1cm4gaXRlbXMgYXMgUmVwYWlyVHlwZTxUPltdO1xyXG4gIH07XHJcbn1cclxuIl19