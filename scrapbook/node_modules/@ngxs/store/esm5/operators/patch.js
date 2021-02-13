/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isStateOperator } from './utils';
/**
 * @template T
 * @param {?} patchObject
 * @return {?}
 */
export function patch(patchObject) {
    return (/**
     * @template U
     * @param {?} existing
     * @return {?}
     */
    function patchStateOperator(existing) {
        /** @type {?} */
        var clone = null;
        for (var k in patchObject) {
            /** @type {?} */
            var newValue = patchObject[k];
            /** @type {?} */
            var existingPropValue = existing[k];
            /** @type {?} */
            var newPropValue = isStateOperator(newValue)
                ? newValue((/** @type {?} */ (existingPropValue)))
                : newValue;
            if (newPropValue !== existingPropValue) {
                if (!clone) {
                    clone = tslib_1.__assign({}, ((/** @type {?} */ (existing))));
                }
                clone[k] = newPropValue;
            }
        }
        return clone || existing;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS9vcGVyYXRvcnMvIiwic291cmNlcyI6WyJwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7OztBQVUxQyxNQUFNLFVBQVUsS0FBSyxDQUFJLFdBQXlCO0lBQ2hEOzs7OztJQUFPLFNBQVMsa0JBQWtCLENBQTJCLFFBQXFCOztZQUM1RSxLQUFLLEdBQUcsSUFBSTtRQUNoQixLQUFLLElBQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRTs7Z0JBQ3JCLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDOztnQkFDekIsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Z0JBQy9CLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFLLGlCQUFpQixFQUFBLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxRQUFRO1lBQ1osSUFBSSxZQUFZLEtBQUssaUJBQWlCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSyx3QkFBUSxDQUFDLG1CQUFLLFFBQVEsRUFBQSxDQUFDLENBQUUsQ0FBQztpQkFDaEM7Z0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUN6QjtTQUNGO1FBQ0QsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDO0lBQzNCLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBpc1N0YXRlT3BlcmF0b3IgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBhdGNoU3BlYzxUPiA9IHsgW1AgaW4ga2V5b2YgVF0/OiBUW1BdIHwgU3RhdGVPcGVyYXRvcjxOb25OdWxsYWJsZTxUW1BdPj4gfTtcclxuXHJcbnR5cGUgUGF0Y2hWYWx1ZXM8VD4gPSB7XHJcbiAgcmVhZG9ubHkgW1AgaW4ga2V5b2YgVF0/OiBUW1BdIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBpbmZlciBSID8gUiA6IFRbUF07XHJcbn07XHJcblxyXG50eXBlIFBhdGNoT3BlcmF0b3I8VD4gPSA8VSBleHRlbmRzIFBhdGNoVmFsdWVzPFQ+PihleGlzdGluZzogUmVhZG9ubHk8VT4pID0+IFU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2g8VD4ocGF0Y2hPYmplY3Q6IFBhdGNoU3BlYzxUPik6IFBhdGNoT3BlcmF0b3I8VD4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBwYXRjaFN0YXRlT3BlcmF0b3I8VSBleHRlbmRzIFBhdGNoVmFsdWVzPFQ+PihleGlzdGluZzogUmVhZG9ubHk8VT4pOiBVIHtcclxuICAgIGxldCBjbG9uZSA9IG51bGw7XHJcbiAgICBmb3IgKGNvbnN0IGsgaW4gcGF0Y2hPYmplY3QpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXRjaE9iamVjdFtrXTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9wVmFsdWUgPSBleGlzdGluZ1trXTtcclxuICAgICAgY29uc3QgbmV3UHJvcFZhbHVlID0gaXNTdGF0ZU9wZXJhdG9yKG5ld1ZhbHVlKVxyXG4gICAgICAgID8gbmV3VmFsdWUoPGFueT5leGlzdGluZ1Byb3BWYWx1ZSlcclxuICAgICAgICA6IG5ld1ZhbHVlO1xyXG4gICAgICBpZiAobmV3UHJvcFZhbHVlICE9PSBleGlzdGluZ1Byb3BWYWx1ZSkge1xyXG4gICAgICAgIGlmICghY2xvbmUpIHtcclxuICAgICAgICAgIGNsb25lID0geyAuLi4oPGFueT5leGlzdGluZykgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xvbmVba10gPSBuZXdQcm9wVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZSB8fCBleGlzdGluZztcclxuICB9O1xyXG59XHJcbiJdfQ==