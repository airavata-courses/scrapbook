/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map, filter } from 'rxjs/operators';
import { getActionTypeFromInstance } from '../utils/utils';
/**
 * @record
 * @template T, E
 */
export function ActionCompletion() { }
if (false) {
    /** @type {?} */
    ActionCompletion.prototype.action;
    /** @type {?} */
    ActionCompletion.prototype.result;
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will grab actions that have just been dispatched as well as actions that have completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofAction() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return ofActionOperator(allowedTypes);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been dispatched
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionDispatched() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return ofActionOperator(allowedTypes, ["DISPATCHED" /* Dispatched */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been successfully completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionSuccessful() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return ofActionOperator(allowedTypes, ["SUCCESSFUL" /* Successful */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been canceled
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionCanceled() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return ofActionOperator(allowedTypes, ["CANCELED" /* Canceled */]);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been completed
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionCompleted() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    /** @type {?} */
    var allowedStatuses = [
        "SUCCESSFUL" /* Successful */,
        "CANCELED" /* Canceled */,
        "ERRORED" /* Errored */
    ];
    return ofActionOperator(allowedTypes, allowedStatuses, mapActionResult);
}
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just thrown an error
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofActionErrored() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return ofActionOperator(allowedTypes, ["ERRORED" /* Errored */]);
}
/**
 * @param {?} allowedTypes
 * @param {?=} statuses
 * @param {?=} mapOperator
 * @return {?}
 */
function ofActionOperator(allowedTypes, statuses, 
// This actually could've been `OperatorFunction<ActionContext, ActionCompletion | any>`,
// since it maps either to `ctx.action` OR to `ActionCompletion`. But `ActionCompleteion | any`
// defaults to `any`, thus there is no sense from union type.
mapOperator) {
    if (mapOperator === void 0) { mapOperator = mapAction; }
    /** @type {?} */
    var allowedMap = createAllowedActionTypesMap(allowedTypes);
    /** @type {?} */
    var allowedStatusMap = statuses && createAllowedStatusesMap(statuses);
    return (/**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o.pipe(filterStatus(allowedMap, allowedStatusMap), mapOperator());
    });
}
/**
 * @param {?} allowedTypes
 * @param {?=} allowedStatuses
 * @return {?}
 */
function filterStatus(allowedTypes, allowedStatuses) {
    return filter((/**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        /** @type {?} */
        var actionType = (/** @type {?} */ (getActionTypeFromInstance(ctx.action)));
        /** @type {?} */
        var typeMatch = allowedTypes[actionType];
        /** @type {?} */
        var statusMatch = allowedStatuses ? allowedStatuses[ctx.status] : true;
        return typeMatch && statusMatch;
    }));
}
/**
 * @return {?}
 */
function mapActionResult() {
    return map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var action = _a.action, status = _a.status, error = _a.error;
        return (/** @type {?} */ ({
            action: action,
            result: {
                successful: "SUCCESSFUL" /* Successful */ === status,
                canceled: "CANCELED" /* Canceled */ === status,
                error: error
            }
        }));
    }));
}
/**
 * @template T
 * @return {?}
 */
function mapAction() {
    return map((/**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) { return (/** @type {?} */ (ctx.action)); }));
}
/**
 * @record
 */
function FilterMap() { }
/**
 * @param {?} types
 * @return {?}
 */
function createAllowedActionTypesMap(types) {
    return types.reduce((/**
     * @param {?} filterMap
     * @param {?} klass
     * @return {?}
     */
    function (filterMap, klass) {
        filterMap[(/** @type {?} */ (getActionTypeFromInstance(klass)))] = true;
        return filterMap;
    }), (/** @type {?} */ ({})));
}
/**
 * @param {?} statuses
 * @return {?}
 */
