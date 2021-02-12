/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InternalDispatcher } from '../internal/dispatcher';
import { StateStream } from './state-stream';
import { NgxsConfig } from '../symbols';
import { deepFreeze } from '../utils/freeze';
import { ConfigValidator } from '../internal/config-validator';
/**
 * State Context factory class
 * @ignore
 */
export class InternalStateOperations {
    /**
     * @param {?} _stateStream
     * @param {?} _dispatcher
     * @param {?} _config
     * @param {?} configValidator
     */
    constructor(_stateStream, _dispatcher, _config, configValidator) {
        this._stateStream = _stateStream;
        this._dispatcher = _dispatcher;
        this._config = _config;
        configValidator.verifyDevMode();
    }
    /**
     * Returns the root state operators.
     * @return {?}
     */
    getRootStateOperations() {
        /** @type {?} */
        const rootStateOperations = {
            getState: (/**
             * @return {?}
             */
            () => this._stateStream.getValue()),
            setState: (/**
             * @param {?} newState
             * @return {?}
             */
            (newState) => this._stateStream.next(newState)),
            dispatch: (/**
             * @param {?} actionOrActions
             * @return {?}
             */
            (actionOrActions) => this._dispatcher.dispatch(actionOrActions))
        };
        if (this._config.developmentMode) {
            return this.ensureStateAndActionsAreImmutable(rootStateOperations);
        }
        return rootStateOperations;
    }
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    ensureStateAndActionsAreImmutable(root) {
        return {
            getState: (/**
             * @return {?}
             */
            () => root.getState()),
            setState: (/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const frozenValue = deepFreeze(value);
                return root.setState(frozenValue);
            }),
            dispatch: (/**
             * @param {?} actions
             * @return {?}
             */
            actions => {
                return root.dispatch(actions);
            })
        };
    }
    /**
     * @param {?} results
     * @return {?}
     */
    setStateToTheCurrentWithNew(results) {
        /** @type {?} */
        const stateOperations = this.getRootStateOperations();
        // Get our current stream
        /** @type {?} */
        const currentState = stateOperations.getState();
        // Set the state to the current + new
        stateOperations.setState(Object.assign({}, currentState, results.defaults));
    }
}
InternalStateOperations.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InternalStateOperations.ctorParameters = () => [
    { type: StateStream },
    { type: InternalDispatcher },
    { type: NgxsConfig },
    { type: ConfigValidator }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._dispatcher;
    /**
     * @type {?}
     * @private
     */
    InternalStateOperations.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtb3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFPL0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQUNsQyxZQUNVLFlBQXlCLEVBQ3pCLFdBQStCLEVBQy9CLE9BQW1CLEVBQzNCLGVBQWdDO1FBSHhCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRzNCLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELHNCQUFzQjs7Y0FDZCxtQkFBbUIsR0FBRztZQUMxQixRQUFROzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQzVDLFFBQVE7Ozs7WUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDN0QsUUFBUTs7OztZQUFFLENBQUMsZUFBNEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7U0FDdkY7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDcEU7UUFFRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLGlDQUFpQyxDQUFDLElBQTBCO1FBQ2xFLE9BQU87WUFDTCxRQUFROzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDL0IsUUFBUTs7OztZQUFFLEtBQUssQ0FBQyxFQUFFOztzQkFDVixXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQTtZQUNELFFBQVE7Ozs7WUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDJCQUEyQixDQUFDLE9BQTBCOztjQUM5QyxlQUFlLEdBQXlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRTs7O2NBR3JFLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQy9DLHFDQUFxQztRQUNyQyxlQUFlLENBQUMsUUFBUSxtQkFBTSxZQUFZLEVBQUssT0FBTyxDQUFDLFFBQVEsRUFBRyxDQUFDO0lBQ3JFLENBQUM7OztZQWhERixVQUFVOzs7O1lBVEYsV0FBVztZQURYLGtCQUFrQjtZQUVsQixVQUFVO1lBRVYsZUFBZTs7Ozs7OztJQVNwQiwrQ0FBaUM7Ozs7O0lBQ2pDLDhDQUF1Qzs7Ozs7SUFDdkMsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVPcGVyYXRpb25zLCBTdGF0ZXNBbmREZWZhdWx0cyB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XHJcbmltcG9ydCB7IEludGVybmFsRGlzcGF0Y2hlciB9IGZyb20gJy4uL2ludGVybmFsL2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBTdGF0ZVN0cmVhbSB9IGZyb20gJy4vc3RhdGUtc3RyZWFtJztcclxuaW1wb3J0IHsgTmd4c0NvbmZpZyB9IGZyb20gJy4uL3N5bWJvbHMnO1xyXG5pbXBvcnQgeyBkZWVwRnJlZXplIH0gZnJvbSAnLi4vdXRpbHMvZnJlZXplJztcclxuaW1wb3J0IHsgQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi4vaW50ZXJuYWwvY29uZmlnLXZhbGlkYXRvcic7XHJcblxyXG4vKipcclxuICogU3RhdGUgQ29udGV4dCBmYWN0b3J5IGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEludGVybmFsU3RhdGVPcGVyYXRpb25zIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0YXRlU3RyZWFtOiBTdGF0ZVN0cmVhbSxcclxuICAgIHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsRGlzcGF0Y2hlcixcclxuICAgIHByaXZhdGUgX2NvbmZpZzogTmd4c0NvbmZpZyxcclxuICAgIGNvbmZpZ1ZhbGlkYXRvcjogQ29uZmlnVmFsaWRhdG9yXHJcbiAgKSB7XHJcbiAgICBjb25maWdWYWxpZGF0b3IudmVyaWZ5RGV2TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcm9vdCBzdGF0ZSBvcGVyYXRvcnMuXHJcbiAgICovXHJcbiAgZ2V0Um9vdFN0YXRlT3BlcmF0aW9ucygpOiBTdGF0ZU9wZXJhdGlvbnM8YW55PiB7XHJcbiAgICBjb25zdCByb290U3RhdGVPcGVyYXRpb25zID0ge1xyXG4gICAgICBnZXRTdGF0ZTogKCkgPT4gdGhpcy5fc3RhdGVTdHJlYW0uZ2V0VmFsdWUoKSxcclxuICAgICAgc2V0U3RhdGU6IChuZXdTdGF0ZTogYW55KSA9PiB0aGlzLl9zdGF0ZVN0cmVhbS5uZXh0KG5ld1N0YXRlKSxcclxuICAgICAgZGlzcGF0Y2g6IChhY3Rpb25PckFjdGlvbnM6IGFueSB8IGFueVtdKSA9PiB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbk9yQWN0aW9ucylcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZXZlbG9wbWVudE1vZGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW5zdXJlU3RhdGVBbmRBY3Rpb25zQXJlSW1tdXRhYmxlKHJvb3RTdGF0ZU9wZXJhdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb290U3RhdGVPcGVyYXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnN1cmVTdGF0ZUFuZEFjdGlvbnNBcmVJbW11dGFibGUocm9vdDogU3RhdGVPcGVyYXRpb25zPGFueT4pOiBTdGF0ZU9wZXJhdGlvbnM8YW55PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXRTdGF0ZTogKCkgPT4gcm9vdC5nZXRTdGF0ZSgpLFxyXG4gICAgICBzZXRTdGF0ZTogdmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZyb3plblZhbHVlID0gZGVlcEZyZWV6ZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Quc2V0U3RhdGUoZnJvemVuVmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBkaXNwYXRjaDogYWN0aW9ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QuZGlzcGF0Y2goYWN0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvVGhlQ3VycmVudFdpdGhOZXcocmVzdWx0czogU3RhdGVzQW5kRGVmYXVsdHMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0YXRlT3BlcmF0aW9uczogU3RhdGVPcGVyYXRpb25zPGFueT4gPSB0aGlzLmdldFJvb3RTdGF0ZU9wZXJhdGlvbnMoKTtcclxuXHJcbiAgICAvLyBHZXQgb3VyIGN1cnJlbnQgc3RyZWFtXHJcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBzdGF0ZU9wZXJhdGlvbnMuZ2V0U3RhdGUoKTtcclxuICAgIC8vIFNldCB0aGUgc3RhdGUgdG8gdGhlIGN1cnJlbnQgKyBuZXdcclxuICAgIHN0YXRlT3BlcmF0aW9ucy5zZXRTdGF0ZSh7IC4uLmN1cnJlbnRTdGF0ZSwgLi4ucmVzdWx0cy5kZWZhdWx0cyB9KTtcclxuICB9XHJcbn1cclxuIl19