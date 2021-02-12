/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../../configs/messages.config';
import { propGetter } from '../../internal/internals';
import { SelectFactory } from './select-factory';
/** @type {?} */
const DOLLAR_CHAR_CODE = 36;
/**
 * @template T
 * @param {?} selector
 * @return {?}
 */
export function createSelectObservable(selector) {
    if (!SelectFactory.store) {
        throw new Error(CONFIG_MESSAGES[VALIDATION_CODE.SELECT_FACTORY_NOT_CONNECTED]());
    }
    return SelectFactory.store.select(selector);
}
/**
 * @param {?} name
 * @param {?=} rawSelector
 * @param {?=} paths
 * @return {?}
 */
export function createSelectorFn(name, rawSelector, paths = []) {
    rawSelector = !rawSelector ? removeDollarAtTheEnd(name) : rawSelector;
    if (typeof rawSelector === 'string') {
        /** @type {?} */
        const propsArray = paths.length
            ? [rawSelector, ...paths]
            : rawSelector.split('.');
        return propGetter(propsArray, (/** @type {?} */ (SelectFactory.config)));
    }
    return rawSelector;
}
/**
 * \@example If `foo$` => make it just `foo`
 * @param {?} name
 * @return {?}
 */
export function removeDollarAtTheEnd(name) {
    /** @type {?} */
    const lastCharIndex = name.length - 1;
    /** @type {?} */
    const dollarAtTheEnd = name.charCodeAt(lastCharIndex) === DOLLAR_CHAR_CODE;
    return dollarAtTheEnd ? name.slice(0, lastCharIndex) : name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2RlY29yYXRvcnMvc2VsZWN0L3N5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7TUFJM0MsZ0JBQWdCLEdBQUcsRUFBRTs7Ozs7O0FBRTNCLE1BQU0sVUFBVSxzQkFBc0IsQ0FBVSxRQUFhO0lBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRjtJQUVELE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsV0FBaUIsRUFBRSxRQUFrQixFQUFFO0lBQ3BGLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUV0RSxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTs7Y0FDN0IsVUFBVSxHQUFhLEtBQUssQ0FBQyxNQUFNO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsT0FBTyxVQUFVLENBQUMsVUFBVSxFQUFFLG1CQUFBLGFBQWEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0tBQ3REO0lBRUQsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLG9CQUFvQixDQUFDLElBQVk7O1VBQ3pDLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7O1VBQ3ZDLGNBQWMsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLGdCQUFnQjtJQUNuRixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ09ORklHX01FU1NBR0VTLCBWQUxJREFUSU9OX0NPREUgfSBmcm9tICcuLi8uLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XHJcbmltcG9ydCB7IHByb3BHZXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5pbXBvcnQgeyBTZWxlY3RGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3QtZmFjdG9yeSc7XHJcbmltcG9ydCB7IFN0YXRlVG9rZW4gfSBmcm9tICcuLi8uLi9zdGF0ZS10b2tlbi9zdGF0ZS10b2tlbic7XHJcbmltcG9ydCB7IEV4dHJhY3RUb2tlblR5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS10b2tlbi9zeW1ib2xzJztcclxuXHJcbmNvbnN0IERPTExBUl9DSEFSX0NPREUgPSAzNjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPYnNlcnZhYmxlPFQgPSBhbnk+KHNlbGVjdG9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICBpZiAoIVNlbGVjdEZhY3Rvcnkuc3RvcmUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihDT05GSUdfTUVTU0FHRVNbVkFMSURBVElPTl9DT0RFLlNFTEVDVF9GQUNUT1JZX05PVF9DT05ORUNURURdKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFNlbGVjdEZhY3Rvcnkuc3RvcmUuc2VsZWN0KHNlbGVjdG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yRm4obmFtZTogc3RyaW5nLCByYXdTZWxlY3Rvcj86IGFueSwgcGF0aHM6IHN0cmluZ1tdID0gW10pOiBhbnkge1xyXG4gIHJhd1NlbGVjdG9yID0gIXJhd1NlbGVjdG9yID8gcmVtb3ZlRG9sbGFyQXRUaGVFbmQobmFtZSkgOiByYXdTZWxlY3RvcjtcclxuXHJcbiAgaWYgKHR5cGVvZiByYXdTZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnN0IHByb3BzQXJyYXk6IHN0cmluZ1tdID0gcGF0aHMubGVuZ3RoXHJcbiAgICAgID8gW3Jhd1NlbGVjdG9yLCAuLi5wYXRoc11cclxuICAgICAgOiByYXdTZWxlY3Rvci5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHByb3BHZXR0ZXIocHJvcHNBcnJheSwgU2VsZWN0RmFjdG9yeS5jb25maWchKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByYXdTZWxlY3RvcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBleGFtcGxlIElmIGBmb28kYCA9PiBtYWtlIGl0IGp1c3QgYGZvb2BcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEb2xsYXJBdFRoZUVuZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGxhc3RDaGFySW5kZXg6IG51bWJlciA9IG5hbWUubGVuZ3RoIC0gMTtcclxuICBjb25zdCBkb2xsYXJBdFRoZUVuZDogYm9vbGVhbiA9IG5hbWUuY2hhckNvZGVBdChsYXN0Q2hhckluZGV4KSA9PT0gRE9MTEFSX0NIQVJfQ09ERTtcclxuICByZXR1cm4gZG9sbGFyQXRUaGVFbmQgPyBuYW1lLnNsaWNlKDAsIGxhc3RDaGFySW5kZXgpIDogbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvcGVydHlUeXBlPFQ+ID0gVCBleHRlbmRzIFN0YXRlVG9rZW48YW55PlxyXG4gID8gT2JzZXJ2YWJsZTxFeHRyYWN0VG9rZW5UeXBlPFQ+PlxyXG4gIDogVCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55XHJcbiAgPyBPYnNlcnZhYmxlPFJldHVyblR5cGU8VD4+XHJcbiAgOiBhbnk7XHJcbiJdfQ==