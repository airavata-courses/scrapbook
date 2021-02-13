/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { NGXS_PLUGINS } from './symbols';
export class PluginManager {
    /**
     * @param {?} _parentManager
     * @param {?} _pluginHandlers
     */
    constructor(_parentManager, _pluginHandlers) {
        this._parentManager = _parentManager;
        this._pluginHandlers = _pluginHandlers;
        this.plugins = [];
        this.registerHandlers();
    }
    /**
     * @private
     * @return {?}
     */
    get rootPlugins() {
        return (this._parentManager && this._parentManager.plugins) || this.plugins;
    }
    /**
     * @private
     * @return {?}
     */
    registerHandlers() {
        /** @type {?} */
        const pluginHandlers = this.getPluginHandlers();
        this.rootPlugins.push(...pluginHandlers);
    }
    /**
     * @private
     * @return {?}
     */
    getPluginHandlers() {
        /** @type {?} */
        const handlers = this._pluginHandlers || [];
        return handlers.map((/**
         * @param {?} plugin
         * @return {?}
         */
        (plugin) => (/** @type {?} */ ((plugin.handle ? plugin.handle.bind(plugin) : plugin)))));
    }
}
PluginManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PluginManager.ctorParameters = () => [
    { type: PluginManager, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Array, decorators: [{ type: Inject, args: [NGXS_PLUGINS,] }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9wbHVnaW4tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUE0QixNQUFNLFdBQVcsQ0FBQztBQUduRSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFHeEIsWUFHVSxjQUE2QixFQUc3QixlQUE2QjtRQUg3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUc3QixvQkFBZSxHQUFmLGVBQWUsQ0FBYztRQVJoQyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQVVsQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQVksV0FBVztRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7O2NBQ2hCLGNBQWMsR0FBbUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O2NBQ2pCLFFBQVEsR0FBaUIsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFO1FBQ3pELE9BQU8sUUFBUSxDQUFDLEdBQUc7Ozs7UUFDakIsQ0FBQyxNQUFrQixFQUFFLEVBQUUsQ0FDckIsbUJBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQWdCLEVBQ3hFLENBQUM7SUFDSixDQUFDOzs7WUE5QkYsVUFBVTs7OztZQU9pQixhQUFhLHVCQUZwQyxRQUFRLFlBQ1IsUUFBUTt3Q0FFUixNQUFNLFNBQUMsWUFBWSxjQUNuQixRQUFROzs7O0lBUFgsZ0NBQW9DOzs7OztJQUdsQyx1Q0FFcUM7Ozs7O0lBQ3JDLHdDQUVxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWFNfUExVR0lOUywgTmd4c1BsdWdpbiwgTmd4c1BsdWdpbkZuIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsdWdpbk1hbmFnZXIge1xyXG4gIHB1YmxpYyBwbHVnaW5zOiBOZ3hzUGx1Z2luRm5bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBAU2tpcFNlbGYoKVxyXG4gICAgcHJpdmF0ZSBfcGFyZW50TWFuYWdlcjogUGx1Z2luTWFuYWdlcixcclxuICAgIEBJbmplY3QoTkdYU19QTFVHSU5TKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIHByaXZhdGUgX3BsdWdpbkhhbmRsZXJzOiBOZ3hzUGx1Z2luW11cclxuICApIHtcclxuICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgcm9vdFBsdWdpbnMoKTogTmd4c1BsdWdpbkZuW10ge1xyXG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnRNYW5hZ2VyICYmIHRoaXMuX3BhcmVudE1hbmFnZXIucGx1Z2lucykgfHwgdGhpcy5wbHVnaW5zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckhhbmRsZXJzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGx1Z2luSGFuZGxlcnM6IE5neHNQbHVnaW5GbltdID0gdGhpcy5nZXRQbHVnaW5IYW5kbGVycygpO1xyXG4gICAgdGhpcy5yb290UGx1Z2lucy5wdXNoKC4uLnBsdWdpbkhhbmRsZXJzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGx1Z2luSGFuZGxlcnMoKTogTmd4c1BsdWdpbkZuW10ge1xyXG4gICAgY29uc3QgaGFuZGxlcnM6IE5neHNQbHVnaW5bXSA9IHRoaXMuX3BsdWdpbkhhbmRsZXJzIHx8IFtdO1xyXG4gICAgcmV0dXJuIGhhbmRsZXJzLm1hcChcclxuICAgICAgKHBsdWdpbjogTmd4c1BsdWdpbikgPT5cclxuICAgICAgICAocGx1Z2luLmhhbmRsZSA/IHBsdWdpbi5oYW5kbGUuYmluZChwbHVnaW4pIDogcGx1Z2luKSBhcyBOZ3hzUGx1Z2luRm5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==