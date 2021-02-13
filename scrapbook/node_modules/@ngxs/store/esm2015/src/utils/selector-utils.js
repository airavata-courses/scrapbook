/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { memoize } from '@ngxs/store/internals';
import { ensureSelectorMetadata, getSelectorMetadata, getStoreMetadata } from '../internal/internals';
/** @type {?} */
const SELECTOR_OPTIONS_META_KEY = 'NGXS_SELECTOR_OPTIONS_META';
/** @type {?} */
export const selectorOptionsMetaAccessor = {
    getOptions: (/**
     * @param {?} target
     * @return {?}
     */
    (target) => {
        return (target && ((/** @type {?} */ (target)))[SELECTOR_OPTIONS_META_KEY]) || {};
    }),
    defineOptions: (/**
     * @param {?} target
     * @param {?} options
     * @return {?}
     */
    (target, options) => {
        if (!target)
            return;
        ((/** @type {?} */ (target)))[SELECTOR_OPTIONS_META_KEY] = options;
    })
};
/**
 * @record
 */
function CreationMetadata() { }
if (false) {
    /** @type {?} */
    CreationMetadata.prototype.containerClass;
    /** @type {?} */
    CreationMetadata.prototype.selectorName;
    /** @type {?|undefined} */
    CreationMetadata.prototype.getSelectorOptions;
}
/**
 * @record
 */
function RuntimeSelectorInfo() { }
if (false) {
    /** @type {?} */
    RuntimeSelectorInfo.prototype.selectorOptions;
    /** @type {?} */
    RuntimeSelectorInfo.prototype.argumentSelectorFunctions;
}
/**
 * Function for creating a selector
 * @template T
 * @param {?} selectors The selectors to use to create the arguments of this function
 * @param {?} originalFn The original function being made into a selector
 * @param {?=} creationMetadata
 * @return {?}
 */
export function createSelector(selectors, originalFn, creationMetadata) {
    /** @type {?} */
    const containerClass = creationMetadata && creationMetadata.containerClass;
    /** @type {?} */
    const wrappedFn = (/** @type {?} */ ((/**
     * @param {...?} args
     * @return {?}
     */
    function wrappedSelectorFn(...args) {
        /** @type {?} */
        const returnValue = originalFn.apply(containerClass, args);
        if (returnValue instanceof Function) {
            /** @type {?} */
            const innerMemoizedFn = memoize.apply(null, [returnValue]);
            return innerMemoizedFn;
        }
        return returnValue;
    })));
    /** @type {?} */
    const memoizedFn = memoize(wrappedFn);
    Object.setPrototypeOf(memoizedFn, originalFn);
    /** @type {?} */
    const selectorMetaData = setupSelectorMetadata(originalFn, creationMetadata);
    /** @type {?} */
    const makeRootSelector = (/**
     * @param {?} context
     * @return {?}
     */
    (context) => {
        const { argumentSelectorFunctions, selectorOptions } = getRuntimeSelectorInfo(context, selectorMetaData, selectors);
        return (/**
         * @param {?} rootState
         * @return {?}
         */
        function selectFromRoot(rootState) {
            // Determine arguments from the app state using the selectors
            /** @type {?} */
            const results = argumentSelectorFunctions.map((/**
             * @param {?} argFn
             * @return {?}
             */
            argFn => argFn(rootState)));
            // if the lambda tries to access a something on the
            // state that doesn't exist, it will throw a TypeError.
            // since this is quite usual behaviour, we simply return undefined if so.
            try {
                return memoizedFn(...results);
            }
            catch (ex) {
                if (ex instanceof TypeError && selectorOptions.suppressErrors) {
                    return undefined;
                }
                throw ex;
            }
        });
    });
    selectorMetaData.makeRootSelector = makeRootSelector;
    return memoizedFn;
}
/**
 * @template T
 * @param {?} originalFn
 * @param {?} creationMetadata
 * @return {?}
 */
