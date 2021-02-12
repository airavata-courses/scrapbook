/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getSelectorMetadata as getSelectorMetadataInternal, getStoreMetadata as getStoreMetadataInternal, ensureStoreMetadata as ensureStoreMetadataInternal, ensureSelectorMetadata as ensureSelectorMetadataInternal } from './internal/internals';
/**
 * @record
 */
function MetaDataModel() { }
if (false) {
    /** @type {?} */
    MetaDataModel.prototype.name;
    /** @type {?} */
    MetaDataModel.prototype.actions;
    /** @type {?} */
    MetaDataModel.prototype.defaults;
    /** @type {?} */
    MetaDataModel.prototype.path;
    /** @type {?|undefined} */
    MetaDataModel.prototype.children;
}
/**
 * @record
 */
function SelectorMetaDataModel() { }
if (false) {
    /** @type {?} */
    SelectorMetaDataModel.prototype.originalFn;
    /** @type {?} */
    SelectorMetaDataModel.prototype.containerClass;
    /** @type {?} */
    SelectorMetaDataModel.prototype.selectorName;
    /** @type {?} */
    SelectorMetaDataModel.prototype.getSelectorOptions;
}
/**
 * @param {?} target
 * @return {?}
 */
export function ensureStoreMetadata(target) {
    return ensureStoreMetadataInternal(target);
}
/**
 * @param {?} target
 * @return {?}
 */
export function getStoreMetadata(target) {
    return getStoreMetadataInternal(target);
}
/**
 * @param {?} target
 * @return {?}
 */
export function ensureSelectorMetadata(target) {
    return ensureSelectorMetadataInternal(target);
}
/**
 * @param {?} target
 * @return {?}
 */
export function getSelectorMetadata(target) {
    return getSelectorMetadataInternal(target);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX3RvX2RlcHJlY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL3B1YmxpY190b19kZXByZWNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxtQkFBbUIsSUFBSSwyQkFBMkIsRUFDbEQsZ0JBQWdCLElBQUksd0JBQXdCLEVBQzVDLG1CQUFtQixJQUFJLDJCQUEyQixFQUNsRCxzQkFBc0IsSUFBSSw4QkFBOEIsRUFHekQsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUk5Qiw0QkFRQzs7O0lBUEMsNkJBQW9COztJQUNwQixnQ0FBZ0Q7O0lBQ2hELGlDQUFjOztJQUNkLDZCQUFvQjs7SUFHcEIsaUNBQWdDOzs7OztBQUdsQyxvQ0FPQzs7O0lBSkMsMkNBQTRCOztJQUM1QiwrQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIsbURBQWdEOzs7Ozs7QUFHbEQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQW9DO0lBQ3RFLE9BQU8sMkJBQTJCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsTUFBb0M7SUFDbkUsT0FBTyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxNQUFnQjtJQUNyRCxPQUFPLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQVc7SUFDN0MsT0FBTywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRTZWxlY3Rvck1ldGFkYXRhIGFzIGdldFNlbGVjdG9yTWV0YWRhdGFJbnRlcm5hbCxcclxuICBnZXRTdG9yZU1ldGFkYXRhIGFzIGdldFN0b3JlTWV0YWRhdGFJbnRlcm5hbCxcclxuICBlbnN1cmVTdG9yZU1ldGFkYXRhIGFzIGVuc3VyZVN0b3JlTWV0YWRhdGFJbnRlcm5hbCxcclxuICBlbnN1cmVTZWxlY3Rvck1ldGFkYXRhIGFzIGVuc3VyZVNlbGVjdG9yTWV0YWRhdGFJbnRlcm5hbCxcclxuICBTdGF0ZUNsYXNzSW50ZXJuYWwsXHJcbiAgU2hhcmVkU2VsZWN0b3JPcHRpb25zXHJcbn0gZnJvbSAnLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBQbGFpbk9iamVjdE9mIH0gZnJvbSAnLi4vaW50ZXJuYWxzL3NyYy9zeW1ib2xzJztcclxuaW1wb3J0IHsgQWN0aW9uSGFuZGxlck1ldGFEYXRhIH0gZnJvbSAnLi9hY3Rpb25zL3N5bWJvbHMnO1xyXG5cclxuaW50ZXJmYWNlIE1ldGFEYXRhTW9kZWwge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgYWN0aW9uczogUGxhaW5PYmplY3RPZjxBY3Rpb25IYW5kbGVyTWV0YURhdGFbXT47XHJcbiAgZGVmYXVsdHM6IGFueTtcclxuICBwYXRoOiBzdHJpbmcgfCBudWxsO1xyXG4gIC8vIHNlbGVjdEZyb21BcHBTdGF0ZTogU2VsZWN0RnJvbVN0YXRlIHwgbnVsbDtcclxuICAvLyBtYWtlUm9vdFNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnkgfCBudWxsOyAvLyBEb24ndCBleHBvc2UgbmV3IHN0dWZmXHJcbiAgY2hpbGRyZW4/OiBTdGF0ZUNsYXNzSW50ZXJuYWxbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9yTWV0YURhdGFNb2RlbCB7XHJcbiAgLy8gc2VsZWN0RnJvbUFwcFN0YXRlOiBTZWxlY3RGcm9tU3RhdGUgfCBudWxsO1xyXG4gIC8vIG1ha2VSb290U2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSB8IG51bGw7IC8vIERvbid0IGV4cG9zZSBuZXcgc3R1ZmZcclxuICBvcmlnaW5hbEZuOiBGdW5jdGlvbiB8IG51bGw7XHJcbiAgY29udGFpbmVyQ2xhc3M6IGFueTtcclxuICBzZWxlY3Rvck5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgZ2V0U2VsZWN0b3JPcHRpb25zOiAoKSA9PiBTaGFyZWRTZWxlY3Rvck9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVTdG9yZU1ldGFkYXRhKHRhcmdldDogU3RhdGVDbGFzc0ludGVybmFsPGFueSwgYW55Pik6IE1ldGFEYXRhTW9kZWwge1xyXG4gIHJldHVybiBlbnN1cmVTdG9yZU1ldGFkYXRhSW50ZXJuYWwodGFyZ2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlTWV0YWRhdGEodGFyZ2V0OiBTdGF0ZUNsYXNzSW50ZXJuYWw8YW55LCBhbnk+KTogTWV0YURhdGFNb2RlbCB7XHJcbiAgcmV0dXJuIGdldFN0b3JlTWV0YWRhdGFJbnRlcm5hbCh0YXJnZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU2VsZWN0b3JNZXRhZGF0YSh0YXJnZXQ6IEZ1bmN0aW9uKTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsIHtcclxuICByZXR1cm4gZW5zdXJlU2VsZWN0b3JNZXRhZGF0YUludGVybmFsKHRhcmdldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3Rvck1ldGFkYXRhKHRhcmdldDogYW55KTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsIHtcclxuICByZXR1cm4gZ2V0U2VsZWN0b3JNZXRhZGF0YUludGVybmFsKHRhcmdldCk7XHJcbn1cclxuIl19