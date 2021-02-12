/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const INITIAL_STATE_TOKEN = new InjectionToken('INITIAL_STATE_TOKEN');
export class InitialState {
    /**
     * @param {?} state
     * @return {?}
     */
    static set(state) {
        this.value = state;
    }
    /**
     * @return {?}
     */
    static pop() {
        /** @type {?} */
        const state = this.value;
        this.value = {};
        return state;
    }
}
InitialState.value = {};
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialState.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbImluaXRpYWwtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBTSxxQkFBcUIsQ0FBQztBQUVqRixNQUFNLE9BQU8sWUFBWTs7Ozs7SUFHaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFrQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLEdBQUc7O2NBQ1QsS0FBSyxHQUFnQixJQUFJLENBQUMsS0FBSztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O0FBVmMsa0JBQUssR0FBZ0IsRUFBRSxDQUFDOzs7Ozs7SUFBdkMsbUJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhaW5PYmplY3QgfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignSU5JVElBTF9TVEFURV9UT0tFTicpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRpYWxTdGF0ZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgdmFsdWU6IFBsYWluT2JqZWN0ID0ge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0KHN0YXRlOiBQbGFpbk9iamVjdCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3AoKTogUGxhaW5PYmplY3Qge1xyXG4gICAgY29uc3Qgc3RhdGU6IFBsYWluT2JqZWN0ID0gdGhpcy52YWx1ZTtcclxuICAgIHRoaXMudmFsdWUgPSB7fTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIl19