/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Injector } from '@angular/core';
import { getActionTypeFromInstance, Store } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { NGXS_DEVTOOLS_OPTIONS } from './symbols';
/**
 * Adds support for the Redux Devtools extension:
 * http://extension.remotedev.io/
 */
var NgxsReduxDevtoolsPlugin = /** @class */ (function () {
    function NgxsReduxDevtoolsPlugin(_options, _injector) {
        var _this = this;
        this._options = _options;
        this._injector = _injector;
        this.devtoolsExtension = null;
        this.windowObj = typeof window !== 'undefined' ? window : {};
        /** @type {?} */
        var globalDevtools = this.windowObj['__REDUX_DEVTOOLS_EXTENSION__'] || this.windowObj['devToolsExtension'];
        if (globalDevtools) {
            this.devtoolsExtension = (/** @type {?} */ (globalDevtools.connect(_options)));
            this.devtoolsExtension.subscribe((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return _this.dispatched(a); }));
        }
    }
    Object.defineProperty(NgxsReduxDevtoolsPlugin.prototype, "store", {
        /**
         * Lazy get the store for circular dependency issues
         */
        get: /**
         * Lazy get the store for circular dependency issues
         * @private
         * @return {?}
         */
        function () {
            return this._injector.get(Store);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Middleware handle function
     */
    /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.handle = /**
     * Middleware handle function
     * @param {?} state
     * @param {?} action
     * @param {?} next
     * @return {?}
     */
    function (state, action, next) {
        var _this = this;
        /** @type {?} */
        var isDisabled = this._options && this._options.disabled;
        if (!this.devtoolsExtension || isDisabled) {
            return next(state, action);
        }
        return next(state, action).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var newState = _this.store.snapshot();
            _this.sendToDevTools(state, action, newState);
            throw error;
        })), tap((/**
         * @param {?} newState
         * @return {?}
         */
        function (newState) {
            _this.sendToDevTools(state, action, newState);
        })));
    };
    /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.sendToDevTools = /**
     * @private
     * @param {?} state
     * @param {?} action
     * @param {?} newState
     * @return {?}
     */
    function (state, action, newState) {
        /** @type {?} */
        var type = getActionTypeFromInstance(action);
        // if init action, send initial state to dev tools
        /** @type {?} */
        var isInitAction = type === '@@INIT';
        if (isInitAction) {
            (/** @type {?} */ (this.devtoolsExtension)).init(state);
        }
        else {
            (/** @type {?} */ (this.devtoolsExtension)).send(tslib_1.__assign({}, action, { action: null, type: type }), newState);
        }
    };
    /**
     * Handle the action from the dev tools subscription
     */
    /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    NgxsReduxDevtoolsPlugin.prototype.dispatched = /**
     * Handle the action from the dev tools subscription
     * @param {?} action
     * @return {?}
     */
    function (action) {
        var _this = this;
        if (action.type === 'DISPATCH') {
            if (action.payload.type === 'JUMP_TO_ACTION' ||
                action.payload.type === 'JUMP_TO_STATE') {
                /** @type {?} */
                var prevState = JSON.parse(action.state);
                this.store.reset(prevState);
            }
            else if (action.payload.type === 'TOGGLE_ACTION') {
                console.warn('Skip is not supported at this time.');
            }
            else if (action.payload.type === 'IMPORT_STATE') {
                var _a = action.payload.nextLiftedState, actionsById_1 = _a.actionsById, computedStates_1 = _a.computedStates, currentStateIndex = _a.currentStateIndex;
                (/** @type {?} */ (this.devtoolsExtension)).init(computedStates_1[0].state);
                Object.keys(actionsById_1)
                    .filter((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                function (actionId) { return actionId !== '0'; }))
                    .forEach((/**
                 * @param {?} actionId
                 * @return {?}
                 */
                function (actionId) {
                    return (/** @type {?} */ (_this.devtoolsExtension)).send(actionsById_1[actionId], computedStates_1[actionId].state);
                }));
                this.store.reset(computedStates_1[currentStateIndex].state);
            }
        }
        else if (action.type === 'ACTION') {
            /** @type {?} */
            var actionPayload = JSON.parse(action.payload);
            this.store.dispatch(actionPayload);
        }
    };
    NgxsReduxDevtoolsPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxsReduxDevtoolsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
        { type: Injector }
    ]; };
    return NgxsReduxDevtoolsPlugin;
}());
export { NgxsReduxDevtoolsPlugin };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.devtoolsExtension;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype.windowObj;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NgxsReduxDevtoolsPlugin.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMucGx1Z2luLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvZGV2dG9vbHMtcGx1Z2luLyIsInNvdXJjZXMiOlsic3JjL2RldnRvb2xzLnBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQWdDLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3RixPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFDTCxxQkFBcUIsRUFJdEIsTUFBTSxXQUFXLENBQUM7Ozs7O0FBTW5CO0lBS0UsaUNBQ3lDLFFBQTZCLEVBQzVELFNBQW1CO1FBRjdCLGlCQVVDO1FBVHdDLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzVELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFMWixzQkFBaUIsR0FBaUMsSUFBSSxDQUFDO1FBQ3ZELGNBQVMsR0FBUSxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQU10RSxjQUFjLEdBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZGLElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxtQkFBQSxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF5QixDQUFDO1lBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBS0Qsc0JBQVksMENBQUs7UUFIakI7O1dBRUc7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBUSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7Ozs7OztJQUNILHdDQUFNOzs7Ozs7O0lBQU4sVUFBTyxLQUFVLEVBQUUsTUFBVyxFQUFFLElBQXNCO1FBQXRELGlCQWdCQzs7WUFmTyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxVQUFVLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDN0IsVUFBVTs7OztRQUFDLFVBQUEsS0FBSzs7Z0JBQ1IsUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3QyxNQUFNLEtBQUssQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDVixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBRU8sZ0RBQWM7Ozs7Ozs7SUFBdEIsVUFBdUIsS0FBVSxFQUFFLE1BQVcsRUFBRSxRQUFhOztZQUNyRCxJQUFJLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDOzs7WUFFeEMsWUFBWSxHQUFHLElBQUksS0FBSyxRQUFRO1FBQ3RDLElBQUksWUFBWSxFQUFFO1lBQ2hCLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsSUFBSSxzQkFBTSxNQUFNLElBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLE1BQUEsS0FBSSxRQUFRLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsNENBQVU7Ozs7O0lBQVYsVUFBVyxNQUEwQjtRQUFyQyxpQkE0QkM7UUEzQkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM5QixJQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQjtnQkFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssZUFBZSxFQUN2Qzs7b0JBQ00sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQzthQUNyRDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtnQkFDM0MsSUFBQSxtQ0FJNEIsRUFIaEMsOEJBQVcsRUFDWCxvQ0FBYyxFQUNkLHdDQUNnQztnQkFDbEMsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBVyxDQUFDO3FCQUNyQixNQUFNOzs7O2dCQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsRUFBQztxQkFDcEMsT0FBTzs7OztnQkFBQyxVQUFBLFFBQVE7b0JBQ2YsT0FBQSxtQkFBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxJQUFJLENBQUMsYUFBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUFuRixDQUFtRixFQUNwRixDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7Z0JBQzdCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOztnQkF2RkYsVUFBVTs7OztnREFNTixNQUFNLFNBQUMscUJBQXFCO2dCQXJCSixRQUFROztJQXVHckMsOEJBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQXZGWSx1QkFBdUI7Ozs7OztJQUNsQyxvREFBd0U7Ozs7O0lBQ3hFLDRDQUE4RTs7Ozs7SUFHNUUsMkNBQW9FOzs7OztJQUNwRSw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UsIE5neHNOZXh0UGx1Z2luRm4sIE5neHNQbHVnaW4sIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE5HWFNfREVWVE9PTFNfT1BUSU9OUyxcclxuICBOZ3hzRGV2dG9vbHNBY3Rpb24sXHJcbiAgTmd4c0RldnRvb2xzRXh0ZW5zaW9uLFxyXG4gIE5neHNEZXZ0b29sc09wdGlvbnNcclxufSBmcm9tICcuL3N5bWJvbHMnO1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgc3VwcG9ydCBmb3IgdGhlIFJlZHV4IERldnRvb2xzIGV4dGVuc2lvbjpcclxuICogaHR0cDovL2V4dGVuc2lvbi5yZW1vdGVkZXYuaW8vXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGV2dG9vbHNFeHRlbnNpb246IE5neHNEZXZ0b29sc0V4dGVuc2lvbiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgd2luZG93T2JqOiBhbnkgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTkdYU19ERVZUT09MU19PUFRJT05TKSBwcml2YXRlIF9vcHRpb25zOiBOZ3hzRGV2dG9vbHNPcHRpb25zLFxyXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7XHJcbiAgICBjb25zdCBnbG9iYWxEZXZ0b29scyA9XHJcbiAgICAgIHRoaXMud2luZG93T2JqWydfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fJ10gfHwgdGhpcy53aW5kb3dPYmpbJ2RldlRvb2xzRXh0ZW5zaW9uJ107XHJcbiAgICBpZiAoZ2xvYmFsRGV2dG9vbHMpIHtcclxuICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiA9IGdsb2JhbERldnRvb2xzLmNvbm5lY3QoX29wdGlvbnMpIGFzIE5neHNEZXZ0b29sc0V4dGVuc2lvbjtcclxuICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbi5zdWJzY3JpYmUoYSA9PiB0aGlzLmRpc3BhdGNoZWQoYSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eSBnZXQgdGhlIHN0b3JlIGZvciBjaXJjdWxhciBkZXBlbmRlbmN5IGlzc3Vlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IHN0b3JlKCk6IFN0b3JlIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmplY3Rvci5nZXQ8U3RvcmU+KFN0b3JlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1pZGRsZXdhcmUgaGFuZGxlIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGFjdGlvbjogYW55LCBuZXh0OiBOZ3hzTmV4dFBsdWdpbkZuKSB7XHJcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmRpc2FibGVkO1xyXG4gICAgaWYgKCF0aGlzLmRldnRvb2xzRXh0ZW5zaW9uIHx8IGlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGFjdGlvbikucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB0aGlzLnN0b3JlLnNuYXBzaG90KCk7XHJcbiAgICAgICAgdGhpcy5zZW5kVG9EZXZUb29scyhzdGF0ZSwgYWN0aW9uLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YXAobmV3U3RhdGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VuZFRvRGV2VG9vbHMoc3RhdGUsIGFjdGlvbiwgbmV3U3RhdGUpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VuZFRvRGV2VG9vbHMoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnksIG5ld1N0YXRlOiBhbnkpIHtcclxuICAgIGNvbnN0IHR5cGUgPSBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlKGFjdGlvbik7XHJcbiAgICAvLyBpZiBpbml0IGFjdGlvbiwgc2VuZCBpbml0aWFsIHN0YXRlIHRvIGRldiB0b29sc1xyXG4gICAgY29uc3QgaXNJbml0QWN0aW9uID0gdHlwZSA9PT0gJ0BASU5JVCc7XHJcbiAgICBpZiAoaXNJbml0QWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuZGV2dG9vbHNFeHRlbnNpb24hLmluaXQoc3RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiEuc2VuZCh7IC4uLmFjdGlvbiwgYWN0aW9uOiBudWxsLCB0eXBlIH0sIG5ld1N0YXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgYWN0aW9uIGZyb20gdGhlIGRldiB0b29scyBzdWJzY3JpcHRpb25cclxuICAgKi9cclxuICBkaXNwYXRjaGVkKGFjdGlvbjogTmd4c0RldnRvb2xzQWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdESVNQQVRDSCcpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLnR5cGUgPT09ICdKVU1QX1RPX0FDVElPTicgfHxcclxuICAgICAgICBhY3Rpb24ucGF5bG9hZC50eXBlID09PSAnSlVNUF9UT19TVEFURSdcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgcHJldlN0YXRlID0gSlNPTi5wYXJzZShhY3Rpb24uc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmUucmVzZXQocHJldlN0YXRlKTtcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZC50eXBlID09PSAnVE9HR0xFX0FDVElPTicpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1NraXAgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHRpbWUuJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQudHlwZSA9PT0gJ0lNUE9SVF9TVEFURScpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBhY3Rpb25zQnlJZCxcclxuICAgICAgICAgIGNvbXB1dGVkU3RhdGVzLFxyXG4gICAgICAgICAgY3VycmVudFN0YXRlSW5kZXhcclxuICAgICAgICB9ID0gYWN0aW9uLnBheWxvYWQubmV4dExpZnRlZFN0YXRlO1xyXG4gICAgICAgIHRoaXMuZGV2dG9vbHNFeHRlbnNpb24hLmluaXQoY29tcHV0ZWRTdGF0ZXNbMF0uc3RhdGUpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnNCeUlkKVxyXG4gICAgICAgICAgLmZpbHRlcihhY3Rpb25JZCA9PiBhY3Rpb25JZCAhPT0gJzAnKVxyXG4gICAgICAgICAgLmZvckVhY2goYWN0aW9uSWQgPT5cclxuICAgICAgICAgICAgdGhpcy5kZXZ0b29sc0V4dGVuc2lvbiEuc2VuZChhY3Rpb25zQnlJZFthY3Rpb25JZF0sIGNvbXB1dGVkU3RhdGVzW2FjdGlvbklkXS5zdGF0ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5yZXNldChjb21wdXRlZFN0YXRlc1tjdXJyZW50U3RhdGVJbmRleF0uc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnQUNUSU9OJykge1xyXG4gICAgICBjb25zdCBhY3Rpb25QYXlsb2FkID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uUGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==