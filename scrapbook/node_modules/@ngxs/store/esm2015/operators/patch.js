/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        let clone = null;
        for (const k in patchObject) {
            /** @type {?} */
            const newValue = patchObject[k];
            /** @type {?} */
            const existingPropValue = existing[k];
            /** @type {?} */
            const newPropValue = isStateOperator(newValue)
                ? newValue((/** @type {?} */ (existingPropValue)))
                : newValue;
            if (newPropValue !== existingPropValue) {
                if (!clone) {
                    clone = Object.assign({}, ((/** @type {?} */ (existing))));
                }
                clone[k] = newPropValue;
            }
        }
        return clone || existing;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS9vcGVyYXRvcnMvIiwic291cmNlcyI6WyJwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBVTFDLE1BQU0sVUFBVSxLQUFLLENBQUksV0FBeUI7SUFDaEQ7Ozs7O0lBQU8sU0FBUyxrQkFBa0IsQ0FBMkIsUUFBcUI7O1lBQzVFLEtBQUssR0FBRyxJQUFJO1FBQ2hCLEtBQUssTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFOztrQkFDckIsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7O2tCQUN6QixpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDOztrQkFDL0IsWUFBWSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQUssaUJBQWlCLEVBQUEsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLFFBQVE7WUFDWixJQUFJLFlBQVksS0FBSyxpQkFBaUIsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixLQUFLLHFCQUFRLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBRSxDQUFDO2lCQUNoQztnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssSUFBSSxRQUFRLENBQUM7SUFDM0IsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlT3BlcmF0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGlzU3RhdGVPcGVyYXRvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGF0Y2hTcGVjPFQ+ID0geyBbUCBpbiBrZXlvZiBUXT86IFRbUF0gfCBTdGF0ZU9wZXJhdG9yPE5vbk51bGxhYmxlPFRbUF0+PiB9O1xyXG5cclxudHlwZSBQYXRjaFZhbHVlczxUPiA9IHtcclxuICByZWFkb25seSBbUCBpbiBrZXlvZiBUXT86IFRbUF0gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGluZmVyIFIgPyBSIDogVFtQXTtcclxufTtcclxuXHJcbnR5cGUgUGF0Y2hPcGVyYXRvcjxUPiA9IDxVIGV4dGVuZHMgUGF0Y2hWYWx1ZXM8VD4+KGV4aXN0aW5nOiBSZWFkb25seTxVPikgPT4gVTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaDxUPihwYXRjaE9iamVjdDogUGF0Y2hTcGVjPFQ+KTogUGF0Y2hPcGVyYXRvcjxUPiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoU3RhdGVPcGVyYXRvcjxVIGV4dGVuZHMgUGF0Y2hWYWx1ZXM8VD4+KGV4aXN0aW5nOiBSZWFkb25seTxVPik6IFUge1xyXG4gICAgbGV0IGNsb25lID0gbnVsbDtcclxuICAgIGZvciAoY29uc3QgayBpbiBwYXRjaE9iamVjdCkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhdGNoT2JqZWN0W2tdO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1Byb3BWYWx1ZSA9IGV4aXN0aW5nW2tdO1xyXG4gICAgICBjb25zdCBuZXdQcm9wVmFsdWUgPSBpc1N0YXRlT3BlcmF0b3IobmV3VmFsdWUpXHJcbiAgICAgICAgPyBuZXdWYWx1ZSg8YW55PmV4aXN0aW5nUHJvcFZhbHVlKVxyXG4gICAgICAgIDogbmV3VmFsdWU7XHJcbiAgICAgIGlmIChuZXdQcm9wVmFsdWUgIT09IGV4aXN0aW5nUHJvcFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFjbG9uZSkge1xyXG4gICAgICAgICAgY2xvbmUgPSB7IC4uLig8YW55PmV4aXN0aW5nKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbG9uZVtrXSA9IG5ld1Byb3BWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lIHx8IGV4aXN0aW5nO1xyXG4gIH07XHJcbn1cclxuIl19