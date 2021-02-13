/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
export class DispatchOutsideZoneNgxsExecutionStrategy {
    /**
     * @param {?} _ngZone
     * @param {?} _platformId
     */
    constructor(_ngZone, _platformId) {
        this._ngZone = _ngZone;
        this._platformId = _platformId;
        this.verifyZoneIsNotNooped(this._ngZone);
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    enter(func) {
        if (isPlatformServer(this._platformId)) {
            return this.runInsideAngular(func);
        }
        return this.runOutsideAngular(func);
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    leave(func) {
        return this.runInsideAngular(func);
    }
    /**
     * @private
     * @template T
     * @param {?} func
     * @return {?}
     */
    runInsideAngular(func) {
        if (NgZone.isInAngularZone()) {
            return func();
        }
        return this._ngZone.run(func);
    }
    /**
     * @private
     * @template T
     * @param {?} func
     * @return {?}
     */
    runOutsideAngular(func) {
        if (NgZone.isInAngularZone()) {
            return this._ngZone.runOutsideAngular(func);
        }
        return func();
    }
    /**
     * @private
     * @param {?} ngZone
     * @return {?}
     */
    verifyZoneIsNotNooped(ngZone) {
        // `NoopNgZone` is not exposed publicly as it doesn't expect
        // to be used outside of the core Angular code, thus we just have
        // to check if the zone doesn't extend or instanceof `NgZone`
        if (ngZone instanceof NgZone) {
            return;
        }
        console.warn(CONFIG_MESSAGES[VALIDATION_CODE.ZONE_WARNING]());
    }
}
DispatchOutsideZoneNgxsExecutionStrategy.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DispatchOutsideZoneNgxsExecutionStrategy.ctorParameters = () => [
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DispatchOutsideZoneNgxsExecutionStrategy.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    DispatchOutsideZoneNgxsExecutionStrategy.prototype._platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtb3V0c2lkZS16b25lLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvZXhlY3V0aW9uL2Rpc3BhdGNoLW91dHNpZGUtem9uZS1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUduRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzlFLE1BQU0sT0FBTyx3Q0FBd0M7Ozs7O0lBQ25ELFlBQW9CLE9BQWUsRUFBK0IsV0FBbUI7UUFBakUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUErQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuRixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBSSxJQUFhO1FBQ3BCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFJLElBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVPLGdCQUFnQixDQUFJLElBQWE7UUFDdkMsSUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUksSUFBYTtRQUN4QyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLE1BQWM7UUFDMUMsNERBQTREO1FBQzVELGlFQUFpRTtRQUNqRSw2REFBNkQ7UUFDN0QsSUFBSSxNQUFNLFlBQVksTUFBTSxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7O1lBeENGLFVBQVU7Ozs7WUFOa0IsTUFBTTt5Q0FRSyxNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQUE1QywyREFBdUI7Ozs7O0lBQUUsK0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgQ09ORklHX01FU1NBR0VTLCBWQUxJREFUSU9OX0NPREUgfSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IGltcGxlbWVudHMgTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnZlcmlmeVpvbmVJc05vdE5vb3BlZCh0aGlzLl9uZ1pvbmUpO1xyXG4gIH1cclxuXHJcbiAgZW50ZXI8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5fcGxhdGZvcm1JZCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucnVuSW5zaWRlQW5ndWxhcihmdW5jKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJ1bk91dHNpZGVBbmd1bGFyKGZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgbGVhdmU8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMucnVuSW5zaWRlQW5ndWxhcihmdW5jKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zaWRlQW5ndWxhcjxUPihmdW5jOiAoKSA9PiBUKTogVCB7XHJcbiAgICBpZiAoTmdab25lLmlzSW5Bbmd1bGFyWm9uZSgpKSB7XHJcbiAgICAgIHJldHVybiBmdW5jKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bihmdW5jKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuT3V0c2lkZUFuZ3VsYXI8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xyXG4gICAgaWYgKE5nWm9uZS5pc0luQW5ndWxhclpvbmUoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGZ1bmMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Wm9uZUlzTm90Tm9vcGVkKG5nWm9uZTogTmdab25lKTogdm9pZCB7XHJcbiAgICAvLyBgTm9vcE5nWm9uZWAgaXMgbm90IGV4cG9zZWQgcHVibGljbHkgYXMgaXQgZG9lc24ndCBleHBlY3RcclxuICAgIC8vIHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgY29yZSBBbmd1bGFyIGNvZGUsIHRodXMgd2UganVzdCBoYXZlXHJcbiAgICAvLyB0byBjaGVjayBpZiB0aGUgem9uZSBkb2Vzbid0IGV4dGVuZCBvciBpbnN0YW5jZW9mIGBOZ1pvbmVgXHJcbiAgICBpZiAobmdab25lIGluc3RhbmNlb2YgTmdab25lKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oQ09ORklHX01FU1NBR0VTW1ZBTElEQVRJT05fQ09ERS5aT05FX1dBUk5JTkddKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=