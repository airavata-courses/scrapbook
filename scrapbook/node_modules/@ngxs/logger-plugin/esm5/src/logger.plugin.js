/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ActionLogger } from './action-logger';
import { LogWriter } from './log-writer';
import { NGXS_LOGGER_PLUGIN_OPTIONS } from './symbols';
var NgxsLoggerPlugin = /** @class */ (function () {
    function NgxsLoggerPlugin(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    NgxsLoggerPlugin.prototype.handle = /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    function (state, event, next) {
        if (this._options.disabled || !(/** @type {?} */ (this._options.filter))(event, state)) {
            return next(state, event);
        }
        this._logWriter = this._logWriter || new LogWriter(this._options);
        // Retrieve lazily to avoid cyclic dependency exception
        this._store = this._store || this._injector.get(Store);
        /** @type {?} */
        var actionLogger = new ActionLogger(event, this._store, this._logWriter);
        actionLogger.dispatched(state);
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        function (nextState) {
            actionLogger.completed(nextState);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            actionLogger.errored(error);
            throw error;
        })));
    };
    NgxsLoggerPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxsLoggerPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
        { type: Injector }
    ]; };
    return NgxsLoggerPlugin;
}());
export { NgxsLoggerPlugin };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._store;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._logWriter;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsLoggerPlugin.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyLnBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBZ0MsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVoRjtJQUtFLDBCQUM4QyxRQUFpQyxFQUNyRSxTQUFtQjtRQURpQixhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUNyRSxjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQzFCLENBQUM7Ozs7Ozs7SUFFSixpQ0FBTTs7Ozs7O0lBQU4sVUFBTyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVEsS0FBSyxDQUFDLENBQUM7O1lBRXhELFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTFFLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDNUIsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUEsS0FBSztZQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBaENGLFVBQVU7Ozs7Z0RBTU4sTUFBTSxTQUFDLDBCQUEwQjtnQkFiVCxRQUFROztJQXdDckMsdUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxnQkFBZ0I7Ozs7OztJQUMzQixrQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE4Qjs7Ozs7SUFHNUIsb0NBQTZFOzs7OztJQUM3RSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neHNOZXh0UGx1Z2luRm4sIE5neHNQbHVnaW4sIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFjdGlvbkxvZ2dlciB9IGZyb20gJy4vYWN0aW9uLWxvZ2dlcic7XHJcbmltcG9ydCB7IExvZ1dyaXRlciB9IGZyb20gJy4vbG9nLXdyaXRlcic7XHJcbmltcG9ydCB7IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zLCBOR1hTX0xPR0dFUl9QTFVHSU5fT1BUSU9OUyB9IGZyb20gJy4vc3ltYm9scyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzTG9nZ2VyUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XHJcbiAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlO1xyXG4gIHByaXZhdGUgX2xvZ1dyaXRlcjogTG9nV3JpdGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTkdYU19MT0dHRVJfUExVR0lOX09QVElPTlMpIHByaXZhdGUgX29wdGlvbnM6IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zLFxyXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7fVxyXG5cclxuICBoYW5kbGUoc3RhdGU6IGFueSwgZXZlbnQ6IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5Gbikge1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZGlzYWJsZWQgfHwgIXRoaXMuX29wdGlvbnMuZmlsdGVyIShldmVudCwgc3RhdGUpKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9nV3JpdGVyID0gdGhpcy5fbG9nV3JpdGVyIHx8IG5ldyBMb2dXcml0ZXIodGhpcy5fb3B0aW9ucyk7XHJcbiAgICAvLyBSZXRyaWV2ZSBsYXppbHkgdG8gYXZvaWQgY3ljbGljIGRlcGVuZGVuY3kgZXhjZXB0aW9uXHJcbiAgICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlIHx8IHRoaXMuX2luamVjdG9yLmdldDxTdG9yZT4oU3RvcmUpO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbkxvZ2dlciA9IG5ldyBBY3Rpb25Mb2dnZXIoZXZlbnQsIHRoaXMuX3N0b3JlLCB0aGlzLl9sb2dXcml0ZXIpO1xyXG5cclxuICAgIGFjdGlvbkxvZ2dlci5kaXNwYXRjaGVkKHN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpLnBpcGUoXHJcbiAgICAgIHRhcChuZXh0U3RhdGUgPT4ge1xyXG4gICAgICAgIGFjdGlvbkxvZ2dlci5jb21wbGV0ZWQobmV4dFN0YXRlKTtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG4gICAgICAgIGFjdGlvbkxvZ2dlci5lcnJvcmVkKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==