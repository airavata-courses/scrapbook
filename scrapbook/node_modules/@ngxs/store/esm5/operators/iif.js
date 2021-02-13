/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isStateOperator, isUndefined, isPredicate } from './utils';
/**
 * @template T
 * @param {?} operatorOrValue
 * @param {?=} existing
 * @return {?}
 */
function retrieveValue(operatorOrValue, existing) {
    // If state operator is a function
    // then call it with an original value
    if (isStateOperator(operatorOrValue)) {
        /** @type {?} */
        var value = operatorOrValue((/** @type {?} */ ((/** @type {?} */ (existing)))));
        return (/** @type {?} */ (value));
    }
    // If operator or value was not provided
    // e.g. `elseOperatorOrValue` is `undefined`
    // then we just return an original value
    if (isUndefined(operatorOrValue)) {
        return (/** @type {?} */ ((/** @type {?} */ (((/** @type {?} */ (existing)))))));
    }
    return (/** @type {?} */ (operatorOrValue));
}
/**
 * @template T
 * @param {?} condition - Condition can be a plain boolean value or a function,
 * that returns boolean, also this function can take a value as an argument
 * to which this state operator applies
 * @param {?} trueOperatorOrValue - Any value or a state operator
 * @param {?=} elseOperatorOrValue - Any value or a state operator
 * @return {?}
 */
