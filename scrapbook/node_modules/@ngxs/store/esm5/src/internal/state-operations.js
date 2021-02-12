/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InternalDispatcher } from '../internal/dispatcher';
import { StateStream } from './state-stream';
import { NgxsConfig } from '../symbols';
import { deepFreeze } from '../utils/freeze';
import { ConfigValidator } from '../internal/config-validator';
/**
 * State Context factory class
 * @ignore
 */
var InternalStateOperations = /** @class */ (function () {
    function InternalStateOperations(_stateStream, _dispatcher, _config, configValidator) {
        this._stateStream = _stateStream;
        this._dispatcher = _dispatcher;
        this._config = _config;
        configValidator.verifyDevMode();
    }
    /**
     * Returns the root state operators.
     */
    /**
     * Returns the root state operators.
     * @return {?}
     */
    InternalStateOperations.prototype.getRootStateOperations = /**
     * Returns the root state operators.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rootStateOperations = {
            getState: (/**
             * @return {?}
             */
            function () { return _this._stateStream.getValue(); }),
            setState: (/**
             * @param {?} newState
             * @return {?}
             */
            function (newState) { return _this._stateStream.next(newState); }),
            dispatch: (/**
             * @param {?} actionOrActions
             * @return {?}
             */
            function (actionOrActions) { return _this._dispatcher.dispatch(actionOrActions); })
        };
        if (this._config.developmentMode) {
            return this.ensureStateAndActionsAreImmutable(rootStateOperations);
        }
        return rootStateOperations;
    };
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    InternalStateOperations.prototype.ensureStateAndActionsAreImmutable = /**
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        return {
            getState: (/**
             * @return {?}
             */
            function () { return root.getState(); }),
            setState: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var frozenValue = deepFreeze(value);
                return root.setState(frozenValue);
            }),
            dispatch: (/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) {
                return root.dispatch(actions);
            })
        };
    };
    /**
     * @param {?} results
     * @return {?}
     */
    InternalStateOperations.prototype.setStateToTheCurrentWithNew = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        /** @type {?} */
        var stateOperations = this.getRootStateOperations();
        // Get our current stream
        /** @type {?} */
        var currentState = stateOperations.getState();
        // Set the state to the current + new
        stateOperations.setState(tslib_1.__assign({}, currentState, results.defaults));
    };
    InternalStateOperations.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InternalStateOperations.ctorParameters = function () { return [
        { type: StateStream },
        { type: InternalDispatcher },
        { type: NgxsConfig },
        { type: ConfigValidator }
    ]; };
    return InternalStateOperations;
}());
export { InternalStateOperations };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._dispatcher;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtb3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBTS9EO0lBRUUsaUNBQ1UsWUFBeUIsRUFDekIsV0FBK0IsRUFDL0IsT0FBbUIsRUFDM0IsZUFBZ0M7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFHM0IsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3REFBc0I7Ozs7SUFBdEI7UUFBQSxpQkFZQzs7WUFYTyxtQkFBbUIsR0FBRztZQUMxQixRQUFROzs7WUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQTtZQUM1QyxRQUFROzs7O1lBQUUsVUFBQyxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQTtZQUM3RCxRQUFROzs7O1lBQUUsVUFBQyxlQUE0QixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQTFDLENBQTBDLENBQUE7U0FDdkY7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDcEU7UUFFRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLG1FQUFpQzs7Ozs7SUFBekMsVUFBMEMsSUFBMEI7UUFDbEUsT0FBTztZQUNMLFFBQVE7OztZQUFFLGNBQU0sT0FBQSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxDQUFBO1lBQy9CLFFBQVE7Ozs7WUFBRSxVQUFBLEtBQUs7O29CQUNQLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFBO1lBQ0QsUUFBUTs7OztZQUFFLFVBQUEsT0FBTztnQkFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkRBQTJCOzs7O0lBQTNCLFVBQTRCLE9BQTBCOztZQUM5QyxlQUFlLEdBQXlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRTs7O1lBR3JFLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQy9DLHFDQUFxQztRQUNyQyxlQUFlLENBQUMsUUFBUSxzQkFBTSxZQUFZLEVBQUssT0FBTyxDQUFDLFFBQVEsRUFBRyxDQUFDO0lBQ3JFLENBQUM7O2dCQWhERixVQUFVOzs7O2dCQVRGLFdBQVc7Z0JBRFgsa0JBQWtCO2dCQUVsQixVQUFVO2dCQUVWLGVBQWU7O0lBdUR4Qiw4QkFBQztDQUFBLEFBakRELElBaURDO1NBaERZLHVCQUF1Qjs7Ozs7O0lBRWhDLCtDQUFpQzs7Ozs7SUFDakMsOENBQXVDOzs7OztJQUN2QywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZU9wZXJhdGlvbnMsIFN0YXRlc0FuZERlZmF1bHRzIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgSW50ZXJuYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi4vaW50ZXJuYWwvZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IFN0YXRlU3RyZWFtIH0gZnJvbSAnLi9zdGF0ZS1zdHJlYW0nO1xyXG5pbXBvcnQgeyBOZ3hzQ29uZmlnIH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcbmltcG9ydCB7IGRlZXBGcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xyXG5pbXBvcnQgeyBDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuLi9pbnRlcm5hbC9jb25maWctdmFsaWRhdG9yJztcclxuXHJcbi8qKlxyXG4gKiBTdGF0ZSBDb250ZXh0IGZhY3RvcnkgY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc3RhdGVTdHJlYW06IFN0YXRlU3RyZWFtLFxyXG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hlcjogSW50ZXJuYWxEaXNwYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBOZ3hzQ29uZmlnLFxyXG4gICAgY29uZmlnVmFsaWRhdG9yOiBDb25maWdWYWxpZGF0b3JcclxuICApIHtcclxuICAgIGNvbmZpZ1ZhbGlkYXRvci52ZXJpZnlEZXZNb2RlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByb290IHN0YXRlIG9wZXJhdG9ycy5cclxuICAgKi9cclxuICBnZXRSb290U3RhdGVPcGVyYXRpb25zKCk6IFN0YXRlT3BlcmF0aW9uczxhbnk+IHtcclxuICAgIGNvbnN0IHJvb3RTdGF0ZU9wZXJhdGlvbnMgPSB7XHJcbiAgICAgIGdldFN0YXRlOiAoKSA9PiB0aGlzLl9zdGF0ZVN0cmVhbS5nZXRWYWx1ZSgpLFxyXG4gICAgICBzZXRTdGF0ZTogKG5ld1N0YXRlOiBhbnkpID0+IHRoaXMuX3N0YXRlU3RyZWFtLm5leHQobmV3U3RhdGUpLFxyXG4gICAgICBkaXNwYXRjaDogKGFjdGlvbk9yQWN0aW9uczogYW55IHwgYW55W10pID0+IHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uT3JBY3Rpb25zKVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRldmVsb3BtZW50TW9kZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbnN1cmVTdGF0ZUFuZEFjdGlvbnNBcmVJbW11dGFibGUocm9vdFN0YXRlT3BlcmF0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvb3RTdGF0ZU9wZXJhdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuc3VyZVN0YXRlQW5kQWN0aW9uc0FyZUltbXV0YWJsZShyb290OiBTdGF0ZU9wZXJhdGlvbnM8YW55Pik6IFN0YXRlT3BlcmF0aW9uczxhbnk+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldFN0YXRlOiAoKSA9PiByb290LmdldFN0YXRlKCksXHJcbiAgICAgIHNldFN0YXRlOiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnJvemVuVmFsdWUgPSBkZWVwRnJlZXplKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gcm9vdC5zZXRTdGF0ZShmcm96ZW5WYWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BhdGNoOiBhY3Rpb25zID0+IHtcclxuICAgICAgICByZXR1cm4gcm9vdC5kaXNwYXRjaChhY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9UaGVDdXJyZW50V2l0aE5ldyhyZXN1bHRzOiBTdGF0ZXNBbmREZWZhdWx0cyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdGVPcGVyYXRpb25zOiBTdGF0ZU9wZXJhdGlvbnM8YW55PiA9IHRoaXMuZ2V0Um9vdFN0YXRlT3BlcmF0aW9ucygpO1xyXG5cclxuICAgIC8vIEdldCBvdXIgY3VycmVudCBzdHJlYW1cclxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHN0YXRlT3BlcmF0aW9ucy5nZXRTdGF0ZSgpO1xyXG4gICAgLy8gU2V0IHRoZSBzdGF0ZSB0byB0aGUgY3VycmVudCArIG5ld1xyXG4gICAgc3RhdGVPcGVyYXRpb25zLnNldFN0YXRlKHsgLi4uY3VycmVudFN0YXRlLCAuLi5yZXN1bHRzLmRlZmF1bHRzIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=