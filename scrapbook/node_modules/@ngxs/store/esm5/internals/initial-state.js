/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var INITIAL_STATE_TOKEN = new InjectionToken('INITIAL_STATE_TOKEN');
var InitialState = /** @class */ (function () {
    function InitialState() {
    }
    /**
     * @param {?} state
     * @return {?}
     */
    InitialState.set = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.value = state;
    };
    /**
     * @return {?}
     */
    InitialState.pop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = this.value;
        this.value = {};
        return state;
    };
    InitialState.value = {};
    return InitialState;
}());
export { InitialState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialState.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbImluaXRpYWwtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBTSxxQkFBcUIsQ0FBQztBQUVqRjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFUZSxnQkFBRzs7OztJQUFqQixVQUFrQixLQUFrQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRWEsZ0JBQUc7OztJQUFqQjs7WUFDUSxLQUFLLEdBQWdCLElBQUksQ0FBQyxLQUFLO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQVZjLGtCQUFLLEdBQWdCLEVBQUUsQ0FBQztJQVd6QyxtQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLFlBQVk7Ozs7OztJQUN2QixtQkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGFpbk9iamVjdCB9IGZyb20gJy4vc3ltYm9scyc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdJTklUSUFMX1NUQVRFX1RPS0VOJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbFN0YXRlIHtcclxuICBwcml2YXRlIHN0YXRpYyB2YWx1ZTogUGxhaW5PYmplY3QgPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXQoc3RhdGU6IFBsYWluT2JqZWN0KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBvcCgpOiBQbGFpbk9iamVjdCB7XHJcbiAgICBjb25zdCBzdGF0ZTogUGxhaW5PYmplY3QgPSB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHt9O1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=