export function iif(condition, trueOperatorOrValue, elseOperatorOrValue) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function iifOperator(existing) {
        // Convert the value to a boolean
        /** @type {?} */
        var result = !!condition;
        // but if it is a function then run it to get the result
        if (isPredicate(condition)) {
            result = condition(existing);
        }
        if (result) {
            return retrieveValue(trueOperatorOrValue, (/** @type {?} */ (existing)));
        }
        return retrieveValue((/** @type {?} */ (elseOperatorOrValue)), (/** @type {?} */ (existing)));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvb3BlcmF0b3JzLyIsInNvdXJjZXMiOlsiaWlmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWMsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7QUFHaEYsU0FBUyxhQUFhLENBQ3BCLGVBQXFDLEVBQ3JDLFFBQWtDO0lBRWxDLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUU7O1lBQzlCLEtBQUssR0FBRyxlQUFlLENBQUMsbUJBQUEsbUJBQUEsUUFBUSxFQUFDLEVBQWUsQ0FBQztRQUN2RCxPQUFPLG1CQUFBLEtBQUssRUFBaUIsQ0FBQztLQUMvQjtJQUVELHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sbUJBQUEsbUJBQUEsQ0FBQyxtQkFBSyxRQUFRLEVBQUEsQ0FBQyxFQUFDLEVBQWlCLENBQUM7S0FDMUM7SUFFRCxPQUFPLG1CQUFBLGVBQWUsRUFBaUIsQ0FBQztBQUMxQyxDQUFDOzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLEdBQUcsQ0FDakIsU0FBaUMsRUFDakMsbUJBQXlDLEVBQ3pDLG1CQUEwQztJQUUxQzs7OztJQUFPLFNBQVMsV0FBVyxDQUFDLFFBQWlDOzs7WUFFdkQsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBQ3hCLHdEQUF3RDtRQUN4RCxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLGFBQWEsQ0FBSSxtQkFBbUIsRUFBRSxtQkFBQSxRQUFRLEVBQWlCLENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sYUFBYSxDQUFJLG1CQUFBLG1CQUFtQixFQUFDLEVBQUUsbUJBQUEsUUFBUSxFQUFpQixDQUFDLENBQUM7SUFDM0UsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1N0YXRlT3BlcmF0b3IsIGlzVW5kZWZpbmVkLCBpc1ByZWRpY2F0ZSwgUmVwYWlyVHlwZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL2ludGVybmFscyc7XHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZVZhbHVlPFQ+KFxyXG4gIG9wZXJhdG9yT3JWYWx1ZTogU3RhdGVPcGVyYXRvcjxUPiB8IFQsXHJcbiAgZXhpc3Rpbmc/OiBSZWFkb25seTxSZXBhaXJUeXBlPFQ+PlxyXG4pOiBSZXBhaXJUeXBlPFQ+IHtcclxuICAvLyBJZiBzdGF0ZSBvcGVyYXRvciBpcyBhIGZ1bmN0aW9uXHJcbiAgLy8gdGhlbiBjYWxsIGl0IHdpdGggYW4gb3JpZ2luYWwgdmFsdWVcclxuICBpZiAoaXNTdGF0ZU9wZXJhdG9yKG9wZXJhdG9yT3JWYWx1ZSkpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3BlcmF0b3JPclZhbHVlKGV4aXN0aW5nISBhcyBSZWFkb25seTxUPik7XHJcbiAgICByZXR1cm4gdmFsdWUgYXMgUmVwYWlyVHlwZTxUPjtcclxuICB9XHJcblxyXG4gIC8vIElmIG9wZXJhdG9yIG9yIHZhbHVlIHdhcyBub3QgcHJvdmlkZWRcclxuICAvLyBlLmcuIGBlbHNlT3BlcmF0b3JPclZhbHVlYCBpcyBgdW5kZWZpbmVkYFxyXG4gIC8vIHRoZW4gd2UganVzdCByZXR1cm4gYW4gb3JpZ2luYWwgdmFsdWVcclxuICBpZiAoaXNVbmRlZmluZWQob3BlcmF0b3JPclZhbHVlKSkge1xyXG4gICAgcmV0dXJuICg8YW55PmV4aXN0aW5nKSEgYXMgUmVwYWlyVHlwZTxUPjtcclxuICB9XHJcblxyXG4gIHJldHVybiBvcGVyYXRvck9yVmFsdWUgYXMgUmVwYWlyVHlwZTxUPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb25kaXRpb24gLSBDb25kaXRpb24gY2FuIGJlIGEgcGxhaW4gYm9vbGVhbiB2YWx1ZSBvciBhIGZ1bmN0aW9uLFxyXG4gKiB0aGF0IHJldHVybnMgYm9vbGVhbiwgYWxzbyB0aGlzIGZ1bmN0aW9uIGNhbiB0YWtlIGEgdmFsdWUgYXMgYW4gYXJndW1lbnRcclxuICogdG8gd2hpY2ggdGhpcyBzdGF0ZSBvcGVyYXRvciBhcHBsaWVzXHJcbiAqIEBwYXJhbSB0cnVlT3BlcmF0b3JPclZhbHVlIC0gQW55IHZhbHVlIG9yIGEgc3RhdGUgb3BlcmF0b3JcclxuICogQHBhcmFtIGVsc2VPcGVyYXRvck9yVmFsdWUgLSBBbnkgdmFsdWUgb3IgYSBzdGF0ZSBvcGVyYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlpZjxUPihcclxuICBjb25kaXRpb246IFByZWRpY2F0ZTxUPiB8IGJvb2xlYW4sXHJcbiAgdHJ1ZU9wZXJhdG9yT3JWYWx1ZTogU3RhdGVPcGVyYXRvcjxUPiB8IFQsXHJcbiAgZWxzZU9wZXJhdG9yT3JWYWx1ZT86IFN0YXRlT3BlcmF0b3I8VD4gfCBUXHJcbik6IFN0YXRlT3BlcmF0b3I8UmVwYWlyVHlwZTxUPj4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBpaWZPcGVyYXRvcihleGlzdGluZzogUmVhZG9ubHk8UmVwYWlyVHlwZTxUPj4pOiBSZXBhaXJUeXBlPFQ+IHtcclxuICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgYm9vbGVhblxyXG4gICAgbGV0IHJlc3VsdCA9ICEhY29uZGl0aW9uO1xyXG4gICAgLy8gYnV0IGlmIGl0IGlzIGEgZnVuY3Rpb24gdGhlbiBydW4gaXQgdG8gZ2V0IHRoZSByZXN1bHRcclxuICAgIGlmIChpc1ByZWRpY2F0ZShjb25kaXRpb24pKSB7XHJcbiAgICAgIHJlc3VsdCA9IGNvbmRpdGlvbihleGlzdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmV0cmlldmVWYWx1ZTxUPih0cnVlT3BlcmF0b3JPclZhbHVlLCBleGlzdGluZyBhcyBSZXBhaXJUeXBlPFQ+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0cmlldmVWYWx1ZTxUPihlbHNlT3BlcmF0b3JPclZhbHVlISwgZXhpc3RpbmcgYXMgUmVwYWlyVHlwZTxUPik7XHJcbiAgfTtcclxufVxyXG4iXX0=