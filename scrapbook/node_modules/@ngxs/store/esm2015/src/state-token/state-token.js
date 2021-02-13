/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureSelectorMetadata } from '../internal/internals';
/**
 * @template T
 */
export class StateToken {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        /** @type {?} */
        const selectorMetadata = ensureSelectorMetadata((/** @type {?} */ (this)));
        selectorMetadata.makeRootSelector = (/**
         * @param {?} runtimeContext
         * @return {?}
         */
        (runtimeContext) => {
            return runtimeContext.getStateGetter(this.name);
        });
    }
    /**
     * @return {?}
     */
    getName() {
        return this.name;
    }
    /**
     * @return {?}
     */
    toString() {
        return `StateToken[${this.name}]`;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateToken.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS10b2tlbi9zdGF0ZS10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLHNCQUFzQixFQUd2QixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9CLE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLFlBQTZCLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7O2NBQ3ZDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDO1FBQzFELGdCQUFnQixDQUFDLGdCQUFnQjs7OztRQUFHLENBQ2xDLGNBQXNDLEVBQ2pCLEVBQUU7WUFDdkIsT0FBTyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxjQUFjLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7Ozs7OztJQWhCYSwwQkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2tlbk5hbWUgfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5pbXBvcnQge1xyXG4gIGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEsXHJcbiAgUnVudGltZVNlbGVjdG9yQ29udGV4dCxcclxuICBTZWxlY3RGcm9tUm9vdFN0YXRlXHJcbn0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVRva2VuPFQgPSB2b2lkPiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBuYW1lOiBUb2tlbk5hbWU8VD4pIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yTWV0YWRhdGEgPSBlbnN1cmVTZWxlY3Rvck1ldGFkYXRhKDxhbnk+dGhpcyk7XHJcbiAgICBzZWxlY3Rvck1ldGFkYXRhLm1ha2VSb290U2VsZWN0b3IgPSAoXHJcbiAgICAgIHJ1bnRpbWVDb250ZXh0OiBSdW50aW1lU2VsZWN0b3JDb250ZXh0XHJcbiAgICApOiBTZWxlY3RGcm9tUm9vdFN0YXRlID0+IHtcclxuICAgICAgcmV0dXJuIHJ1bnRpbWVDb250ZXh0LmdldFN0YXRlR2V0dGVyKHRoaXMubmFtZSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFN0YXRlVG9rZW5bJHt0aGlzLm5hbWV9XWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==