/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { META_KEY, META_OPTIONS_KEY, NgxsSimpleChange, SELECTOR_META_KEY } from '../symbols';
import { getValue } from '../utils/utils';
/**
 * @record
 * @template T, U
 */
export function StateClassInternal() { }
if (false) {
    /* Skipping unnamed member:
    [META_KEY]?: MetaDataModel;*/
    /* Skipping unnamed member:
    [META_OPTIONS_KEY]?: StoreOptions<U>;*/
}
/**
 * @record
 * @template T
 */
export function StateOperations() { }
if (false) {
    /**
     * @return {?}
     */
    StateOperations.prototype.getState = function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    StateOperations.prototype.setState = function (val) { };
    /**
     * @param {?} actionOrActions
     * @return {?}
     */
    StateOperations.prototype.dispatch = function (actionOrActions) { };
}
/**
 * @record
 */
export function MetaDataModel() { }
if (false) {
    /** @type {?} */
    MetaDataModel.prototype.name;
    /** @type {?} */
    MetaDataModel.prototype.actions;
    /** @type {?} */
    MetaDataModel.prototype.defaults;
    /** @type {?} */
    MetaDataModel.prototype.path;
    /** @type {?} */
    MetaDataModel.prototype.makeRootSelector;
    /** @type {?|undefined} */
    MetaDataModel.prototype.children;
}
/**
 * @record
 */
export function RuntimeSelectorContext() { }
if (false) {
    /**
     * @param {?} key
     * @return {?}
     */
    RuntimeSelectorContext.prototype.getStateGetter = function (key) { };
    /**
     * @param {?=} localOptions
     * @return {?}
     */
    RuntimeSelectorContext.prototype.getSelectorOptions = function (localOptions) { };
}
/**
 * @record
 */
export function SharedSelectorOptions() { }
if (false) {
    /** @type {?|undefined} */
    SharedSelectorOptions.prototype.injectContainerState;
    /** @type {?|undefined} */
    SharedSelectorOptions.prototype.suppressErrors;
}
/**
 * @record
 */
export function SelectorMetaDataModel() { }
if (false) {
    /** @type {?} */
    SelectorMetaDataModel.prototype.makeRootSelector;
    /** @type {?} */
    SelectorMetaDataModel.prototype.originalFn;
    /** @type {?} */
    SelectorMetaDataModel.prototype.containerClass;
    /** @type {?} */
    SelectorMetaDataModel.prototype.selectorName;
    /** @type {?} */
    SelectorMetaDataModel.prototype.getSelectorOptions;
}
/**
 * @record
 */
export function MappedStore() { }
if (false) {
    /** @type {?} */
    MappedStore.prototype.name;
    /** @type {?} */
    MappedStore.prototype.isInitialised;
    /** @type {?} */
    MappedStore.prototype.actions;
    /** @type {?} */
    MappedStore.prototype.defaults;
    /** @type {?} */
    MappedStore.prototype.instance;
    /** @type {?} */
    MappedStore.prototype.path;
}
/**
 * @record
 */
export function StatesAndDefaults() { }
if (false) {
    /** @type {?} */
    StatesAndDefaults.prototype.defaults;
    /** @type {?} */
    StatesAndDefaults.prototype.states;
}
/**
 * @record
 * @template T
 */
export function RootStateDiff() { }
if (false) {
    /** @type {?} */
    RootStateDiff.prototype.currentAppState;
    /** @type {?} */
    RootStateDiff.prototype.newAppState;
}
/**
 * Ensures metadata is attached to the class and returns it.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function ensureStoreMetadata(target) {
    if (!target.hasOwnProperty(META_KEY)) {
        /** @type {?} */
        var defaultMetadata_1 = {
            name: null,
            actions: {},
            defaults: {},
            path: null,
            makeRootSelector: /**
             * @param {?} context
             * @return {?}
             */
            function (context) {
                return context.getStateGetter(defaultMetadata_1.name);
            },
            children: []
        };
        Object.defineProperty(target, META_KEY, { value: defaultMetadata_1 });
    }
    return getStoreMetadata(target);
}
/**
 * Get the metadata attached to the state class if it exists.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function getStoreMetadata(target) {
    return (/** @type {?} */ (target[META_KEY]));
}
/**
 * Ensures metadata is attached to the selector and returns it.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function ensureSelectorMetadata(target) {
    if (!target.hasOwnProperty(SELECTOR_META_KEY)) {
        /** @type {?} */
        var defaultMetadata = {
            makeRootSelector: null,
            originalFn: null,
            containerClass: null,
            selectorName: null,
            getSelectorOptions: (/**
             * @return {?}
             */
            function () { return ({}); })
        };
        Object.defineProperty(target, SELECTOR_META_KEY, { value: defaultMetadata });
    }
    return getSelectorMetadata(target);
}
/**
 * Get the metadata attached to the selector if it exists.
 *
 * @ignore
 * @param {?} target
 * @return {?}
 */
