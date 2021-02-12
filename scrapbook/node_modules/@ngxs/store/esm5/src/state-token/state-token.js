/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureSelectorMetadata } from '../internal/internals';
/**
 * @template T
 */
var /**
 * @template T
 */
StateToken = /** @class */ (function () {
    function StateToken(name) {
        var _this = this;
        this.name = name;
        /** @type {?} */
        var selectorMetadata = ensureSelectorMetadata((/** @type {?} */ (this)));
        selectorMetadata.makeRootSelector = (/**
         * @param {?} runtimeContext
         * @return {?}
         */
        function (runtimeContext) {
            return runtimeContext.getStateGetter(_this.name);
        });
    }
    /**
     * @return {?}
     */
    StateToken.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @return {?}
     */
    StateToken.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "StateToken[" + this.name + "]";
    };
    return StateToken;
}());
/**
 * @template T
 */
export { StateToken };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateToken.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS10b2tlbi9zdGF0ZS10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLHNCQUFzQixFQUd2QixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9COzs7O0lBQ0Usb0JBQTZCLElBQWtCO1FBQS9DLGlCQU9DO1FBUDRCLFNBQUksR0FBSixJQUFJLENBQWM7O1lBQ3ZDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDO1FBQzFELGdCQUFnQixDQUFDLGdCQUFnQjs7OztRQUFHLFVBQ2xDLGNBQXNDO1lBRXRDLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNEJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7UUFDRSxPQUFPLGdCQUFjLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7Ozs7Ozs7O0lBaEJhLDBCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRva2VuTmFtZSB9IGZyb20gJy4vc3ltYm9scyc7XHJcbmltcG9ydCB7XHJcbiAgZW5zdXJlU2VsZWN0b3JNZXRhZGF0YSxcclxuICBSdW50aW1lU2VsZWN0b3JDb250ZXh0LFxyXG4gIFNlbGVjdEZyb21Sb290U3RhdGVcclxufSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlVG9rZW48VCA9IHZvaWQ+IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG5hbWU6IFRva2VuTmFtZTxUPikge1xyXG4gICAgY29uc3Qgc2VsZWN0b3JNZXRhZGF0YSA9IGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEoPGFueT50aGlzKTtcclxuICAgIHNlbGVjdG9yTWV0YWRhdGEubWFrZVJvb3RTZWxlY3RvciA9IChcclxuICAgICAgcnVudGltZUNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHRcclxuICAgICk6IFNlbGVjdEZyb21Sb290U3RhdGUgPT4ge1xyXG4gICAgICByZXR1cm4gcnVudGltZUNvbnRleHQuZ2V0U3RhdGVHZXR0ZXIodGhpcy5uYW1lKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgU3RhdGVUb2tlblske3RoaXMubmFtZX1dYDtcclxuICB9XHJcbn1cclxuIl19