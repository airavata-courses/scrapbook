/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isStateOperator, isPredicate, isNumber, invalidIndex } from './utils';
/**
 * @template T
 * @param {?} selector - Index of item in the array or a predicate function
 * that can be provided in `Array.prototype.findIndex`
 * @param {?} operatorOrValue - New value under the `selector` index or a
 * function that can be applied to an existing value
 * @return {?}
 */
export function updateItem(selector, operatorOrValue) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function updateItemOperator(existing) {
        /** @type {?} */
        let index = -1;
        if (isPredicate(selector)) {
            index = existing.findIndex(selector);
        }
        else if (isNumber(selector)) {
            index = selector;
        }
        if (invalidIndex(index)) {
            return (/** @type {?} */ (existing));
        }
        /** @type {?} */
        let value = (/** @type {?} */ (null));
        // Need to check if the new item value will change the existing item value
        // then, only if it will change it then clone the array and set the item
        if (isStateOperator(operatorOrValue)) {
            value = operatorOrValue((/** @type {?} */ (existing[index])));
        }
        else {
            value = operatorOrValue;
        }
        // If the value hasn't been mutated
        // then we just return `existing` array
        if (value === existing[index]) {
            return (/** @type {?} */ (existing));
        }
        /** @type {?} */
        const clone = existing.slice();
        clone[index] = (/** @type {?} */ (value));
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS9vcGVyYXRvcnMvIiwic291cmNlcyI6WyJ1cGRhdGUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBYyxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0FBUzNGLE1BQU0sVUFBVSxVQUFVLENBQ3hCLFFBQStCLEVBQy9CLGVBQXFDO0lBRXJDOzs7O0lBQU8sU0FBUyxrQkFBa0IsQ0FBQyxRQUFtQzs7WUFDaEUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNsQjtRQUVELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDOztZQUVHLEtBQUssR0FBTSxtQkFBQSxJQUFJLEVBQUM7UUFDcEIsMEVBQTBFO1FBQzFFLHdFQUF3RTtRQUN4RSxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwQyxLQUFLLEdBQUcsZUFBZSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBZSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLEtBQUssR0FBRyxlQUFlLENBQUM7U0FDekI7UUFFRCxtQ0FBbUM7UUFDbkMsdUNBQXVDO1FBQ3ZDLElBQUksS0FBSyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLG1CQUFBLFFBQVEsRUFBbUIsQ0FBQztTQUNwQzs7Y0FFSyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsbUJBQUEsS0FBSyxFQUFpQixDQUFDO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1N0YXRlT3BlcmF0b3IsIGlzUHJlZGljYXRlLCBpc051bWJlciwgaW52YWxpZEluZGV4LCBSZXBhaXJUeXBlIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vaW50ZXJuYWxzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBJbmRleCBvZiBpdGVtIGluIHRoZSBhcnJheSBvciBhIHByZWRpY2F0ZSBmdW5jdGlvblxyXG4gKiB0aGF0IGNhbiBiZSBwcm92aWRlZCBpbiBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGBcclxuICogQHBhcmFtIG9wZXJhdG9yT3JWYWx1ZSAtIE5ldyB2YWx1ZSB1bmRlciB0aGUgYHNlbGVjdG9yYCBpbmRleCBvciBhXHJcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZXhpc3RpbmcgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtPFQ+KFxyXG4gIHNlbGVjdG9yOiBudW1iZXIgfCBQcmVkaWNhdGU8VD4sXHJcbiAgb3BlcmF0b3JPclZhbHVlOiBUIHwgU3RhdGVPcGVyYXRvcjxUPlxyXG4pOiBTdGF0ZU9wZXJhdG9yPFJlcGFpclR5cGU8VD5bXT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVJdGVtT3BlcmF0b3IoZXhpc3Rpbmc6IFJlYWRvbmx5PFJlcGFpclR5cGU8VD5bXT4pOiBSZXBhaXJUeXBlPFQ+W10ge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gICAgaWYgKGlzUHJlZGljYXRlKHNlbGVjdG9yKSkge1xyXG4gICAgICBpbmRleCA9IGV4aXN0aW5nLmZpbmRJbmRleChzZWxlY3Rvcik7XHJcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHNlbGVjdG9yKSkge1xyXG4gICAgICBpbmRleCA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnZhbGlkSW5kZXgoaW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+W107XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhbHVlOiBUID0gbnVsbCE7XHJcbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIHRoZSBuZXcgaXRlbSB2YWx1ZSB3aWxsIGNoYW5nZSB0aGUgZXhpc3RpbmcgaXRlbSB2YWx1ZVxyXG4gICAgLy8gdGhlbiwgb25seSBpZiBpdCB3aWxsIGNoYW5nZSBpdCB0aGVuIGNsb25lIHRoZSBhcnJheSBhbmQgc2V0IHRoZSBpdGVtXHJcbiAgICBpZiAoaXNTdGF0ZU9wZXJhdG9yKG9wZXJhdG9yT3JWYWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSBvcGVyYXRvck9yVmFsdWUoZXhpc3RpbmdbaW5kZXhdIGFzIFJlYWRvbmx5PFQ+KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gb3BlcmF0b3JPclZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgYmVlbiBtdXRhdGVkXHJcbiAgICAvLyB0aGVuIHdlIGp1c3QgcmV0dXJuIGBleGlzdGluZ2AgYXJyYXlcclxuICAgIGlmICh2YWx1ZSA9PT0gZXhpc3RpbmdbaW5kZXhdKSB7XHJcbiAgICAgIHJldHVybiBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+W107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvbmUgPSBleGlzdGluZy5zbGljZSgpO1xyXG4gICAgY2xvbmVbaW5kZXhdID0gdmFsdWUgYXMgUmVwYWlyVHlwZTxUPjtcclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9O1xyXG59XHJcbiJdfQ==