export function getSelectorMetadata(target) {
    return target[SELECTOR_META_KEY];
}
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * Note: This is not as fast as the `fastPropGetter` but is strict Content Security Policy compliant.
 * See perf hit: https://jsperf.com/fast-value-getter-given-path/1
 *
 * @ignore
 * @param {?} paths
 * @return {?}
 */
function compliantPropGetter(paths) {
    /** @type {?} */
    var copyOfPaths = paths.slice();
    return (/**
     * @param {?} obj
     * @return {?}
     */
    function (obj) { return copyOfPaths.reduce((/**
     * @param {?} acc
     * @param {?} part
     * @return {?}
     */
    function (acc, part) { return acc && acc[part]; }), obj); });
}
/**
 * The generated function is faster than:
 * - pluck (Observable operator)
 * - memoize
 *
 * @ignore
 * @param {?} paths
 * @return {?}
 */
function fastPropGetter(paths) {
    /** @type {?} */
    var segments = paths;
    /** @type {?} */
    var seg = 'store.' + segments[0];
    /** @type {?} */
    var i = 0;
    /** @type {?} */
    var l = segments.length;
    /** @type {?} */
    var expr = seg;
    while (++i < l) {
        expr = expr + ' && ' + (seg = seg + '.' + segments[i]);
    }
    /** @type {?} */
    var fn = new Function('store', 'return ' + expr + ';');
    return (/** @type {?} */ (fn));
}
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * @ignore
 * @param {?} paths
 * @param {?} config
 * @return {?}
 */
export function propGetter(paths, config) {
    if (config && config.compatibility && config.compatibility.strictContentSecurityPolicy) {
        return compliantPropGetter(paths);
    }
    else {
        return fastPropGetter(paths);
    }
}
/**
 * Given an array of states, it will return a object graph. Example:
 *    const states = [
 *      Cart,
 *      CartSaved,
 *      CartSavedItems
 *    ]
 *
 * would return:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * @ignore
 * @param {?} stateClasses
 * @return {?}
 */
export function buildGraph(stateClasses) {
    /** @type {?} */
    var findName = (/**
     * @param {?} stateClass
     * @return {?}
     */
    function (stateClass) {
        /** @type {?} */
        var meta = stateClasses.find((/**
         * @param {?} g
         * @return {?}
         */
        function (g) { return g === stateClass; }));
        if (!meta) {
            throw new Error("Child state not found: " + stateClass + ". \r\nYou may have forgotten to add states to module");
        }
        return (/** @type {?} */ ((/** @type {?} */ (meta[META_KEY])).name));
    });
    return stateClasses.reduce((/**
     * @param {?} result
     * @param {?} stateClass
     * @return {?}
     */
    function (result, stateClass) {
        var _a = (/** @type {?} */ (stateClass[META_KEY])), name = _a.name, children = _a.children;
        result[(/** @type {?} */ (name))] = (children || []).map(findName);
        return result;
    }), {});
}
/**
 * Given a states array, returns object graph
 * returning the name and state metadata. Example:
 *
 *  const graph = {
 *    cart: { metadata }
 *  };
 *
 * @ignore
 * @param {?} states
 * @return {?}
 */
export function nameToState(states) {
    return states.reduce((/**
     * @param {?} result
     * @param {?} stateClass
     * @return {?}
     */
    function (result, stateClass) {
        /** @type {?} */
        var meta = (/** @type {?} */ (stateClass[META_KEY]));
        result[(/** @type {?} */ (meta.name))] = stateClass;
        return result;
    }), {});
}
/**
 * Given a object relationship graph will return the full path
 * for the child items. Example:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * would return:
 *
 *  const r = {
 *    cart: 'cart',
 *    saved: 'cart.saved',
 *    items: 'cart.saved.items'
 *  };
 *
 * @ignore
 * @param {?} obj
 * @param {?=} newObj
 * @return {?}
 */
