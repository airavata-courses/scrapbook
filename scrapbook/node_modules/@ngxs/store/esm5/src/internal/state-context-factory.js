/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { getStateDiffChanges } from '../internal/internals';
import { setValue, getValue } from '../utils/utils';
import { InternalStateOperations } from '../internal/state-operations';
import { simplePatch } from './state-operators';
/**
 * State Context factory class
 * @ignore
 */
var StateContextFactory = /** @class */ (function () {
    function StateContextFactory(_internalStateOperations) {
        this._internalStateOperations = _internalStateOperations;
    }
    /**
     * Create the state context
     */
    /**
     * Create the state context
     * @template T
     * @param {?} mappedStore
     * @return {?}
     */
    StateContextFactory.prototype.createStateContext = /**
     * Create the state context
     * @template T
     * @param {?} mappedStore
     * @return {?}
     */
    function (mappedStore) {
        /** @type {?} */
        var root = this._internalStateOperations.getRootStateOperations();
        /**
         * @param {?} currentAppState
         * @return {?}
         */
        function getState(currentAppState) {
            return getValue(currentAppState, mappedStore.path);
        }
        /**
         * @param {?} currentAppState
         * @param {?} newValue
         * @return {?}
         */
        function setStateValue(currentAppState, newValue) {
            /** @type {?} */
            var newAppState = setValue(currentAppState, mappedStore.path, newValue);
            /** @type {?} */
            var instance = mappedStore.instance;
            if (instance.ngxsOnChanges) {
                /** @type {?} */
                var change = getStateDiffChanges(mappedStore, {
                    currentAppState: currentAppState,
                    newAppState: newAppState
                });
                instance.ngxsOnChanges(change);
            }
            root.setState(newAppState);
            return newAppState;
            // In doing this refactoring I noticed that there is a 'bug' where the
            // application state is returned instead of this state slice.
            // This has worked this way since the beginning see:
            // https://github.com/ngxs/store/blame/324c667b4b7debd8eb979006c67ca0ae347d88cd/src/state-factory.ts
            // This needs to be fixed, but is a 'breaking' change.
            // I will do this fix in a subsequent PR and we can decide how to handle it.
        }
        /**
         * @param {?} currentAppState
         * @param {?} stateOperator
         * @return {?}
         */
        function setStateFromOperator(currentAppState, stateOperator) {
            /** @type {?} */
            var local = getState(currentAppState);
            /** @type {?} */
            var newValue = stateOperator(local);
            return setStateValue(currentAppState, newValue);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function isStateOperator(value) {
            return typeof value === 'function';
        }
        return {
            getState: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var currentAppState = root.getState();
                return getState(currentAppState);
            },
            patchState: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var currentAppState = root.getState();
                /** @type {?} */
                var patchOperator = simplePatch(val);
                return setStateFromOperator(currentAppState, patchOperator);
            },
            setState: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var currentAppState = root.getState();
                return isStateOperator(val)
                    ? setStateFromOperator(currentAppState, val)
                    : setStateValue(currentAppState, val);
            },
            dispatch: /**
             * @param {?} actions
             * @return {?}
             */
            function (actions) {
                return root.dispatch(actions);
            }
        };
    };
    StateContextFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateContextFactory.ctorParameters = function () { return [
        { type: InternalStateOperations }
    ]; };
    return StateContextFactory;
}());
export { StateContextFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StateContextFactory.prototype._internalStateOperations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtY29udGV4dC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvaW50ZXJuYWwvc3RhdGUtY29udGV4dC1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU1oRDtJQUVFLDZCQUFvQix3QkFBaUQ7UUFBakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtJQUFHLENBQUM7SUFFekU7O09BRUc7Ozs7Ozs7SUFDSCxnREFBa0I7Ozs7OztJQUFsQixVQUFzQixXQUF3Qjs7WUFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsRUFBRTs7Ozs7UUFFbkUsU0FBUyxRQUFRLENBQUMsZUFBb0I7WUFDcEMsT0FBTyxRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7Ozs7UUFFRCxTQUFTLGFBQWEsQ0FBQyxlQUFvQixFQUFFLFFBQVc7O2dCQUNoRCxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7Z0JBQ25FLFFBQVEsR0FBa0IsV0FBVyxDQUFDLFFBQVE7WUFFcEQsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFOztvQkFDcEIsTUFBTSxHQUFxQixtQkFBbUIsQ0FBSSxXQUFXLEVBQUU7b0JBQ25FLGVBQWUsaUJBQUE7b0JBQ2YsV0FBVyxhQUFBO2lCQUNaLENBQUM7Z0JBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsT0FBTyxXQUFXLENBQUM7WUFDbkIsc0VBQXNFO1lBQ3RFLDZEQUE2RDtZQUM3RCxvREFBb0Q7WUFDcEQsb0dBQW9HO1lBQ3BHLHNEQUFzRDtZQUN0RCw0RUFBNEU7UUFDOUUsQ0FBQzs7Ozs7O1FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxlQUFvQixFQUFFLGFBQStCOztnQkFDM0UsS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7O2dCQUNqQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLGFBQWEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7Ozs7UUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUEyQjtZQUNsRCxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztRQUNyQyxDQUFDO1FBRUQsT0FBTztZQUNMLFFBQVE7OztZQUFSOztvQkFDUSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkMsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELFVBQVU7Ozs7WUFBVixVQUFXLEdBQWU7O29CQUNsQixlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTs7b0JBQ2pDLGFBQWEsR0FBRyxXQUFXLENBQUksR0FBRyxDQUFDO2dCQUN6QyxPQUFPLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQ0QsUUFBUTs7OztZQUFSLFVBQVMsR0FBeUI7O29CQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkMsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDO29CQUN6QixDQUFDLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELFFBQVE7Ozs7WUFBUixVQUFTLE9BQW9CO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDOztnQkFuRUYsVUFBVTs7OztnQkFQRix1QkFBdUI7O0lBMkVoQywwQkFBQztDQUFBLEFBcEVELElBb0VDO1NBbkVZLG1CQUFtQjs7Ozs7O0lBQ2xCLHVEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTmd4c0xpZmVDeWNsZSwgTmd4c1NpbXBsZUNoYW5nZSwgU3RhdGVDb250ZXh0LCBTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9scyc7XHJcbmltcG9ydCB7IGdldFN0YXRlRGlmZkNoYW5nZXMsIE1hcHBlZFN0b3JlIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHsgc2V0VmFsdWUsIGdldFZhbHVlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4uL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBzaW1wbGVQYXRjaCB9IGZyb20gJy4vc3RhdGUtb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBTdGF0ZSBDb250ZXh0IGZhY3RvcnkgY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdGVDb250ZXh0RmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnM6IEludGVybmFsU3RhdGVPcGVyYXRpb25zKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIHN0YXRlIGNvbnRleHRcclxuICAgKi9cclxuICBjcmVhdGVTdGF0ZUNvbnRleHQ8VD4obWFwcGVkU3RvcmU6IE1hcHBlZFN0b3JlKTogU3RhdGVDb250ZXh0PFQ+IHtcclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGUoY3VycmVudEFwcFN0YXRlOiBhbnkpOiBUIHtcclxuICAgICAgcmV0dXJuIGdldFZhbHVlKGN1cnJlbnRBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVWYWx1ZShjdXJyZW50QXBwU3RhdGU6IGFueSwgbmV3VmFsdWU6IFQpOiBhbnkge1xyXG4gICAgICBjb25zdCBuZXdBcHBTdGF0ZSA9IHNldFZhbHVlKGN1cnJlbnRBcHBTdGF0ZSwgbWFwcGVkU3RvcmUucGF0aCwgbmV3VmFsdWUpO1xyXG4gICAgICBjb25zdCBpbnN0YW5jZTogTmd4c0xpZmVDeWNsZSA9IG1hcHBlZFN0b3JlLmluc3RhbmNlO1xyXG5cclxuICAgICAgaWYgKGluc3RhbmNlLm5neHNPbkNoYW5nZXMpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2U6IE5neHNTaW1wbGVDaGFuZ2UgPSBnZXRTdGF0ZURpZmZDaGFuZ2VzPFQ+KG1hcHBlZFN0b3JlLCB7XHJcbiAgICAgICAgICBjdXJyZW50QXBwU3RhdGUsXHJcbiAgICAgICAgICBuZXdBcHBTdGF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5uZ3hzT25DaGFuZ2VzKGNoYW5nZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvb3Quc2V0U3RhdGUobmV3QXBwU3RhdGUpO1xyXG4gICAgICByZXR1cm4gbmV3QXBwU3RhdGU7XHJcbiAgICAgIC8vIEluIGRvaW5nIHRoaXMgcmVmYWN0b3JpbmcgSSBub3RpY2VkIHRoYXQgdGhlcmUgaXMgYSAnYnVnJyB3aGVyZSB0aGVcclxuICAgICAgLy8gYXBwbGljYXRpb24gc3RhdGUgaXMgcmV0dXJuZWQgaW5zdGVhZCBvZiB0aGlzIHN0YXRlIHNsaWNlLlxyXG4gICAgICAvLyBUaGlzIGhhcyB3b3JrZWQgdGhpcyB3YXkgc2luY2UgdGhlIGJlZ2lubmluZyBzZWU6XHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL2JsYW1lLzMyNGM2NjdiNGI3ZGViZDhlYjk3OTAwNmM2N2NhMGFlMzQ3ZDg4Y2Qvc3JjL3N0YXRlLWZhY3RvcnkudHNcclxuICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBmaXhlZCwgYnV0IGlzIGEgJ2JyZWFraW5nJyBjaGFuZ2UuXHJcbiAgICAgIC8vIEkgd2lsbCBkbyB0aGlzIGZpeCBpbiBhIHN1YnNlcXVlbnQgUFIgYW5kIHdlIGNhbiBkZWNpZGUgaG93IHRvIGhhbmRsZSBpdC5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0ZUZyb21PcGVyYXRvcihjdXJyZW50QXBwU3RhdGU6IGFueSwgc3RhdGVPcGVyYXRvcjogU3RhdGVPcGVyYXRvcjxUPikge1xyXG4gICAgICBjb25zdCBsb2NhbCA9IGdldFN0YXRlKGN1cnJlbnRBcHBTdGF0ZSk7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RhdGVPcGVyYXRvcihsb2NhbCk7XHJcbiAgICAgIHJldHVybiBzZXRTdGF0ZVZhbHVlKGN1cnJlbnRBcHBTdGF0ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhdGVPcGVyYXRvcih2YWx1ZTogVCB8IFN0YXRlT3BlcmF0b3I8VD4pOiB2YWx1ZSBpcyBTdGF0ZU9wZXJhdG9yPFQ+IHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXRTdGF0ZSgpOiBUIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSByb290LmdldFN0YXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKGN1cnJlbnRBcHBTdGF0ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhdGNoU3RhdGUodmFsOiBQYXJ0aWFsPFQ+KTogVCB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gcm9vdC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHBhdGNoT3BlcmF0b3IgPSBzaW1wbGVQYXRjaDxUPih2YWwpO1xyXG4gICAgICAgIHJldHVybiBzZXRTdGF0ZUZyb21PcGVyYXRvcihjdXJyZW50QXBwU3RhdGUsIHBhdGNoT3BlcmF0b3IpO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXRTdGF0ZSh2YWw6IFQgfCBTdGF0ZU9wZXJhdG9yPFQ+KTogVCB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gcm9vdC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiBpc1N0YXRlT3BlcmF0b3IodmFsKVxyXG4gICAgICAgICAgPyBzZXRTdGF0ZUZyb21PcGVyYXRvcihjdXJyZW50QXBwU3RhdGUsIHZhbClcclxuICAgICAgICAgIDogc2V0U3RhdGVWYWx1ZShjdXJyZW50QXBwU3RhdGUsIHZhbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnM6IGFueSB8IGFueVtdKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QuZGlzcGF0Y2goYWN0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==