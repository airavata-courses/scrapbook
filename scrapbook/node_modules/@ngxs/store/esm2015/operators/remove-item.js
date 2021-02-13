/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPredicate, isNumber, invalidIndex } from './utils';
/**
 * @template T
 * @param {?} selector - index or predicate to remove an item from an array by
 * @return {?}
 */
export function removeItem(selector) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function removeItemOperator(existing) {
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
        const clone = existing.slice();
        clone.splice(index, 1);
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS9vcGVyYXRvcnMvIiwic291cmNlcyI6WyJyZW1vdmUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFjLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLMUUsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsUUFBK0I7SUFFL0I7Ozs7SUFBTyxTQUFTLGtCQUFrQixDQUFDLFFBQW1DOztZQUNoRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxtQkFBQSxRQUFRLEVBQW1CLENBQUM7U0FDcEM7O2NBRUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVPcGVyYXRvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgUHJlZGljYXRlIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBpc1ByZWRpY2F0ZSwgaXNOdW1iZXIsIGludmFsaWRJbmRleCwgUmVwYWlyVHlwZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBzZWxlY3RvciAtIGluZGV4IG9yIHByZWRpY2F0ZSB0byByZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5IGJ5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbTxUPihcclxuICBzZWxlY3RvcjogbnVtYmVyIHwgUHJlZGljYXRlPFQ+XHJcbik6IFN0YXRlT3BlcmF0b3I8UmVwYWlyVHlwZTxUPltdPiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUl0ZW1PcGVyYXRvcihleGlzdGluZzogUmVhZG9ubHk8UmVwYWlyVHlwZTxUPltdPik6IFJlcGFpclR5cGU8VD5bXSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICBpZiAoaXNQcmVkaWNhdGUoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGluZGV4ID0gZXhpc3RpbmcuZmluZEluZGV4KHNlbGVjdG9yKTtcclxuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGluZGV4ID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGludmFsaWRJbmRleChpbmRleCkpIHtcclxuICAgICAgcmV0dXJuIGV4aXN0aW5nIGFzIFJlcGFpclR5cGU8VD5bXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9uZSA9IGV4aXN0aW5nLnNsaWNlKCk7XHJcbiAgICBjbG9uZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcmV0dXJuIGNsb25lO1xyXG4gIH07XHJcbn1cclxuIl19