function setupSelectorMetadata(originalFn, creationMetadata) {
    /** @type {?} */
    const selectorMetaData = ensureSelectorMetadata(originalFn);
    selectorMetaData.originalFn = originalFn;
    /** @type {?} */
    let getExplicitSelectorOptions = (/**
     * @return {?}
     */
    () => ({}));
    if (creationMetadata) {
        selectorMetaData.containerClass = creationMetadata.containerClass;
        selectorMetaData.selectorName = creationMetadata.selectorName;
        getExplicitSelectorOptions =
            creationMetadata.getSelectorOptions || getExplicitSelectorOptions;
    }
    /** @type {?} */
    const selectorMetaDataClone = Object.assign({}, selectorMetaData);
    selectorMetaData.getSelectorOptions = (/**
     * @return {?}
     */
    () => getLocalSelectorOptions(selectorMetaDataClone, getExplicitSelectorOptions()));
    return selectorMetaData;
}
/**
 * @param {?} context
 * @param {?} selectorMetaData
 * @param {?=} selectors
 * @return {?}
 */
function getRuntimeSelectorInfo(context, selectorMetaData, selectors = []) {
    /** @type {?} */
    const localSelectorOptions = selectorMetaData.getSelectorOptions();
    /** @type {?} */
    const selectorOptions = context.getSelectorOptions(localSelectorOptions);
    /** @type {?} */
    const selectorsToApply = getSelectorsToApply(selectors, selectorOptions, selectorMetaData.containerClass);
    /** @type {?} */
    const argumentSelectorFunctions = selectorsToApply.map((/**
     * @param {?} selector
     * @return {?}
     */
    selector => {
        /** @type {?} */
        const factory = getRootSelectorFactory(selector);
        return factory(context);
    }));
    return {
        selectorOptions,
        argumentSelectorFunctions
    };
}
/**
 * @param {?} selectorMetaData
 * @param {?} explicitOptions
 * @return {?}
 */
function getLocalSelectorOptions(selectorMetaData, explicitOptions) {
    return Object.assign({}, (selectorOptionsMetaAccessor.getOptions(selectorMetaData.containerClass) || {}), (selectorOptionsMetaAccessor.getOptions(selectorMetaData.originalFn) || {}), (selectorMetaData.getSelectorOptions() || {}), explicitOptions);
}
/**
 * @param {?=} selectors
 * @param {?=} selectorOptions
 * @param {?=} containerClass
 * @return {?}
 */
function getSelectorsToApply(selectors = [], selectorOptions, containerClass) {
    /** @type {?} */
    const selectorsToApply = [];
    /** @type {?} */
    const canInjectContainerState = selectors.length === 0 || selectorOptions.injectContainerState;
    if (containerClass && canInjectContainerState) {
        // If we are on a state class, add it as the first selector parameter
        /** @type {?} */
        const metadata = getStoreMetadata(containerClass);
        if (metadata) {
            selectorsToApply.push(containerClass);
        }
    }
    if (selectors) {
        selectorsToApply.push(...selectors);
    }
    return selectorsToApply;
}
/**
 * This function gets the factory function to create the selector to get the selected slice from the app state
 * @ignore
 * @param {?} selector
 * @return {?}
 */
