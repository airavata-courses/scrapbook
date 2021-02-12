/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '../../store';
import { NgxsConfig } from '../../symbols';
/**
 * Allows the select decorator to get access to the DI store.
 * \@internal only use in \@Select decorator
 * @ignore
 */
export class SelectFactory {
    /**
     * @param {?} store
     * @param {?} config
     */
    constructor(store, config) {
        SelectFactory.store = store;
        SelectFactory.config = config;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        SelectFactory.store = null;
        SelectFactory.config = null;
    }
}
SelectFactory.store = null;
SelectFactory.config = null;
SelectFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectFactory.ctorParameters = () => [
    { type: Store },
    { type: NgxsConfig }
];
if (false) {
    /** @type {?} */
    SelectFactory.store;
    /** @type {?} */
    SelectFactory.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3NlbGVjdC9zZWxlY3QtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVEzQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsWUFBWSxLQUFZLEVBQUUsTUFBa0I7UUFDMUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUMzQixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOztBQVhhLG1CQUFLLEdBQWlCLElBQUksQ0FBQztBQUMzQixvQkFBTSxHQUFzQixJQUFJLENBQUM7O1lBSGhELFVBQVU7Ozs7WUFSRixLQUFLO1lBQ0wsVUFBVTs7OztJQVNqQixvQkFBeUM7O0lBQ3pDLHFCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IE5neHNDb25maWcgfSBmcm9tICcuLi8uLi9zeW1ib2xzJztcclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgdGhlIHNlbGVjdCBkZWNvcmF0b3IgdG8gZ2V0IGFjY2VzcyB0byB0aGUgREkgc3RvcmUuXHJcbiAqIEBpbnRlcm5hbCBvbmx5IHVzZSBpbiBAU2VsZWN0IGRlY29yYXRvclxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGYWN0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwdWJsaWMgc3RhdGljIHN0b3JlOiBTdG9yZSB8IG51bGwgPSBudWxsO1xyXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlnOiBOZ3hzQ29uZmlnIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZSwgY29uZmlnOiBOZ3hzQ29uZmlnKSB7XHJcbiAgICBTZWxlY3RGYWN0b3J5LnN0b3JlID0gc3RvcmU7XHJcbiAgICBTZWxlY3RGYWN0b3J5LmNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgU2VsZWN0RmFjdG9yeS5zdG9yZSA9IG51bGw7XHJcbiAgICBTZWxlY3RGYWN0b3J5LmNvbmZpZyA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==