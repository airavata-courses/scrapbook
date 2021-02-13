/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNil } from './utils';
/**
 * @template T
 * @param {?} value - Value to insert
 * @param {?=} beforePosition
 * @return {?}
 */
export function insertItem(value, beforePosition) {
    return (/**
     * @param {?} existing
     * @return {?}
     */
    function insertItemOperator(existing) {
        // Have to check explicitly for `null` and `undefined`
        // because `value` can be `0`, thus `!value` will return `true`
        if (isNil(value) && existing) {
            return (/** @type {?} */ (existing));
        }
        // Property may be dynamic and might not existed before
        if (!Array.isArray(existing)) {
            return [(/** @type {?} */ (value))];
        }
        /** @type {?} */
        const clone = existing.slice();
        /** @type {?} */
        let index = 0;
        // No need to call `isNumber`
        // as we are checking `> 0` not `>= 0`
        // everything except number will return false here
        if ((/** @type {?} */ (beforePosition)) > 0) {
            index = (/** @type {?} */ (beforePosition));
        }
        clone.splice(index, 0, (/** @type {?} */ (value)));
        return clone;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS9vcGVyYXRvcnMvIiwic291cmNlcyI6WyJpbnNlcnQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQU01QyxNQUFNLFVBQVUsVUFBVSxDQUN4QixLQUFRLEVBQ1IsY0FBdUI7SUFFdkI7Ozs7SUFBTyxTQUFTLGtCQUFrQixDQUFDLFFBQW1DO1FBQ3BFLHNEQUFzRDtRQUN0RCwrREFBK0Q7UUFDL0QsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzVCLE9BQU8sbUJBQUEsUUFBUSxFQUFtQixDQUFDO1NBQ3BDO1FBRUQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQWlCLENBQUMsQ0FBQztTQUNqQzs7Y0FFSyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTs7WUFFMUIsS0FBSyxHQUFHLENBQUM7UUFFYiw2QkFBNkI7UUFDN0Isc0NBQXNDO1FBQ3RDLGtEQUFrRDtRQUNsRCxJQUFJLG1CQUFBLGNBQWMsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixLQUFLLEdBQUcsbUJBQUEsY0FBYyxFQUFDLENBQUM7U0FDekI7UUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUM7UUFDL0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVPcGVyYXRvciB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgaXNOaWwsIFJlcGFpclR5cGUgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdmFsdWUgLSBWYWx1ZSB0byBpbnNlcnRcclxuICogQHBhcmFtIFtiZWZvcmVQb3NpdGlvbl0gLSAgU3BlY2lmaWVkIGluZGV4IHRvIGluc2VydCB2YWx1ZSBiZWZvcmUsIG9wdGlvbmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0SXRlbTxUPihcclxuICB2YWx1ZTogVCxcclxuICBiZWZvcmVQb3NpdGlvbj86IG51bWJlclxyXG4pOiBTdGF0ZU9wZXJhdG9yPFJlcGFpclR5cGU8VD5bXT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBpbnNlcnRJdGVtT3BlcmF0b3IoZXhpc3Rpbmc6IFJlYWRvbmx5PFJlcGFpclR5cGU8VD5bXT4pOiBSZXBhaXJUeXBlPFQ+W10ge1xyXG4gICAgLy8gSGF2ZSB0byBjaGVjayBleHBsaWNpdGx5IGZvciBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXHJcbiAgICAvLyBiZWNhdXNlIGB2YWx1ZWAgY2FuIGJlIGAwYCwgdGh1cyBgIXZhbHVlYCB3aWxsIHJldHVybiBgdHJ1ZWBcclxuICAgIGlmIChpc05pbCh2YWx1ZSkgJiYgZXhpc3RpbmcpIHtcclxuICAgICAgcmV0dXJuIGV4aXN0aW5nIGFzIFJlcGFpclR5cGU8VD5bXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9wZXJ0eSBtYXkgYmUgZHluYW1pYyBhbmQgbWlnaHQgbm90IGV4aXN0ZWQgYmVmb3JlXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhpc3RpbmcpKSB7XHJcbiAgICAgIHJldHVybiBbdmFsdWUgYXMgUmVwYWlyVHlwZTxUPl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvbmUgPSBleGlzdGluZy5zbGljZSgpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgLy8gTm8gbmVlZCB0byBjYWxsIGBpc051bWJlcmBcclxuICAgIC8vIGFzIHdlIGFyZSBjaGVja2luZyBgPiAwYCBub3QgYD49IDBgXHJcbiAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBudW1iZXIgd2lsbCByZXR1cm4gZmFsc2UgaGVyZVxyXG4gICAgaWYgKGJlZm9yZVBvc2l0aW9uISA+IDApIHtcclxuICAgICAgaW5kZXggPSBiZWZvcmVQb3NpdGlvbiE7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUuc3BsaWNlKGluZGV4LCAwLCB2YWx1ZSBhcyBSZXBhaXJUeXBlPFQ+KTtcclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9O1xyXG59XHJcbiJdfQ==