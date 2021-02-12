/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const repeat = (/**
 * @param {?} str
 * @param {?} times
 * @return {?}
 */
(str, times) => new Array(times + 1).join(str));
/** @type {?} */
export const pad = (/**
 * @param {?} num
 * @param {?} maxLength
 * @return {?}
 */
(num, maxLength) => repeat('0', maxLength - num.toString().length) + num);
/**
 * @param {?} time
 * @return {?}
 */
export function formatTime(time) {
    return (pad(time.getHours(), 2) +
        `:` +
        pad(time.getMinutes(), 2) +
        `:` +
        pad(time.getSeconds(), 2) +
        `.` +
        pad(time.getMilliseconds(), 3));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvbG9nZ2VyLXBsdWdpbi8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcm5hbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sTUFBTTs7Ozs7QUFBRyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7O0FBRXBGLE1BQU0sT0FBTyxHQUFHOzs7OztBQUFHLENBQUMsR0FBVyxFQUFFLFNBQWlCLEVBQUUsRUFBRSxDQUNwRCxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFBOzs7OztBQUV0RCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVU7SUFDbkMsT0FBTyxDQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUc7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixHQUFHO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekIsR0FBRztRQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQy9CLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChzdHI6IHN0cmluZywgdGltZXM6IG51bWJlcikgPT4gbmV3IEFycmF5KHRpbWVzICsgMSkuam9pbihzdHIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZCA9IChudW06IG51bWJlciwgbWF4TGVuZ3RoOiBudW1iZXIpID0+XHJcbiAgcmVwZWF0KCcwJywgbWF4TGVuZ3RoIC0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoKSArIG51bTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWU6IERhdGUpIHtcclxuICByZXR1cm4gKFxyXG4gICAgcGFkKHRpbWUuZ2V0SG91cnMoKSwgMikgK1xyXG4gICAgYDpgICtcclxuICAgIHBhZCh0aW1lLmdldE1pbnV0ZXMoKSwgMikgK1xyXG4gICAgYDpgICtcclxuICAgIHBhZCh0aW1lLmdldFNlY29uZHMoKSwgMikgK1xyXG4gICAgYC5gICtcclxuICAgIHBhZCh0aW1lLmdldE1pbGxpc2Vjb25kcygpLCAzKVxyXG4gICk7XHJcbn1cclxuIl19