export function getRootSelectorFactory(selector) {
    /** @type {?} */
    const metadata = getSelectorMetadata(selector) || getStoreMetadata(selector);
    return (metadata && metadata.makeRootSelector) || ((/**
     * @return {?}
     */
    () => selector));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy9zZWxlY3Rvci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQU1qQixNQUFNLHVCQUF1QixDQUFDOztNQUV6Qix5QkFBeUIsR0FBRyw0QkFBNEI7O0FBRTlELE1BQU0sT0FBTywyQkFBMkIsR0FBRztJQUN6QyxVQUFVOzs7O0lBQUUsQ0FBQyxNQUFXLEVBQXlCLEVBQUU7UUFDakQsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwRSxDQUFDLENBQUE7SUFDRCxhQUFhOzs7OztJQUFFLENBQUMsTUFBVyxFQUFFLE9BQThCLEVBQUUsRUFBRTtRQUM3RCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUMsQ0FBQTtDQUNGOzs7O0FBRUQsK0JBSUM7OztJQUhDLDBDQUFvQjs7SUFDcEIsd0NBQXFCOztJQUNyQiw4Q0FBaUQ7Ozs7O0FBR25ELGtDQUdDOzs7SUFGQyw4Q0FBdUM7O0lBQ3ZDLHdEQUFpRDs7Ozs7Ozs7OztBQVNuRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixTQUE0QixFQUM1QixVQUFhLEVBQ2IsZ0JBQW1DOztVQUU3QixjQUFjLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsY0FBYzs7VUFDcEUsU0FBUyxHQUFHOzs7O0lBQUEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLElBQVc7O2NBQ25ELFdBQVcsR0FB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QyxnQkFBZ0IsQ0FBQyxJQUFJOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtb2l6ZSB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGVuc3VyZVNlbGVjdG9yTWV0YWRhdGEsXHJcbiAgZ2V0U2VsZWN0b3JNZXRhZGF0YSxcclxuICBnZXRTdG9yZU1ldGFkYXRhLFxyXG4gIFNlbGVjdG9yTWV0YURhdGFNb2RlbCxcclxuICBTaGFyZWRTZWxlY3Rvck9wdGlvbnMsXHJcbiAgUnVudGltZVNlbGVjdG9yQ29udGV4dCxcclxuICBTZWxlY3RvckZhY3RvcnksXHJcbiAgU2VsZWN0RnJvbVJvb3RTdGF0ZVxyXG59IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XHJcblxyXG5jb25zdCBTRUxFQ1RPUl9PUFRJT05TX01FVEFfS0VZID0gJ05HWFNfU0VMRUNUT1JfT1BUSU9OU19NRVRBJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IgPSB7XHJcbiAgZ2V0T3B0aW9uczogKHRhcmdldDogYW55KTogU2hhcmVkU2VsZWN0b3JPcHRpb25zID0+IHtcclxuICAgIHJldHVybiAodGFyZ2V0ICYmICg8YW55PnRhcmdldClbU0VMRUNUT1JfT1BUSU9OU19NRVRBX0tFWV0pIHx8IHt9O1xyXG4gIH0sXHJcbiAgZGVmaW5lT3B0aW9uczogKHRhcmdldDogYW55LCBvcHRpb25zOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnMpID0+IHtcclxuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcbiAgICAoPGFueT50YXJnZXQpW1NFTEVDVE9SX09QVElPTlNfTUVUQV9LRVldID0gb3B0aW9ucztcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRpb25NZXRhZGF0YSB7XHJcbiAgY29udGFpbmVyQ2xhc3M6IGFueTtcclxuICBzZWxlY3Rvck5hbWU6IHN0cmluZztcclxuICBnZXRTZWxlY3Rvck9wdGlvbnM/OiAoKSA9PiBTaGFyZWRTZWxlY3Rvck9wdGlvbnM7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSdW50aW1lU2VsZWN0b3JJbmZvIHtcclxuICBzZWxlY3Rvck9wdGlvbnM6IFNoYXJlZFNlbGVjdG9yT3B0aW9ucztcclxuICBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zOiBTZWxlY3RGcm9tUm9vdFN0YXRlW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBzZWxlY3RvclxyXG4gKiBAcGFyYW0gc2VsZWN0b3JzIFRoZSBzZWxlY3RvcnMgdG8gdXNlIHRvIGNyZWF0ZSB0aGUgYXJndW1lbnRzIG9mIHRoaXMgZnVuY3Rpb25cclxuICogQHBhcmFtIG9yaWdpbmFsRm4gVGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGJlaW5nIG1hZGUgaW50byBhIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBjcmVhdGlvbk1ldGFkYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3I8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcclxuICBzZWxlY3RvcnM6IGFueVtdIHwgdW5kZWZpbmVkLFxyXG4gIG9yaWdpbmFsRm46IFQsXHJcbiAgY3JlYXRpb25NZXRhZGF0YT86IENyZWF0aW9uTWV0YWRhdGFcclxuKSB7XHJcbiAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjcmVhdGlvbk1ldGFkYXRhICYmIGNyZWF0aW9uTWV0YWRhdGEuY29udGFpbmVyQ2xhc3M7XHJcbiAgY29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gd3JhcHBlZFNlbGVjdG9yRm4oLi4uYXJnczogYW55W10pIHtcclxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gb3JpZ2luYWxGbi5hcHBseShjb250YWluZXJDbGFzcywgYXJncyk7XHJcbiAgICBpZiAocmV0dXJuVmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICBjb25zdCBpbm5lck1lbW9pemVkRm4gPSBtZW1vaXplLmFwcGx5KG51bGwsIFtyZXR1cm5WYWx1ZV0pO1xyXG4gICAgICByZXR1cm4gaW5uZXJNZW1vaXplZEZuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gIH0gYXMgVDtcclxuICBjb25zdCBtZW1vaXplZEZuID0gbWVtb2l6ZSh3cmFwcGVkRm4pO1xyXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihtZW1vaXplZEZuLCBvcmlnaW5hbEZuKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0b3JNZXRhRGF0YSA9IHNldHVwU2VsZWN0b3JNZXRhZGF0YTxUPihvcmlnaW5hbEZuLCBjcmVhdGlvbk1ldGFkYXRhKTtcclxuXHJcbiAgY29uc3QgbWFrZVJvb3RTZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5ID0gKGNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgYXJndW1lbnRTZWxlY3RvckZ1bmN0aW9ucywgc2VsZWN0b3JPcHRpb25zIH0gPSBnZXRSdW50aW1lU2VsZWN0b3JJbmZvKFxyXG4gICAgICBjb250ZXh0LFxyXG4gICAgICBzZWxlY3Rvck1ldGFEYXRhLFxyXG4gICAgICBzZWxlY3RvcnNcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNlbGVjdEZyb21Sb290KHJvb3RTdGF0ZTogYW55KSB7XHJcbiAgICAgIC8vIERldGVybWluZSBhcmd1bWVudHMgZnJvbSB0aGUgYXBwIHN0YXRlIHVzaW5nIHRoZSBzZWxlY3RvcnNcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGFyZ3VtZW50U2VsZWN0b3JGdW5jdGlvbnMubWFwKGFyZ0ZuID0+IGFyZ0ZuKHJvb3RTdGF0ZSkpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGxhbWJkYSB0cmllcyB0byBhY2Nlc3MgYSBzb21ldGhpbmcgb24gdGhlXHJcbiAgICAgIC8vIHN0YXRlIHRoYXQgZG9lc24ndCBleGlzdCwgaXQgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cclxuICAgICAgLy8gc2luY2UgdGhpcyBpcyBxdWl0ZSB1c3VhbCBiZWhhdmlvdXIsIHdlIHNpbXBseSByZXR1cm4gdW5kZWZpbmVkIGlmIHNvLlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBtZW1vaXplZEZuKC4uLnJlc3VsdHMpO1xyXG4gICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIGlmIChleCBpbnN0YW5jZW9mIFR5cGVFcnJvciAmJiBzZWxlY3Rvck9wdGlvbnMuc3VwcHJlc3NFcnJvcnMpIHtcclxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBleDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rvck1ldGFEYXRhLm1ha2VSb290U2VsZWN0b3IgPSBtYWtlUm9vdFNlbGVjdG9yO1xyXG5cclxuICByZXR1cm4gbWVtb2l6ZWRGbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBTZWxlY3Rvck1ldGFkYXRhPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXHJcbiAgb3JpZ2luYWxGbjogVCxcclxuICBjcmVhdGlvbk1ldGFkYXRhOiBDcmVhdGlvbk1ldGFkYXRhIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGNvbnN0IHNlbGVjdG9yTWV0YURhdGEgPSBlbnN1cmVTZWxlY3Rvck1ldGFkYXRhKG9yaWdpbmFsRm4pO1xyXG4gIHNlbGVjdG9yTWV0YURhdGEub3JpZ2luYWxGbiA9IG9yaWdpbmFsRm47XHJcbiAgbGV0IGdldEV4cGxpY2l0U2VsZWN0b3JPcHRpb25zID0gKCkgPT4gKHt9KTtcclxuICBpZiAoY3JlYXRpb25NZXRhZGF0YSkge1xyXG4gICAgc2VsZWN0b3JNZXRhRGF0YS5jb250YWluZXJDbGFzcyA9IGNyZWF0aW9uTWV0YWRhdGEuY29udGFpbmVyQ2xhc3M7XHJcbiAgICBzZWxlY3Rvck1ldGFEYXRhLnNlbGVjdG9yTmFtZSA9IGNyZWF0aW9uTWV0YWRhdGEuc2VsZWN0b3JOYW1lO1xyXG4gICAgZ2V0RXhwbGljaXRTZWxlY3Rvck9wdGlvbnMgPVxyXG4gICAgICBjcmVhdGlvbk1ldGFkYXRhLmdldFNlbGVjdG9yT3B0aW9ucyB8fCBnZXRFeHBsaWNpdFNlbGVjdG9yT3B0aW9ucztcclxuICB9XHJcbiAgY29uc3Qgc2VsZWN0b3JNZXRhRGF0YUNsb25lID0geyAuLi5zZWxlY3Rvck1ldGFEYXRhIH07XHJcbiAgc2VsZWN0b3JNZXRhRGF0YS5nZXRTZWxlY3Rvck9wdGlvbnMgPSAoKSA9PlxyXG4gICAgZ2V0TG9jYWxTZWxlY3Rvck9wdGlvbnMoc2VsZWN0b3JNZXRhRGF0YUNsb25lLCBnZXRFeHBsaWNpdFNlbGVjdG9yT3B0aW9ucygpKTtcclxuICByZXR1cm4gc2VsZWN0b3JNZXRhRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UnVudGltZVNlbGVjdG9ySW5mbyhcclxuICBjb250ZXh0OiBSdW50aW1lU2VsZWN0b3JDb250ZXh0LFxyXG4gIHNlbGVjdG9yTWV0YURhdGE6IFNlbGVjdG9yTWV0YURhdGFNb2RlbCxcclxuICBzZWxlY3RvcnM6IGFueVtdIHwgdW5kZWZpbmVkID0gW11cclxuKTogUnVudGltZVNlbGVjdG9ySW5mbyB7XHJcbiAgY29uc3QgbG9jYWxTZWxlY3Rvck9wdGlvbnMgPSBzZWxlY3Rvck1ldGFEYXRhLmdldFNlbGVjdG9yT3B0aW9ucygpO1xyXG4gIGNvbnN0IHNlbGVjdG9yT3B0aW9ucyA9IGNvbnRleHQuZ2V0U2VsZWN0b3JPcHRpb25zKGxvY2FsU2VsZWN0b3JPcHRpb25zKTtcclxuICBjb25zdCBzZWxlY3RvcnNUb0FwcGx5ID0gZ2V0U2VsZWN0b3JzVG9BcHBseShcclxuICAgIHNlbGVjdG9ycyxcclxuICAgIHNlbGVjdG9yT3B0aW9ucyxcclxuICAgIHNlbGVjdG9yTWV0YURhdGEuY29udGFpbmVyQ2xhc3NcclxuICApO1xyXG5cclxuICBjb25zdCBhcmd1bWVudFNlbGVjdG9yRnVuY3Rpb25zID0gc2VsZWN0b3JzVG9BcHBseS5tYXAoc2VsZWN0b3IgPT4ge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IGdldFJvb3RTZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3IpO1xyXG4gICAgcmV0dXJuIGZhY3RvcnkoY29udGV4dCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdG9yT3B0aW9ucyxcclxuICAgIGFyZ3VtZW50U2VsZWN0b3JGdW5jdGlvbnNcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbFNlbGVjdG9yT3B0aW9ucyhcclxuICBzZWxlY3Rvck1ldGFEYXRhOiBTZWxlY3Rvck1ldGFEYXRhTW9kZWwsXHJcbiAgZXhwbGljaXRPcHRpb25zOiBTaGFyZWRTZWxlY3Rvck9wdGlvbnNcclxuKTogU2hhcmVkU2VsZWN0b3JPcHRpb25zIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uKHNlbGVjdG9yT3B0aW9uc01ldGFBY2Nlc3Nvci5nZXRPcHRpb25zKHNlbGVjdG9yTWV0YURhdGEuY29udGFpbmVyQ2xhc3MpIHx8IHt9KSxcclxuICAgIC4uLihzZWxlY3Rvck9wdGlvbnNNZXRhQWNjZXNzb3IuZ2V0T3B0aW9ucyhzZWxlY3Rvck1ldGFEYXRhLm9yaWdpbmFsRm4pIHx8IHt9KSxcclxuICAgIC4uLihzZWxlY3Rvck1ldGFEYXRhLmdldFNlbGVjdG9yT3B0aW9ucygpIHx8IHt9KSxcclxuICAgIC4uLmV4cGxpY2l0T3B0aW9uc1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdG9yc1RvQXBwbHkoXHJcbiAgc2VsZWN0b3JzOiBhbnlbXSB8IHVuZGVmaW5lZCA9IFtdLFxyXG4gIHNlbGVjdG9yT3B0aW9uczogU2hhcmVkU2VsZWN0b3JPcHRpb25zLFxyXG4gIGNvbnRhaW5lckNsYXNzOiBhbnlcclxuKSB7XHJcbiAgY29uc3Qgc2VsZWN0b3JzVG9BcHBseSA9IFtdO1xyXG4gIGNvbnN0IGNhbkluamVjdENvbnRhaW5lclN0YXRlID1cclxuICAgIHNlbGVjdG9ycy5sZW5ndGggPT09IDAgfHwgc2VsZWN0b3JPcHRpb25zLmluamVjdENvbnRhaW5lclN0YXRlO1xyXG4gIGlmIChjb250YWluZXJDbGFzcyAmJiBjYW5JbmplY3RDb250YWluZXJTdGF0ZSkge1xyXG4gICAgLy8gSWYgd2UgYXJlIG9uIGEgc3RhdGUgY2xhc3MsIGFkZCBpdCBhcyB0aGUgZmlyc3Qgc2VsZWN0b3IgcGFyYW1ldGVyXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IGdldFN0b3JlTWV0YWRhdGEoY29udGFpbmVyQ2xhc3MpO1xyXG4gICAgaWYgKG1ldGFkYXRhKSB7XHJcbiAgICAgIHNlbGVjdG9yc1RvQXBwbHkucHVzaChjb250YWluZXJDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChzZWxlY3RvcnMpIHtcclxuICAgIHNlbGVjdG9yc1RvQXBwbHkucHVzaCguLi5zZWxlY3RvcnMpO1xyXG4gIH1cclxuICByZXR1cm4gc2VsZWN0b3JzVG9BcHBseTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHNlbGVjdG9yIHRvIGdldCB0aGUgc2VsZWN0ZWQgc2xpY2UgZnJvbSB0aGUgYXBwIHN0YXRlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290U2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yOiBhbnkpOiBTZWxlY3RvckZhY3Rvcnkge1xyXG4gIGNvbnN0IG1ldGFkYXRhID0gZ2V0U2VsZWN0b3JNZXRhZGF0YShzZWxlY3RvcikgfHwgZ2V0U3RvcmVNZXRhZGF0YShzZWxlY3Rvcik7XHJcbiAgcmV0dXJuIChtZXRhZGF0YSAmJiBtZXRhZGF0YS5tYWtlUm9vdFNlbGVjdG9yKSB8fCAoKCkgPT4gc2VsZWN0b3IpO1xyXG59XHJcbiJdfQ==