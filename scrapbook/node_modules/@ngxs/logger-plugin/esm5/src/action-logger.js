/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getActionTypeFromInstance } from '@ngxs/store';
import { formatTime } from './internals';
var ActionLogger = /** @class */ (function () {
    function ActionLogger(action, store, logWriter) {
        this.action = action;
        this.store = store;
        this.logWriter = logWriter;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    ActionLogger.prototype.dispatched = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var actionName = getActionTypeFromInstance(this.action);
        /** @type {?} */
        var formattedTime = formatTime(new Date());
        /** @type {?} */
        var message = "action " + actionName + " @ " + formattedTime;
        this.logWriter.startGroup(message);
        // print payload only if at least one property is supplied
        if (this._hasPayload(this.action)) {
            this.logWriter.logGrey('payload', tslib_1.__assign({}, this.action));
        }
        this.logWriter.logGrey('prev state', state);
    };
    /**
     * @param {?} nextState
     * @return {?}
     */
    ActionLogger.prototype.completed = /**
     * @param {?} nextState
     * @return {?}
     */
    function (nextState) {
        this.logWriter.logGreen('next state', nextState);
        this.logWriter.endGroup();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ActionLogger.prototype.errored = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.logWriter.logRedish('next state after error', this.store.snapshot());
        this.logWriter.logRedish('error', error);
        this.logWriter.endGroup();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ActionLogger.prototype._hasPayload = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var nonEmptyProperties = this._getNonEmptyProperties(event);
        return nonEmptyProperties.length > 0;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ActionLogger.prototype._getNonEmptyProperties = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keys = Object.keys(event);
        /** @type {?} */
        var values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return event[key]; }));
        return values.filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value !== undefined; }));
    };
    return ActionLogger;
}());
export { ActionLogger };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.action;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.logWriter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvYWN0aW9uLWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3pDO0lBQ0Usc0JBQW9CLE1BQVcsRUFBVSxLQUFZLEVBQVUsU0FBb0I7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFdkYsaUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7O1lBQ2IsVUFBVSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQ25ELGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7WUFFdEMsT0FBTyxHQUFHLFlBQVUsVUFBVSxXQUFNLGFBQWU7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsMERBQTBEO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyx1QkFBTyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxnQ0FBUzs7OztJQUFULFVBQVUsU0FBYztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELDhCQUFPOzs7O0lBQVAsVUFBUSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFTyxrQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBVTs7WUFDdEIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztRQUM3RCxPQUFPLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sNkNBQXNCOzs7OztJQUE5QixVQUErQixLQUFVOztZQUNqQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssU0FBUyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQzs7Ozs7OztJQXRDYSw4QkFBbUI7Ozs7O0lBQUUsNkJBQW9COzs7OztJQUFFLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4vaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgTG9nV3JpdGVyIH0gZnJvbSAnLi9sb2ctd3JpdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25Mb2dnZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlLCBwcml2YXRlIGxvZ1dyaXRlcjogTG9nV3JpdGVyKSB7fVxyXG5cclxuICBkaXNwYXRjaGVkKHN0YXRlOiBhbnkpIHtcclxuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKHRoaXMuYWN0aW9uKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgYWN0aW9uICR7YWN0aW9uTmFtZX0gQCAke2Zvcm1hdHRlZFRpbWV9YDtcclxuICAgIHRoaXMubG9nV3JpdGVyLnN0YXJ0R3JvdXAobWVzc2FnZSk7XHJcblxyXG4gICAgLy8gcHJpbnQgcGF5bG9hZCBvbmx5IGlmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBpcyBzdXBwbGllZFxyXG4gICAgaWYgKHRoaXMuX2hhc1BheWxvYWQodGhpcy5hY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMubG9nV3JpdGVyLmxvZ0dyZXkoJ3BheWxvYWQnLCB7IC4uLnRoaXMuYWN0aW9uIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9nV3JpdGVyLmxvZ0dyZXkoJ3ByZXYgc3RhdGUnLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWQobmV4dFN0YXRlOiBhbnkpIHtcclxuICAgIHRoaXMubG9nV3JpdGVyLmxvZ0dyZWVuKCduZXh0IHN0YXRlJywgbmV4dFN0YXRlKTtcclxuICAgIHRoaXMubG9nV3JpdGVyLmVuZEdyb3VwKCk7XHJcbiAgfVxyXG5cclxuICBlcnJvcmVkKGVycm9yOiBhbnkpIHtcclxuICAgIHRoaXMubG9nV3JpdGVyLmxvZ1JlZGlzaCgnbmV4dCBzdGF0ZSBhZnRlciBlcnJvcicsIHRoaXMuc3RvcmUuc25hcHNob3QoKSk7XHJcbiAgICB0aGlzLmxvZ1dyaXRlci5sb2dSZWRpc2goJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgdGhpcy5sb2dXcml0ZXIuZW5kR3JvdXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhc1BheWxvYWQoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qgbm9uRW1wdHlQcm9wZXJ0aWVzID0gdGhpcy5fZ2V0Tm9uRW1wdHlQcm9wZXJ0aWVzKGV2ZW50KTtcclxuICAgIHJldHVybiBub25FbXB0eVByb3BlcnRpZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE5vbkVtcHR5UHJvcGVydGllcyhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnQpO1xyXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IGV2ZW50W2tleV0pO1xyXG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==