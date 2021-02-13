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
var SelectFactory = /** @class */ (function () {
    function SelectFactory(store, config) {
        SelectFactory.store = store;
        SelectFactory.config = config;
    }
    /**
     * @return {?}
     */
    SelectFactory.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        SelectFactory.store = null;
        SelectFactory.config = null;
    };
    SelectFactory.store = null;
    SelectFactory.config = null;
    SelectFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectFactory.ctorParameters = function () { return [
        { type: Store },
        { type: NgxsConfig }
    ]; };
    return SelectFactory;
}());
export { SelectFactory };
if (false) {
    /** @type {?} */
    SelectFactory.store;
    /** @type {?} */
    SelectFactory.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9kZWNvcmF0b3JzL3NlbGVjdC9zZWxlY3QtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQU8zQztJQUtFLHVCQUFZLEtBQVksRUFBRSxNQUFrQjtRQUMxQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDM0IsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQVhhLG1CQUFLLEdBQWlCLElBQUksQ0FBQztJQUMzQixvQkFBTSxHQUFzQixJQUFJLENBQUM7O2dCQUhoRCxVQUFVOzs7O2dCQVJGLEtBQUs7Z0JBQ0wsVUFBVTs7SUFxQm5CLG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksYUFBYTs7O0lBQ3hCLG9CQUF5Qzs7SUFDekMscUJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgTmd4c0NvbmZpZyB9IGZyb20gJy4uLy4uL3N5bWJvbHMnO1xyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB0aGUgc2VsZWN0IGRlY29yYXRvciB0byBnZXQgYWNjZXNzIHRvIHRoZSBESSBzdG9yZS5cclxuICogQGludGVybmFsIG9ubHkgdXNlIGluIEBTZWxlY3QgZGVjb3JhdG9yXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZhY3RvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcmU6IFN0b3JlIHwgbnVsbCA9IG51bGw7XHJcbiAgcHVibGljIHN0YXRpYyBjb25maWc6IE5neHNDb25maWcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlLCBjb25maWc6IE5neHNDb25maWcpIHtcclxuICAgIFNlbGVjdEZhY3Rvcnkuc3RvcmUgPSBzdG9yZTtcclxuICAgIFNlbGVjdEZhY3RvcnkuY29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBTZWxlY3RGYWN0b3J5LnN0b3JlID0gbnVsbDtcclxuICAgIFNlbGVjdEZhY3RvcnkuY29uZmlnID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19