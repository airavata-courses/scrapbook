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
export class NgxsLoggerPlugin {
    /**
     * @param {?} _options
     * @param {?} _injector
     */
    constructor(_options, _injector) {
        this._options = _options;
        this._injector = _injector;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    handle(state, event, next) {
        if (this._options.disabled || !(/** @type {?} */ (this._options.filter))(event, state)) {
            return next(state, event);
        }
        this._logWriter = this._logWriter || new LogWriter(this._options);
        // Retrieve lazily to avoid cyclic dependency exception
        this._store = this._store || this._injector.get(Store);
        /** @type {?} */
        const actionLogger = new ActionLogger(event, this._store, this._logWriter);
        actionLogger.dispatched(state);
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        nextState => {
            actionLogger.completed(nextState);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            actionLogger.errored(error);
            throw error;
        })));
    }
}
NgxsLoggerPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsLoggerPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyLnBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBZ0MsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdoRixNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUkzQixZQUM4QyxRQUFpQyxFQUNyRSxTQUFtQjtRQURpQixhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUNyRSxjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQzFCLENBQUM7Ozs7Ozs7SUFFSixNQUFNLENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxJQUFzQjtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFRLEtBQUssQ0FBQyxDQUFDOztjQUV4RCxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUUxRSxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzVCLEdBQUc7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBaENGLFVBQVU7Ozs7NENBTU4sTUFBTSxTQUFDLDBCQUEwQjtZQWJULFFBQVE7Ozs7Ozs7SUFTbkMsa0NBQXNCOzs7OztJQUN0QixzQ0FBOEI7Ozs7O0lBRzVCLG9DQUE2RTs7Ozs7SUFDN0UscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTmV4dFBsdWdpbkZuLCBOZ3hzUGx1Z2luLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY3Rpb25Mb2dnZXIgfSBmcm9tICcuL2FjdGlvbi1sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dXcml0ZXIgfSBmcm9tICcuL2xvZy13cml0ZXInO1xyXG5pbXBvcnQgeyBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucywgTkdYU19MT0dHRVJfUExVR0lOX09QVElPTlMgfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4c0xvZ2dlclBsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xyXG4gIHByaXZhdGUgX3N0b3JlOiBTdG9yZTtcclxuICBwcml2YXRlIF9sb2dXcml0ZXI6IExvZ1dyaXRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TKSBwcml2YXRlIF9vcHRpb25zOiBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucyxcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvclxyXG4gICkge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmRpc2FibGVkIHx8ICF0aGlzLl9vcHRpb25zLmZpbHRlciEoZXZlbnQsIHN0YXRlKSkge1xyXG4gICAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvZ1dyaXRlciA9IHRoaXMuX2xvZ1dyaXRlciB8fCBuZXcgTG9nV3JpdGVyKHRoaXMuX29wdGlvbnMpO1xyXG4gICAgLy8gUmV0cmlldmUgbGF6aWx5IHRvIGF2b2lkIGN5Y2xpYyBkZXBlbmRlbmN5IGV4Y2VwdGlvblxyXG4gICAgdGhpcy5fc3RvcmUgPSB0aGlzLl9zdG9yZSB8fCB0aGlzLl9pbmplY3Rvci5nZXQ8U3RvcmU+KFN0b3JlKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25Mb2dnZXIgPSBuZXcgQWN0aW9uTG9nZ2VyKGV2ZW50LCB0aGlzLl9zdG9yZSwgdGhpcy5fbG9nV3JpdGVyKTtcclxuXHJcbiAgICBhY3Rpb25Mb2dnZXIuZGlzcGF0Y2hlZChzdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGV2ZW50KS5waXBlKFxyXG4gICAgICB0YXAobmV4dFN0YXRlID0+IHtcclxuICAgICAgICBhY3Rpb25Mb2dnZXIuY29tcGxldGVkKG5leHRTdGF0ZSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcclxuICAgICAgICBhY3Rpb25Mb2dnZXIuZXJyb3JlZChlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=