export function findFullParentPath(obj, newObj) {
    if (newObj === void 0) { newObj = {}; }
    /** @type {?} */
    var visit = (/**
     * @param {?} child
     * @param {?} keyToFind
     * @return {?}
     */
    function (child, keyToFind) {
        for (var key in child) {
            if (child.hasOwnProperty(key) && child[key].indexOf(keyToFind) >= 0) {
                /** @type {?} */
                var parent_1 = visit(child, key);
                return parent_1 !== null ? parent_1 + "." + key : key;
            }
        }
        return null;
    });
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            /** @type {?} */
            var parent_2 = visit(obj, key);
            newObj[key] = parent_2 ? parent_2 + "." + key : key;
        }
    }
    return newObj;
}
/**
 * Given a object graph, it will return the items topologically sorted Example:
 *
 *  const graph = {
 *    cart: ['saved'],
 *    saved: ['items'],
 *    items: []
 *  };
 *
 * would return:
 *
 *  const results = [
 *    'items',
 *    'saved',
 *    'cart'
 *  ];
 *
 * @ignore
 * @param {?} graph
 * @return {?}
 */
export function topologicalSort(graph) {
    /** @type {?} */
    var sorted = [];
    /** @type {?} */
    var visited = {};
    /** @type {?} */
    var visit = (/**
     * @param {?} name
     * @param {?=} ancestors
     * @return {?}
     */
    function (name, ancestors) {
        if (ancestors === void 0) { ancestors = []; }
        if (!Array.isArray(ancestors)) {
            ancestors = [];
        }
        ancestors.push(name);
        visited[name] = true;
        graph[name].forEach((/**
         * @param {?} dep
         * @return {?}
         */
        function (dep) {
            if (ancestors.indexOf(dep) >= 0) {
                throw new Error("Circular dependency '" + dep + "' is required by '" + name + "': " + ancestors.join(' -> '));
            }
            if (visited[dep]) {
                return;
            }
            visit(dep, ancestors.slice(0));
        }));
        if (sorted.indexOf(name) < 0) {
            sorted.push(name);
        }
    });
    Object.keys(graph).forEach((/**
     * @param {?} k
     * @return {?}
     */
    function (k) { return visit(k); }));
    return sorted.reverse();
}
/**
 * Returns if the parameter is a object or not.
 *
 * @ignore
 * @param {?} obj
 * @return {?}
 */
export function isObject(obj) {
    return (typeof obj === 'object' && obj !== null) || typeof obj === 'function';
}
/**
 * @template T
 * @param {?} mappedStore
 * @param {?} diff
 * @return {?}
 */
