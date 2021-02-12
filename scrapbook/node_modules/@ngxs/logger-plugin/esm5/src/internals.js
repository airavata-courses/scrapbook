/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var repeat = (/**
 * @param {?} str
 * @param {?} times
 * @return {?}
 */
function (str, times) { return new Array(times + 1).join(str); });
/** @type {?} */
export var pad = (/**
 * @param {?} num
 * @param {?} maxLength
 * @return {?}
 */
function (num, maxLength) {
    return repeat('0', maxLength - num.toString().length) + num;
});
/**
 * @param {?} time
 * @return {?}
 */
export function formatTime(time) {
    return (pad(time.getHours(), 2) +
        ":" +
        pad(time.getMinutes(), 2) +
        ":" +
        pad(time.getSeconds(), 2) +
        "." +
        pad(time.getMilliseconds(), 3));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvbG9nZ2VyLXBsdWdpbi8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcm5hbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQU8sTUFBTTs7Ozs7QUFBRyxVQUFDLEdBQVcsRUFBRSxLQUFhLElBQUssT0FBQSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixDQUFBOztBQUVwRixNQUFNLEtBQU8sR0FBRzs7Ozs7QUFBRyxVQUFDLEdBQVcsRUFBRSxTQUFpQjtJQUNoRCxPQUFBLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO0FBQXBELENBQW9ELENBQUE7Ozs7O0FBRXRELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVTtJQUNuQyxPQUFPLENBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkIsR0FBRztRQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEdBQUc7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixHQUFHO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDL0IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVwZWF0ID0gKHN0cjogc3RyaW5nLCB0aW1lczogbnVtYmVyKSA9PiBuZXcgQXJyYXkodGltZXMgKyAxKS5qb2luKHN0cik7XHJcblxyXG5leHBvcnQgY29uc3QgcGFkID0gKG51bTogbnVtYmVyLCBtYXhMZW5ndGg6IG51bWJlcikgPT5cclxuICByZXBlYXQoJzAnLCBtYXhMZW5ndGggLSBudW0udG9TdHJpbmcoKS5sZW5ndGgpICsgbnVtO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZTogRGF0ZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICBwYWQodGltZS5nZXRIb3VycygpLCAyKSArXHJcbiAgICBgOmAgK1xyXG4gICAgcGFkKHRpbWUuZ2V0TWludXRlcygpLCAyKSArXHJcbiAgICBgOmAgK1xyXG4gICAgcGFkKHRpbWUuZ2V0U2Vjb25kcygpLCAyKSArXHJcbiAgICBgLmAgK1xyXG4gICAgcGFkKHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXHJcbiAgKTtcclxufVxyXG4iXX0=