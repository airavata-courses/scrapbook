/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
import { NgxsConfig } from '../symbols';
import { HostEnvironment } from '../host-environment/host-environment';
export class ConfigValidator {
    /**
     * @param {?} _host
     * @param {?} _config
     */
    constructor(_host, _config) {
        this._host = _host;
        this._config = _config;
    }
    /**
     * @private
     * @return {?}
     */
    get isIncorrectProduction() {
        return !this._host.isDevMode() && this._config.developmentMode;
    }
    /**
     * @private
     * @return {?}
     */
    get isIncorrectDevelopment() {
        return this._host.isDevMode() && !this._config.developmentMode;
    }
    /**
     * @return {?}
     */
    verifyDevMode() {
        if (this._host.isTestMode()) {
            return;
        }
        if (this.isIncorrectProduction) {
            console.warn(MESSAGES[CODE.INCORRECT_PRODUCTION]());
        }
        else if (this.isIncorrectDevelopment) {
            console.warn(MESSAGES[CODE.INCORRECT_DEVELOPMENT]());
        }
    }
}
ConfigValidator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigValidator.ctorParameters = () => [
    { type: HostEnvironment },
    { type: NgxsConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL2NvbmZpZy12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLGVBQWUsSUFBSSxRQUFRLEVBQzNCLGVBQWUsSUFBSSxJQUFJLEVBQ3hCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdkUsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQW9CLEtBQXNCLEVBQVUsT0FBbUI7UUFBbkQsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFM0UsSUFBWSxxQkFBcUI7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxJQUFZLHNCQUFzQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7O1lBdEJGLFVBQVU7Ozs7WUFGRixlQUFlO1lBRGYsVUFBVTs7Ozs7OztJQUtMLGdDQUE4Qjs7Ozs7SUFBRSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENPTkZJR19NRVNTQUdFUyBhcyBNRVNTQUdFUyxcclxuICBWQUxJREFUSU9OX0NPREUgYXMgQ09ERVxyXG59IGZyb20gJy4uL2NvbmZpZ3MvbWVzc2FnZXMuY29uZmlnJztcclxuaW1wb3J0IHsgTmd4c0NvbmZpZyB9IGZyb20gJy4uL3N5bWJvbHMnO1xyXG5pbXBvcnQgeyBIb3N0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9ob3N0LWVudmlyb25tZW50L2hvc3QtZW52aXJvbm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3N0OiBIb3N0RW52aXJvbm1lbnQsIHByaXZhdGUgX2NvbmZpZzogTmd4c0NvbmZpZykge31cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNJbmNvcnJlY3RQcm9kdWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLl9ob3N0LmlzRGV2TW9kZSgpICYmIHRoaXMuX2NvbmZpZy5kZXZlbG9wbWVudE1vZGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0luY29ycmVjdERldmVsb3BtZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvc3QuaXNEZXZNb2RlKCkgJiYgIXRoaXMuX2NvbmZpZy5kZXZlbG9wbWVudE1vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmVyaWZ5RGV2TW9kZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9ob3N0LmlzVGVzdE1vZGUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbmNvcnJlY3RQcm9kdWN0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihNRVNTQUdFU1tDT0RFLklOQ09SUkVDVF9QUk9EVUNUSU9OXSgpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0luY29ycmVjdERldmVsb3BtZW50KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihNRVNTQUdFU1tDT0RFLklOQ09SUkVDVF9ERVZFTE9QTUVOVF0oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==