function createAllowedStatusesMap(statuses) {
    return statuses.reduce((/**
     * @param {?} filterMap
     * @param {?} status
     * @return {?}
     */
    function (filterMap, status) {
        filterMap[status] = true;
        return filterMap;
    }), (/** @type {?} */ ({})));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvb3BlcmF0b3JzL29mLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHM0Qsc0NBT0M7OztJQU5DLGtDQUFVOztJQUNWLGtDQUlFOzs7Ozs7Ozs7QUFhSixNQUFNLFVBQVUsUUFBUTtJQUFDLHNCQUE2QjtTQUE3QixVQUE2QixFQUE3QixxQkFBNkIsRUFBN0IsSUFBNkI7UUFBN0IsaUNBQTZCOztJQUNwRCxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGtCQUFrQjtJQUNoQyxzQkFBNkI7U0FBN0IsVUFBNkIsRUFBN0IscUJBQTZCLEVBQTdCLElBQTZCO1FBQTdCLGlDQUE2Qjs7SUFFN0IsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsK0JBQXlCLENBQUMsQ0FBQztBQUNuRSxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsc0JBQTZCO1NBQTdCLFVBQTZCLEVBQTdCLHFCQUE2QixFQUE3QixJQUE2QjtRQUE3QixpQ0FBNkI7O0lBRTdCLE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLCtCQUF5QixDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsZ0JBQWdCO0lBQzlCLHNCQUE2QjtTQUE3QixVQUE2QixFQUE3QixxQkFBNkIsRUFBN0IsSUFBNkI7UUFBN0IsaUNBQTZCOztJQUU3QixPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSwyQkFBdUIsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGlC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Q3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJy4uL2FjdGlvbnMvc3ltYm9scyc7XHJcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQsIEFjdGlvblN0YXR1cyB9IGZyb20gJy4uL2FjdGlvbnMtc3RyZWFtJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29tcGxldGlvbjxUID0gYW55LCBFID0gRXJyb3I+IHtcclxuICBhY3Rpb246IFQ7XHJcbiAgcmVzdWx0OiB7XHJcbiAgICBzdWNjZXNzZnVsOiBib29sZWFuO1xyXG4gICAgY2FuY2VsZWQ6IGJvb2xlYW47XHJcbiAgICBlcnJvcj86IEU7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uPFQgPSBhbnk+KGFsbG93ZWRUeXBlOiBBY3Rpb25UeXBlKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBUPjtcclxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uPFQgPSBhbnk+KFxyXG4gIC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdXHJcbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgVD47XHJcblxyXG4vKipcclxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGlzIHdpbGwgZ3JhYiBhY3Rpb25zIHRoYXQgaGF2ZSBqdXN0IGJlZW4gZGlzcGF0Y2hlZCBhcyB3ZWxsIGFzIGFjdGlvbnMgdGhhdCBoYXZlIGNvbXBsZXRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uKC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBhbnk+IHtcclxuICByZXR1cm4gb2ZBY3Rpb25PcGVyYXRvcihhbGxvd2VkVHlwZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGlzIHdpbGwgT05MWSBncmFiIGFjdGlvbnMgdGhhdCBoYXZlIGp1c3QgYmVlbiBkaXNwYXRjaGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2ZBY3Rpb25EaXNwYXRjaGVkKFxyXG4gIC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdXHJcbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgYW55PiB7XHJcbiAgcmV0dXJuIG9mQWN0aW9uT3BlcmF0b3IoYWxsb3dlZFR5cGVzLCBbQWN0aW9uU3RhdHVzLkRpc3BhdGNoZWRdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJ4SlMgb3BlcmF0b3IgZm9yIHNlbGVjdGluZyBvdXQgc3BlY2lmaWMgYWN0aW9ucy5cclxuICpcclxuICogVGhpcyB3aWxsIE9OTFkgZ3JhYiBhY3Rpb25zIHRoYXQgaGF2ZSBqdXN0IGJlZW4gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uU3VjY2Vzc2Z1bChcclxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIGFueT4ge1xyXG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcywgW0FjdGlvblN0YXR1cy5TdWNjZXNzZnVsXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSeEpTIG9wZXJhdG9yIGZvciBzZWxlY3Rpbmcgb3V0IHNwZWNpZmljIGFjdGlvbnMuXHJcbiAqXHJcbiAqIFRoaXMgd2lsbCBPTkxZIGdyYWIgYWN0aW9ucyB0aGF0IGhhdmUganVzdCBiZWVuIGNhbmNlbGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2ZBY3Rpb25DYW5jZWxlZChcclxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIGFueT4ge1xyXG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcywgW0FjdGlvblN0YXR1cy5DYW5jZWxlZF0pO1xyXG59XHJcblxyXG4vKipcclxuICogUnhKUyBvcGVyYXRvciBmb3Igc2VsZWN0aW5nIG91dCBzcGVjaWZpYyBhY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGlzIHdpbGwgT05MWSBncmFiIGFjdGlvbnMgdGhhdCBoYXZlIGp1c3QgYmVlbiBjb21wbGV0ZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvZkFjdGlvbkNvbXBsZXRlZChcclxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIEFjdGlvbkNvbXBsZXRpb24+IHtcclxuICBjb25zdCBhbGxvd2VkU3RhdHVzZXMgPSBbXHJcbiAgICBBY3Rpb25TdGF0dXMuU3VjY2Vzc2Z1bCxcclxuICAgIEFjdGlvblN0YXR1cy5DYW5jZWxlZCxcclxuICAgIEFjdGlvblN0YXR1cy5FcnJvcmVkXHJcbiAgXTtcclxuICByZXR1cm4gb2ZBY3Rpb25PcGVyYXRvcihhbGxvd2VkVHlwZXMsIGFsbG93ZWRTdGF0dXNlcywgbWFwQWN0aW9uUmVzdWx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJ4SlMgb3BlcmF0b3IgZm9yIHNlbGVjdGluZyBvdXQgc3BlY2lmaWMgYWN0aW9ucy5cclxuICpcclxuICogVGhpcyB3aWxsIE9OTFkgZ3JhYiBhY3Rpb25zIHRoYXQgaGF2ZSBqdXN0IHRocm93biBhbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uRXJyb3JlZChcclxuICAuLi5hbGxvd2VkVHlwZXM6IEFjdGlvblR5cGVbXVxyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIGFueT4ge1xyXG4gIHJldHVybiBvZkFjdGlvbk9wZXJhdG9yKGFsbG93ZWRUeXBlcywgW0FjdGlvblN0YXR1cy5FcnJvcmVkXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mQWN0aW9uT3BlcmF0b3IoXHJcbiAgYWxsb3dlZFR5cGVzOiBBY3Rpb25UeXBlW10sXHJcbiAgc3RhdHVzZXM/OiBBY3Rpb25TdGF0dXNbXSxcclxuICAvLyBUaGlzIGFjdHVhbGx5IGNvdWxkJ3ZlIGJlZW4gYE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgQWN0aW9uQ29tcGxldGlvbiB8IGFueT5gLFxyXG4gIC8vIHNpbmNlIGl0IG1hcHMgZWl0aGVyIHRvIGBjdHguYWN0aW9uYCBPUiB0byBgQWN0aW9uQ29tcGxldGlvbmAuIEJ1dCBgQWN0aW9uQ29tcGxldGVpb24gfCBhbnlgXHJcbiAgLy8gZGVmYXVsdHMgdG8gYGFueWAsIHRodXMgdGhlcmUgaXMgbm8gc2Vuc2UgZnJvbSB1bmlvbiB0eXBlLlxyXG4gIG1hcE9wZXJhdG9yOiAoKSA9PiBPcGVyYXRvckZ1bmN0aW9uPEFjdGlvbkNvbnRleHQsIGFueT4gPSBtYXBBY3Rpb25cclxuKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb25Db250ZXh0LCBhbnk+IHtcclxuICBjb25zdCBhbGxvd2VkTWFwID0gY3JlYXRlQWxsb3dlZEFjdGlvblR5cGVzTWFwKGFsbG93ZWRUeXBlcyk7XHJcbiAgY29uc3QgYWxsb3dlZFN0YXR1c01hcCA9IHN0YXR1c2VzICYmIGNyZWF0ZUFsbG93ZWRTdGF0dXNlc01hcChzdGF0dXNlcyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG86IE9ic2VydmFibGU8QWN0aW9uQ29udGV4dD4pIHtcclxuICAgIHJldHVybiBvLnBpcGUoZmlsdGVyU3RhdHVzKGFsbG93ZWRNYXAsIGFsbG93ZWRTdGF0dXNNYXApLCBtYXBPcGVyYXRvcigpKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJTdGF0dXMoYWxsb3dlZFR5cGVzOiBGaWx0ZXJNYXAsIGFsbG93ZWRTdGF0dXNlcz86IEZpbHRlck1hcCkge1xyXG4gIHJldHVybiBmaWx0ZXIoKGN0eDogQWN0aW9uQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UoY3R4LmFjdGlvbikhO1xyXG4gICAgY29uc3QgdHlwZU1hdGNoID0gYWxsb3dlZFR5cGVzW2FjdGlvblR5cGVdO1xyXG4gICAgY29uc3Qgc3RhdHVzTWF0Y2ggPSBhbGxvd2VkU3RhdHVzZXMgPyBhbGxvd2VkU3RhdHVzZXNbY3R4LnN0YXR1c10gOiB0cnVlO1xyXG4gICAgcmV0dXJuIHR5cGVNYXRjaCAmJiBzdGF0dXNNYXRjaDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwQWN0aW9uUmVzdWx0KCk6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgQWN0aW9uQ29tcGxldGlvbj4ge1xyXG4gIHJldHVybiBtYXAoKHsgYWN0aW9uLCBzdGF0dXMsIGVycm9yIH06IEFjdGlvbkNvbnRleHQpID0+IHtcclxuICAgIHJldHVybiA8QWN0aW9uQ29tcGxldGlvbj57XHJcbiAgICAgIGFjdGlvbixcclxuICAgICAgcmVzdWx0OiB7XHJcbiAgICAgICAgc3VjY2Vzc2Z1bDogQWN0aW9uU3RhdHVzLlN1Y2Nlc3NmdWwgPT09IHN0YXR1cyxcclxuICAgICAgICBjYW5jZWxlZDogQWN0aW9uU3RhdHVzLkNhbmNlbGVkID09PSBzdGF0dXMsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwQWN0aW9uPFQgPSBhbnk+KCk6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uQ29udGV4dCwgVD4ge1xyXG4gIHJldHVybiBtYXAoKGN0eDogQWN0aW9uQ29udGV4dCkgPT4gPFQ+Y3R4LmFjdGlvbik7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGaWx0ZXJNYXAge1xyXG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFsbG93ZWRBY3Rpb25UeXBlc01hcCh0eXBlczogQWN0aW9uVHlwZVtdKTogRmlsdGVyTWFwIHtcclxuICByZXR1cm4gdHlwZXMucmVkdWNlKChmaWx0ZXJNYXA6IEZpbHRlck1hcCwga2xhc3M6IGFueSkgPT4ge1xyXG4gICAgZmlsdGVyTWFwW2dldEFjdGlvblR5cGVGcm9tSW5zdGFuY2Uoa2xhc3MpIV0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZpbHRlck1hcDtcclxuICB9LCA8RmlsdGVyTWFwPnt9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWxsb3dlZFN0YXR1c2VzTWFwKHN0YXR1c2VzOiBBY3Rpb25TdGF0dXNbXSk6IEZpbHRlck1hcCB7XHJcbiAgcmV0dXJuIHN0YXR1c2VzLnJlZHVjZSgoZmlsdGVyTWFwOiBGaWx0ZXJNYXAsIHN0YXR1czogQWN0aW9uU3RhdHVzKSA9PiB7XHJcbiAgICBmaWx0ZXJNYXBbc3RhdHVzXSA9IHRydWU7XHJcbiAgICByZXR1cm4gZmlsdGVyTWFwO1xyXG4gIH0sIDxGaWx0ZXJNYXA+e30pO1xyXG59XHJcbiJdfQ==