export function getStateDiffChanges(mappedStore, diff) {
    /** @type {?} */
    var previousValue = getValue(diff.currentAppState, mappedStore.path);
    /** @type {?} */
    var currentValue = getValue(diff.newAppState, mappedStore.path);
    return new NgxsSimpleChange(previousValue, currentValue, !mappedStore.isInitialised);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvaW50ZXJuYWwvaW50ZXJuYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLGdCQUFnQixFQUVoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBRWxCLE1BQU0sWUFBWSxDQUFDO0FBRXBCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHMUMsd0NBR0M7Ozs7Ozs7Ozs7O0FBS0QscUNBTUM7Ozs7O0lBTEMscURBQWM7Ozs7O0lBRWQsd0RBQW9COzs7OztJQUVwQixvRUFBeUQ7Ozs7O0FBRzNELG1DQU9DOzs7SUFOQyw2QkFBb0I7O0lBQ3BCLGdDQUFnRDs7SUFDaEQsaUNBQWM7O0lBQ2QsNkJBQW9COztJQUNwQix5Q0FBeUM7O0lBQ3pDLGlDQUFnQzs7Ozs7QUFHbEMsNENBR0M7Ozs7OztJQUZDLHFFQUE4Qzs7Ozs7SUFDOUMsa0ZBQWdGOzs7OztBQU1sRiwyQ0FHQzs7O0lBRkMscURBQStCOztJQUMvQiwrQ0FBeUI7Ozs7O0FBRzNCLDJDQU1DOzs7SUFMQyxpREFBeUM7O0lBQ3pDLDJDQUE0Qjs7SUFDNUIsK0NBQW9COztJQUNwQiw2Q0FBNEI7O0lBQzVCLG1EQUFnRDs7Ozs7QUFHbEQsaUNBT0M7OztJQU5DLDJCQUFhOztJQUNiLG9DQUF1Qjs7SUFDdkIsOEJBQWdEOztJQUNoRCwrQkFBYzs7SUFDZCwrQkFBYzs7SUFDZCwyQkFBYTs7Ozs7QUFHZix1Q0FHQzs7O0lBRkMscUNBQWM7O0lBQ2QsbUNBQXNCOzs7Ozs7QUFLeEIsbUNBR0M7OztJQUZDLHdDQUFtQjs7SUFDbkIsb0NBQWU7Ozs7Ozs7OztBQVFqQixNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBMEI7SUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7O1lBQzlCLGlC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LFVBQVUsQ0FBQztBQUNoRixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxXQUF3QixFQUN4QixJQUFzQjs7UUFFaEIsYUFBYSxHQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7O1FBQ25FLFlBQVksR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3BFLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFpbk9iamVjdE9mLCBTdGF0ZUNsYXNzIH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBNRVRBX0tFWSxcclxuICBNRVRBX09QVElPTlNfS0VZLFxyXG4gIE5neHNDb25maWcsXHJcbiAgTmd4c1NpbXBsZUNoYW5nZSxcclxuICBTRUxFQ1RPUl9NRVRBX0tFWSxcclxuICBTdG9yZU9wdGlvbnNcclxufSBmcm9tICcuLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgQWN0aW9uSGFuZGxlck1ldGFEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucy9zeW1ib2xzJztcclxuaW1wb3J0IHsgZ2V0VmFsdWUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG4vLyBpbnNwaXJlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MzY3NDM4OVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlQ2xhc3NJbnRlcm5hbDxUID0gYW55LCBVID0gYW55PiBleHRlbmRzIFN0YXRlQ2xhc3M8VD4ge1xyXG4gIFtNRVRBX0tFWV0/OiBNZXRhRGF0YU1vZGVsO1xyXG4gIFtNRVRBX09QVElPTlNfS0VZXT86IFN0b3JlT3B0aW9uczxVPjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdGVLZXlHcmFwaCA9IFBsYWluT2JqZWN0T2Y8c3RyaW5nW10+O1xyXG5leHBvcnQgdHlwZSBTdGF0ZXNCeU5hbWUgPSBQbGFpbk9iamVjdE9mPFN0YXRlQ2xhc3NJbnRlcm5hbD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlT3BlcmF0aW9uczxUPiB7XHJcbiAgZ2V0U3RhdGUoKTogVDtcclxuXHJcbiAgc2V0U3RhdGUodmFsOiBUKTogVDtcclxuXHJcbiAgZGlzcGF0Y2goYWN0aW9uT3JBY3Rpb25zOiBhbnkgfCBhbnlbXSk6IE9ic2VydmFibGU8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YURhdGFNb2RlbCB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICBhY3Rpb25zOiBQbGFpbk9iamVjdE9mPEFjdGlvbkhhbmRsZXJNZXRhRGF0YVtdPjtcclxuICBkZWZhdWx0czogYW55O1xyXG4gIHBhdGg6IHN0cmluZyB8IG51bGw7XHJcbiAgbWFrZVJvb3RTZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5IHwgbnVsbDtcclxuICBjaGlsZHJlbj86IFN0YXRlQ2xhc3NJbnRlcm5hbFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVTZWxlY3RvckNvbnRleHQge1xyXG4gIGdldFN0YXRlR2V0dGVyKGtleTogYW55KTogKHN0YXRlOiBhbnkpID0+IGFueTtcclxuICBnZXRTZWxlY3Rvck9wdGlvbnMobG9jYWxPcHRpb25zPzogU2hhcmVkU2VsZWN0b3JPcHRpb25zKTogU2hhcmVkU2VsZWN0b3JPcHRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RGcm9tUm9vdFN0YXRlID0gKHJvb3RTdGF0ZTogYW55KSA9PiBhbnk7XHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yRmFjdG9yeSA9IChydW50aW1lQ29udGV4dDogUnVudGltZVNlbGVjdG9yQ29udGV4dCkgPT4gU2VsZWN0RnJvbVJvb3RTdGF0ZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVkU2VsZWN0b3JPcHRpb25zIHtcclxuICBpbmplY3RDb250YWluZXJTdGF0ZT86IGJvb2xlYW47XHJcbiAgc3VwcHJlc3NFcnJvcnM/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdG9yTWV0YURhdGFNb2RlbCB7XHJcbiAgbWFrZVJvb3RTZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5IHwgbnVsbDtcclxuICBvcmlnaW5hbEZuOiBGdW5jdGlvbiB8IG51bGw7XHJcbiAgY29udGFpbmVyQ2xhc3M6IGFueTtcclxuICBzZWxlY3Rvck5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgZ2V0U2VsZWN0b3JPcHRpb25zOiAoKSA9PiBTaGFyZWRTZWxlY3Rvck9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwcGVkU3RvcmUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpc0luaXRpYWxpc2VkOiBib29sZWFuO1xyXG4gIGFjdGlvbnM6IFBsYWluT2JqZWN0T2Y8QWN0aW9uSGFuZGxlck1ldGFEYXRhW10+O1xyXG4gIGRlZmF1bHRzOiBhbnk7XHJcbiAgaW5zdGFuY2U6IGFueTtcclxuICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVzQW5kRGVmYXVsdHMge1xyXG4gIGRlZmF1bHRzOiBhbnk7XHJcbiAgc3RhdGVzOiBNYXBwZWRTdG9yZVtdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDYWxsYmFjazxUID0gYW55LCBWID0gYW55PiA9ICguLi5hcmdzOiBWW10pID0+IFQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RTdGF0ZURpZmY8VD4ge1xyXG4gIGN1cnJlbnRBcHBTdGF0ZTogVDtcclxuICBuZXdBcHBTdGF0ZTogVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZXMgbWV0YWRhdGEgaXMgYXR0YWNoZWQgdG8gdGhlIGNsYXNzIGFuZCByZXR1cm5zIGl0LlxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3RvcmVNZXRhZGF0YSh0YXJnZXQ6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IE1ldGFEYXRhTW9kZWwge1xyXG4gIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KE1FVEFfS0VZKSkge1xyXG4gICAgY29uc3QgZGVmYXVsdE1ldGFkYXRhOiBNZXRhRGF0YU1vZGVsID0ge1xyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgZGVmYXVsdHM6IHt9LFxyXG4gICAgICBwYXRoOiBudWxsLFxyXG4gICAgICBtYWtlUm9vdFNlbGVjdG9yKGNvbnRleHQ6IFJ1bnRpbWVTZWxlY3RvckNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5nZXRTdGF0ZUdldHRlcihkZWZhdWx0TWV0YWRhdGEubmFtZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBNRVRBX0tFWSwgeyB2YWx1ZTogZGVmYXVsdE1ldGFkYXRhIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZ2V0U3RvcmVNZXRhZGF0YSh0YXJnZXQpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBtZXRhZGF0YSBhdHRhY2hlZCB0byB0aGUgc3RhdGUgY2xhc3MgaWYgaXQgZXhpc3RzLlxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmVNZXRhZGF0YSh0YXJnZXQ6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IE1ldGFEYXRhTW9kZWwge1xyXG4gIHJldHVybiB0YXJnZXRbTUVUQV9LRVldITtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZXMgbWV0YWRhdGEgaXMgYXR0YWNoZWQgdG8gdGhlIHNlbGVjdG9yIGFuZCByZXR1cm5zIGl0LlxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU2VsZWN0b3JNZXRhZGF0YSh0YXJnZXQ6IEZ1bmN0aW9uKTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsIHtcclxuICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShTRUxFQ1RPUl9NRVRBX0tFWSkpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRNZXRhZGF0YTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsID0ge1xyXG4gICAgICBtYWtlUm9vdFNlbGVjdG9yOiBudWxsLFxyXG4gICAgICBvcmlnaW5hbEZuOiBudWxsLFxyXG4gICAgICBjb250YWluZXJDbGFzczogbnVsbCxcclxuICAgICAgc2VsZWN0b3JOYW1lOiBudWxsLFxyXG4gICAgICBnZXRTZWxlY3Rvck9wdGlvbnM6ICgpID0+ICh7fSlcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgU0VMRUNUT1JfTUVUQV9LRVksIHsgdmFsdWU6IGRlZmF1bHRNZXRhZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRTZWxlY3Rvck1ldGFkYXRhKHRhcmdldCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBzZWxlY3RvciBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3Rvck1ldGFkYXRhKHRhcmdldDogYW55KTogU2VsZWN0b3JNZXRhRGF0YU1vZGVsIHtcclxuICByZXR1cm4gdGFyZ2V0W1NFTEVDVE9SX01FVEFfS0VZXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XHJcbiAqXHJcbiAqICAgIGdldFZhbHVlKHsgZm9vOiBiYXI6IFtdIH0sICdmb28uYmFyJykgLy89PiBbXVxyXG4gKlxyXG4gKiBOb3RlOiBUaGlzIGlzIG5vdCBhcyBmYXN0IGFzIHRoZSBgZmFzdFByb3BHZXR0ZXJgIGJ1dCBpcyBzdHJpY3QgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgY29tcGxpYW50LlxyXG4gKiBTZWUgcGVyZiBoaXQ6IGh0dHBzOi8vanNwZXJmLmNvbS9mYXN0LXZhbHVlLWdldHRlci1naXZlbi1wYXRoLzFcclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZnVuY3Rpb24gY29tcGxpYW50UHJvcEdldHRlcihwYXRoczogc3RyaW5nW10pOiAoeDogYW55KSA9PiBhbnkge1xyXG4gIGNvbnN0IGNvcHlPZlBhdGhzID0gcGF0aHMuc2xpY2UoKTtcclxuICByZXR1cm4gb2JqID0+IGNvcHlPZlBhdGhzLnJlZHVjZSgoYWNjOiBhbnksIHBhcnQ6IHN0cmluZykgPT4gYWNjICYmIGFjY1twYXJ0XSwgb2JqKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW46XHJcbiAqIC0gcGx1Y2sgKE9ic2VydmFibGUgb3BlcmF0b3IpXHJcbiAqIC0gbWVtb2l6ZVxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5mdW5jdGlvbiBmYXN0UHJvcEdldHRlcihwYXRoczogc3RyaW5nW10pOiAoeDogYW55KSA9PiBhbnkge1xyXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aHM7XHJcbiAgbGV0IHNlZyA9ICdzdG9yZS4nICsgc2VnbWVudHNbMF07XHJcbiAgbGV0IGkgPSAwO1xyXG4gIGNvbnN0IGwgPSBzZWdtZW50cy5sZW5ndGg7XHJcblxyXG4gIGxldCBleHByID0gc2VnO1xyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICBleHByID0gZXhwciArICcgJiYgJyArIChzZWcgPSBzZWcgKyAnLicgKyBzZWdtZW50c1tpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbignc3RvcmUnLCAncmV0dXJuICcgKyBleHByICsgJzsnKTtcclxuXHJcbiAgcmV0dXJuIDwoeDogYW55KSA9PiBhbnk+Zm47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBkZWVwbHkgbmVzdGVkIHZhbHVlLiBFeGFtcGxlOlxyXG4gKlxyXG4gKiAgICBnZXRWYWx1ZSh7IGZvbzogYmFyOiBbXSB9LCAnZm9vLmJhcicpIC8vPT4gW11cclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3BHZXR0ZXIocGF0aHM6IHN0cmluZ1tdLCBjb25maWc6IE5neHNDb25maWcpIHtcclxuICBpZiAoY29uZmlnICYmIGNvbmZpZy5jb21wYXRpYmlsaXR5ICYmIGNvbmZpZy5jb21wYXRpYmlsaXR5LnN0cmljdENvbnRlbnRTZWN1cml0eVBvbGljeSkge1xyXG4gICAgcmV0dXJuIGNvbXBsaWFudFByb3BHZXR0ZXIocGF0aHMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFzdFByb3BHZXR0ZXIocGF0aHMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGFuIGFycmF5IG9mIHN0YXRlcywgaXQgd2lsbCByZXR1cm4gYSBvYmplY3QgZ3JhcGguIEV4YW1wbGU6XHJcbiAqICAgIGNvbnN0IHN0YXRlcyA9IFtcclxuICogICAgICBDYXJ0LFxyXG4gKiAgICAgIENhcnRTYXZlZCxcclxuICogICAgICBDYXJ0U2F2ZWRJdGVtc1xyXG4gKiAgICBdXHJcbiAqXHJcbiAqIHdvdWxkIHJldHVybjpcclxuICpcclxuICogIGNvbnN0IGdyYXBoID0ge1xyXG4gKiAgICBjYXJ0OiBbJ3NhdmVkJ10sXHJcbiAqICAgIHNhdmVkOiBbJ2l0ZW1zJ10sXHJcbiAqICAgIGl0ZW1zOiBbXVxyXG4gKiAgfTtcclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JhcGgoc3RhdGVDbGFzc2VzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSk6IFN0YXRlS2V5R3JhcGgge1xyXG4gIGNvbnN0IGZpbmROYW1lID0gKHN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCkgPT4ge1xyXG4gICAgY29uc3QgbWV0YSA9IHN0YXRlQ2xhc3Nlcy5maW5kKGcgPT4gZyA9PT0gc3RhdGVDbGFzcyk7XHJcbiAgICBpZiAoIW1ldGEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBDaGlsZCBzdGF0ZSBub3QgZm91bmQ6ICR7c3RhdGVDbGFzc30uIFxcclxcbllvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gYWRkIHN0YXRlcyB0byBtb2R1bGVgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ldGFbTUVUQV9LRVldIS5uYW1lITtcclxuICB9O1xyXG5cclxuICByZXR1cm4gc3RhdGVDbGFzc2VzLnJlZHVjZTxTdGF0ZUtleUdyYXBoPihcclxuICAgIChyZXN1bHQ6IFN0YXRlS2V5R3JhcGgsIHN0YXRlQ2xhc3M6IFN0YXRlQ2xhc3NJbnRlcm5hbCkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGNoaWxkcmVuIH0gPSBzdGF0ZUNsYXNzW01FVEFfS0VZXSE7XHJcbiAgICAgIHJlc3VsdFtuYW1lIV0gPSAoY2hpbGRyZW4gfHwgW10pLm1hcChmaW5kTmFtZSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAge31cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBzdGF0ZXMgYXJyYXksIHJldHVybnMgb2JqZWN0IGdyYXBoXHJcbiAqIHJldHVybmluZyB0aGUgbmFtZSBhbmQgc3RhdGUgbWV0YWRhdGEuIEV4YW1wbGU6XHJcbiAqXHJcbiAqICBjb25zdCBncmFwaCA9IHtcclxuICogICAgY2FydDogeyBtZXRhZGF0YSB9XHJcbiAqICB9O1xyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvU3RhdGUoc3RhdGVzOiBTdGF0ZUNsYXNzSW50ZXJuYWxbXSk6IFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPiB7XHJcbiAgcmV0dXJuIHN0YXRlcy5yZWR1Y2U8UGxhaW5PYmplY3RPZjxTdGF0ZUNsYXNzSW50ZXJuYWw+PihcclxuICAgIChyZXN1bHQ6IFBsYWluT2JqZWN0T2Y8U3RhdGVDbGFzc0ludGVybmFsPiwgc3RhdGVDbGFzczogU3RhdGVDbGFzc0ludGVybmFsKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ldGEgPSBzdGF0ZUNsYXNzW01FVEFfS0VZXSE7XHJcbiAgICAgIHJlc3VsdFttZXRhLm5hbWUhXSA9IHN0YXRlQ2xhc3M7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAge31cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBvYmplY3QgcmVsYXRpb25zaGlwIGdyYXBoIHdpbGwgcmV0dXJuIHRoZSBmdWxsIHBhdGhcclxuICogZm9yIHRoZSBjaGlsZCBpdGVtcy4gRXhhbXBsZTpcclxuICpcclxuICogIGNvbnN0IGdyYXBoID0ge1xyXG4gKiAgICBjYXJ0OiBbJ3NhdmVkJ10sXHJcbiAqICAgIHNhdmVkOiBbJ2l0ZW1zJ10sXHJcbiAqICAgIGl0ZW1zOiBbXVxyXG4gKiAgfTtcclxuICpcclxuICogd291bGQgcmV0dXJuOlxyXG4gKlxyXG4gKiAgY29uc3QgciA9IHtcclxuICogICAgY2FydDogJ2NhcnQnLFxyXG4gKiAgICBzYXZlZDogJ2NhcnQuc2F2ZWQnLFxyXG4gKiAgICBpdGVtczogJ2NhcnQuc2F2ZWQuaXRlbXMnXHJcbiAqICB9O1xyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZEZ1bGxQYXJlbnRQYXRoKFxyXG4gIG9iajogU3RhdGVLZXlHcmFwaCxcclxuICBuZXdPYmo6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiA9IHt9XHJcbik6IFBsYWluT2JqZWN0T2Y8c3RyaW5nPiB7XHJcbiAgY29uc3QgdmlzaXQgPSAoY2hpbGQ6IFN0YXRlS2V5R3JhcGgsIGtleVRvRmluZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjaGlsZFtrZXldLmluZGV4T2Yoa2V5VG9GaW5kKSA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdmlzaXQoY2hpbGQsIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IGAke3BhcmVudH0uJHtrZXl9YCA6IGtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdmlzaXQob2JqLCBrZXkpO1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHBhcmVudCA/IGAke3BhcmVudH0uJHtrZXl9YCA6IGtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIG9iamVjdCBncmFwaCwgaXQgd2lsbCByZXR1cm4gdGhlIGl0ZW1zIHRvcG9sb2dpY2FsbHkgc29ydGVkIEV4YW1wbGU6XHJcbiAqXHJcbiAqICBjb25zdCBncmFwaCA9IHtcclxuICogICAgY2FydDogWydzYXZlZCddLFxyXG4gKiAgICBzYXZlZDogWydpdGVtcyddLFxyXG4gKiAgICBpdGVtczogW11cclxuICogIH07XHJcbiAqXHJcbiAqIHdvdWxkIHJldHVybjpcclxuICpcclxuICogIGNvbnN0IHJlc3VsdHMgPSBbXHJcbiAqICAgICdpdGVtcycsXHJcbiAqICAgICdzYXZlZCcsXHJcbiAqICAgICdjYXJ0J1xyXG4gKiAgXTtcclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvcG9sb2dpY2FsU29ydChncmFwaDogU3RhdGVLZXlHcmFwaCk6IHN0cmluZ1tdIHtcclxuICBjb25zdCBzb3J0ZWQ6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3QgdmlzaXRlZDogUGxhaW5PYmplY3RPZjxib29sZWFuPiA9IHt9O1xyXG5cclxuICBjb25zdCB2aXNpdCA9IChuYW1lOiBzdHJpbmcsIGFuY2VzdG9yczogc3RyaW5nW10gPSBbXSkgPT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFuY2VzdG9ycykpIHtcclxuICAgICAgYW5jZXN0b3JzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYW5jZXN0b3JzLnB1c2gobmFtZSk7XHJcbiAgICB2aXNpdGVkW25hbWVdID0gdHJ1ZTtcclxuXHJcbiAgICBncmFwaFtuYW1lXS5mb3JFYWNoKChkZXA6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoYW5jZXN0b3JzLmluZGV4T2YoZGVwKSA+PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYENpcmN1bGFyIGRlcGVuZGVuY3kgJyR7ZGVwfScgaXMgcmVxdWlyZWQgYnkgJyR7bmFtZX0nOiAke2FuY2VzdG9ycy5qb2luKCcgLT4gJyl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2aXNpdGVkW2RlcF0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZpc2l0KGRlcCwgYW5jZXN0b3JzLnNsaWNlKDApKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzb3J0ZWQuaW5kZXhPZihuYW1lKSA8IDApIHtcclxuICAgICAgc29ydGVkLnB1c2gobmFtZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZ3JhcGgpLmZvckVhY2goayA9PiB2aXNpdChrKSk7XHJcblxyXG4gIHJldHVybiBzb3J0ZWQucmV2ZXJzZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgb2JqZWN0IG9yIG5vdC5cclxuICpcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iajogYW55KSB7XHJcbiAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZURpZmZDaGFuZ2VzPFQ+KFxyXG4gIG1hcHBlZFN0b3JlOiBNYXBwZWRTdG9yZSxcclxuICBkaWZmOiBSb290U3RhdGVEaWZmPFQ+XHJcbik6IE5neHNTaW1wbGVDaGFuZ2Uge1xyXG4gIGNvbnN0IHByZXZpb3VzVmFsdWU6IFQgPSBnZXRWYWx1ZShkaWZmLmN1cnJlbnRBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCk7XHJcbiAgY29uc3QgY3VycmVudFZhbHVlOiBUID0gZ2V0VmFsdWUoZGlmZi5uZXdBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCk7XHJcbiAgcmV0dXJuIG5ldyBOZ3hzU2ltcGxlQ2hhbmdlKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgIW1hcHBlZFN0b3JlLmlzSW5pdGlhbGlzZWQpO1xyXG59XHJcbiJdfQ==