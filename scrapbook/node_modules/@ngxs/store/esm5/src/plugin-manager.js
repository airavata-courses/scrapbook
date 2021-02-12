/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { NGXS_PLUGINS } from './symbols';
var PluginManager = /** @class */ (function () {
    function PluginManager(_parentManager, _pluginHandlers) {
        this._parentManager = _parentManager;
        this._pluginHandlers = _pluginHandlers;
        this.plugins = [];
        this.registerHandlers();
    }
    Object.defineProperty(PluginManager.prototype, "rootPlugins", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (this._parentManager && this._parentManager.plugins) || this.plugins;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    PluginManager.prototype.registerHandlers = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var pluginHandlers = this.getPluginHandlers();
        (_a = this.rootPlugins).push.apply(_a, tslib_1.__spread(pluginHandlers));
    };
    /**
     * @private
     * @return {?}
     */
    PluginManager.prototype.getPluginHandlers = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var handlers = this._pluginHandlers || [];
        return handlers.map((/**
         * @param {?} plugin
         * @return {?}
         */
        function (plugin) { return (/** @type {?} */ ((plugin.handle ? plugin.handle.bind(plugin) : plugin))); }));
    };
    PluginManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PluginManager.ctorParameters = function () { return [
        { type: PluginManager, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: Array, decorators: [{ type: Inject, args: [NGXS_PLUGINS,] }, { type: Optional }] }
    ]; };
    return PluginManager;
}());
export { PluginManager };
if (false) {
    /** @type {?} */
    PluginManager.prototype.plugins;
    /**
     * @type {?}
     * @private
     */
    PluginManager.prototype._parentManager;
    /**
     * @type {?}
     * @private
     */
    PluginManager.prototype._pluginHandlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9wbHVnaW4tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBNEIsTUFBTSxXQUFXLENBQUM7QUFFbkU7SUFJRSx1QkFHVSxjQUE2QixFQUc3QixlQUE2QjtRQUg3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUc3QixvQkFBZSxHQUFmLGVBQWUsQ0FBYztRQVJoQyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQVVsQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQVksc0NBQVc7Ozs7O1FBQXZCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlFLENBQUM7OztPQUFBOzs7OztJQUVPLHdDQUFnQjs7OztJQUF4Qjs7O1lBQ1EsY0FBYyxHQUFtQixJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDL0QsQ0FBQSxLQUFBLElBQUksQ0FBQyxXQUFXLENBQUEsQ0FBQyxJQUFJLDRCQUFJLGNBQWMsR0FBRTtJQUMzQyxDQUFDOzs7OztJQUVPLHlDQUFpQjs7OztJQUF6Qjs7WUFDUSxRQUFRLEdBQWlCLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRTtRQUN6RCxPQUFPLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQ2pCLFVBQUMsTUFBa0IsV0FDakIsbUJBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQWdCLEdBQUEsRUFDeEUsQ0FBQztJQUNKLENBQUM7O2dCQTlCRixVQUFVOzs7O2dCQU9pQixhQUFhLHVCQUZwQyxRQUFRLFlBQ1IsUUFBUTs0Q0FFUixNQUFNLFNBQUMsWUFBWSxjQUNuQixRQUFROztJQXNCYixvQkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLGFBQWE7OztJQUN4QixnQ0FBb0M7Ozs7O0lBR2xDLHVDQUVxQzs7Ozs7SUFDckMsd0NBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYU19QTFVHSU5TLCBOZ3hzUGx1Z2luLCBOZ3hzUGx1Z2luRm4gfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGx1Z2luTWFuYWdlciB7XHJcbiAgcHVibGljIHBsdWdpbnM6IE5neHNQbHVnaW5GbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBwcml2YXRlIF9wYXJlbnRNYW5hZ2VyOiBQbHVnaW5NYW5hZ2VyLFxyXG4gICAgQEluamVjdChOR1hTX1BMVUdJTlMpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHJpdmF0ZSBfcGx1Z2luSGFuZGxlcnM6IE5neHNQbHVnaW5bXVxyXG4gICkge1xyXG4gICAgdGhpcy5yZWdpc3RlckhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCByb290UGx1Z2lucygpOiBOZ3hzUGx1Z2luRm5bXSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX3BhcmVudE1hbmFnZXIgJiYgdGhpcy5fcGFyZW50TWFuYWdlci5wbHVnaW5zKSB8fCB0aGlzLnBsdWdpbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVySGFuZGxlcnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwbHVnaW5IYW5kbGVyczogTmd4c1BsdWdpbkZuW10gPSB0aGlzLmdldFBsdWdpbkhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLnJvb3RQbHVnaW5zLnB1c2goLi4ucGx1Z2luSGFuZGxlcnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQbHVnaW5IYW5kbGVycygpOiBOZ3hzUGx1Z2luRm5bXSB7XHJcbiAgICBjb25zdCBoYW5kbGVyczogTmd4c1BsdWdpbltdID0gdGhpcy5fcGx1Z2luSGFuZGxlcnMgfHwgW107XHJcbiAgICByZXR1cm4gaGFuZGxlcnMubWFwKFxyXG4gICAgICAocGx1Z2luOiBOZ3hzUGx1Z2luKSA9PlxyXG4gICAgICAgIChwbHVnaW4uaGFuZGxlID8gcGx1Z2luLmhhbmRsZS5iaW5kKHBsdWdpbikgOiBwbHVnaW4pIGFzIE5neHNQbHVnaW5GblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19