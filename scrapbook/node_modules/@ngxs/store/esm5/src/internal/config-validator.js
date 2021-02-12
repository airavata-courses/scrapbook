/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
import { NgxsConfig } from '../symbols';
import { HostEnvironment } from '../host-environment/host-environment';
var ConfigValidator = /** @class */ (function () {
    function ConfigValidator(_host, _config) {
        this._host = _host;
        this._config = _config;
    }
    Object.defineProperty(ConfigValidator.prototype, "isIncorrectProduction", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !this._host.isDevMode() && this._config.developmentMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigValidator.prototype, "isIncorrectDevelopment", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._host.isDevMode() && !this._config.developmentMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ConfigValidator.prototype.verifyDevMode = /**
     * @return {?}
     */
    function () {
        if (this._host.isTestMode()) {
            return;
        }
        if (this.isIncorrectProduction) {
            console.warn(MESSAGES[CODE.INCORRECT_PRODUCTION]());
        }
        else if (this.isIncorrectDevelopment) {
            console.warn(MESSAGES[CODE.INCORRECT_DEVELOPMENT]());
        }
    };
    ConfigValidator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigValidator.ctorParameters = function () { return [
        { type: HostEnvironment },
        { type: NgxsConfig }
    ]; };
    return ConfigValidator;
}());
export { ConfigValidator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigValidator.prototype._host;
    /**
     * @type {?}
     * @private
     */
    ConfigValidator.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL2NvbmZpZy12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLGVBQWUsSUFBSSxRQUFRLEVBQzNCLGVBQWUsSUFBSSxJQUFJLEVBQ3hCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdkU7SUFFRSx5QkFBb0IsS0FBc0IsRUFBVSxPQUFtQjtRQUFuRCxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDO0lBRTNFLHNCQUFZLGtEQUFxQjs7Ozs7UUFBakM7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLG1EQUFzQjs7Ozs7UUFBbEM7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTs7OztJQUVNLHVDQUFhOzs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBRkYsZUFBZTtnQkFEZixVQUFVOztJQTBCbkIsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxlQUFlOzs7Ozs7SUFDZCxnQ0FBOEI7Ozs7O0lBQUUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDT05GSUdfTUVTU0FHRVMgYXMgTUVTU0FHRVMsXHJcbiAgVkFMSURBVElPTl9DT0RFIGFzIENPREVcclxufSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XHJcbmltcG9ydCB7IE5neHNDb25maWcgfSBmcm9tICcuLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgSG9zdEVudmlyb25tZW50IH0gZnJvbSAnLi4vaG9zdC1lbnZpcm9ubWVudC9ob3N0LWVudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1ZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDogSG9zdEVudmlyb25tZW50LCBwcml2YXRlIF9jb25maWc6IE5neHNDb25maWcpIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGlzSW5jb3JyZWN0UHJvZHVjdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5faG9zdC5pc0Rldk1vZGUoKSAmJiB0aGlzLl9jb25maWcuZGV2ZWxvcG1lbnRNb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNJbmNvcnJlY3REZXZlbG9wbWVudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ob3N0LmlzRGV2TW9kZSgpICYmICF0aGlzLl9jb25maWcuZGV2ZWxvcG1lbnRNb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZlcmlmeURldk1vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faG9zdC5pc1Rlc3RNb2RlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW5jb3JyZWN0UHJvZHVjdGlvbikge1xyXG4gICAgICBjb25zb2xlLndhcm4oTUVTU0FHRVNbQ09ERS5JTkNPUlJFQ1RfUFJPRFVDVElPTl0oKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbmNvcnJlY3REZXZlbG9wbWVudCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oTUVTU0FHRVNbQ09ERS5JTkNPUlJFQ1RfREVWRUxPUE1FTlRdKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=