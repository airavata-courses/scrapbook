/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
/**
 * @template T
 * @param {?} val
 * @return {?}
 */
export function simplePatch(val) {
    return (/**
     * @param {?} existingState
     * @return {?}
     */
    (existingState) => {
        if (Array.isArray(val)) {
            throw new Error(MESSAGES[CODE.PATCHING_ARRAY]());
        }
        else if (typeof val !== 'object') {
            throw new Error(MESSAGES[CODE.PATCHING_PRIMITIVE]());
        }
        /** @type {?} */
        const newState = Object.assign({}, ((/** @type {?} */ (existingState))));
        for (const key in val) {
            // deep clone for patch compatibility
            // noinspection JSUnfilteredForInLoop (IDE)
            newState[key] = ((/** @type {?} */ (val)))[key];
        }
        return (/** @type {?} */ (newState));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtb3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvaW50ZXJuYWwvc3RhdGUtb3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsZUFBZSxJQUFJLFFBQVEsRUFDM0IsZUFBZSxJQUFJLElBQUksRUFDeEIsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7O0FBR3BDLE1BQU0sVUFBVSxXQUFXLENBQUksR0FBZTtJQUM1Qzs7OztJQUFPLENBQUMsYUFBMEIsRUFBRSxFQUFFO1FBQ3BDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3REOztjQUVLLFFBQVEscUJBQWEsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFFO1FBQ25ELEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ3JCLHFDQUFxQztZQUNyQywyQ0FBMkM7WUFDM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUEsR0FBRyxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sbUJBQUEsUUFBUSxFQUFLLENBQUM7SUFDdkIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ09ORklHX01FU1NBR0VTIGFzIE1FU1NBR0VTLFxyXG4gIFZBTElEQVRJT05fQ09ERSBhcyBDT0RFXHJcbn0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xyXG5pbXBvcnQgeyBTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlUGF0Y2g8VD4odmFsOiBQYXJ0aWFsPFQ+KTogU3RhdGVPcGVyYXRvcjxUPiB7XHJcbiAgcmV0dXJuIChleGlzdGluZ1N0YXRlOiBSZWFkb25seTxUPikgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRVNbQ09ERS5QQVRDSElOR19BUlJBWV0oKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFU1tDT0RFLlBBVENISU5HX1BSSU1JVElWRV0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3U3RhdGU6IGFueSA9IHsgLi4uKGV4aXN0aW5nU3RhdGUgYXMgYW55KSB9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XHJcbiAgICAgIC8vIGRlZXAgY2xvbmUgZm9yIHBhdGNoIGNvbXBhdGliaWxpdHlcclxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcCAoSURFKVxyXG4gICAgICBuZXdTdGF0ZVtrZXldID0gKHZhbCBhcyBhbnkpW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld1N0YXRlIGFzIFQ7XHJcbiAgfTtcclxufVxyXG4iXX0=