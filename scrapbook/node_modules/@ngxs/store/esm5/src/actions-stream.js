/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { leaveNgxs } from './operators/leave-ngxs';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
/** @enum {string} */
var ActionStatus = {
    Dispatched: 'DISPATCHED',
    Successful: 'SUCCESSFUL',
    Canceled: 'CANCELED',
    Errored: 'ERRORED',
};
export { ActionStatus };
/**
 * @record
 * @template T
 */
export function ActionContext() { }
if (false) {
    /** @type {?} */
    ActionContext.prototype.status;
    /** @type {?} */
    ActionContext.prototype.action;
    /** @type {?|undefined} */
    ActionContext.prototype.error;
}
/**
 * Custom Subject that ensures that subscribers are notified of values in the order that they arrived.
 * A standard Subject does not have this guarantee.
 * For example, given the following code:
 * ```typescript
 *   const subject = new Subject<string>();
 * subject.subscribe(value => {
 * if (value === 'start') subject.next('end');
 * });
 * subject.subscribe(value => { });
 * subject.next('start');
 * ```
 * When `subject` is a standard `Subject<T>` the second subscriber would recieve `end` and then `start`.
 * When `subject` is a `OrderedSubject<T>` the second subscriber would recieve `start` and then `end`.
 * @template T
 */
var /**
 * Custom Subject that ensures that subscribers are notified of values in the order that they arrived.
 * A standard Subject does not have this guarantee.
 * For example, given the following code:
 * ```typescript
 *   const subject = new Subject<string>();
 * subject.subscribe(value => {
 * if (value === 'start') subject.next('end');
 * });
 * subject.subscribe(value => { });
 * subject.next('start');
 * ```
 * When `subject` is a standard `Subject<T>` the second subscriber would recieve `end` and then `start`.
 * When `subject` is a `OrderedSubject<T>` the second subscriber would recieve `start` and then `end`.
 * @template T
 */
OrderedSubject = /** @class */ (function (_super) {
    tslib_1.__extends(OrderedSubject, _super);
    function OrderedSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._itemQueue = [];
        _this._busyPushingNext = false;
        return _this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    OrderedSubject.prototype.next = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this._busyPushingNext) {
            this._itemQueue.unshift((/** @type {?} */ (value)));
            return;
        }
        this._busyPushingNext = true;
        _super.prototype.next.call(this, value);
        while (this._itemQueue.length > 0) {
            /** @type {?} */
            var nextValue = this._itemQueue.pop();
            _super.prototype.next.call(this, nextValue);
        }
        this._busyPushingNext = false;
    };
    return OrderedSubject;
}(Subject));
/**
 * Custom Subject that ensures that subscribers are notified of values in the order that they arrived.
 * A standard Subject does not have this guarantee.
 * For example, given the following code:
 * ```typescript
 *   const subject = new Subject<string>();
 * subject.subscribe(value => {
 * if (value === 'start') subject.next('end');
 * });
 * subject.subscribe(value => { });
 * subject.next('start');
 * ```
 * When `subject` is a standard `Subject<T>` the second subscriber would recieve `end` and then `start`.
 * When `subject` is a `OrderedSubject<T>` the second subscriber would recieve `start` and then `end`.
 * @template T
 */
export { OrderedSubject };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderedSubject.prototype._itemQueue;
    /**
     * @type {?}
     * @private
     */
    OrderedSubject.prototype._busyPushingNext;
}
/**
 * Internal Action stream that is emitted anytime an action is dispatched.
 */
var InternalActions = /** @class */ (function (_super) {
    tslib_1.__extends(InternalActions, _super);
    function InternalActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InternalActions.decorators = [
        { type: Injectable }
    ];
    return InternalActions;
}(OrderedSubject));
export { InternalActions };
/**
 * Action stream that is emitted anytime an action is dispatched.
 *
 * You can listen to this in services to react without stores.
 */
var Actions = /** @class */ (function (_super) {
    tslib_1.__extends(Actions, _super);
    // This has to be `Observable<ActionContext>` in the v4. Because `InternalActions`
    // is a `Subject<ActionContext>`. Leave it as `any` to avoid breaking changes
    function Actions(internalActions$, internalExecutionStrategy) {
        return _super.call(this, (/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var childSubscription = internalActions$
                .pipe(leaveNgxs(internalExecutionStrategy))
                .subscribe({
                next: (/**
                 * @param {?} ctx
                 * @return {?}
                 */
                function (ctx) { return observer.next(ctx); }),
                error: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return observer.error(error); }),
                complete: (/**
                 * @return {?}
                 */
                function () { return observer.complete(); })
            });
            observer.add(childSubscription);
        })) || this;
    }
    Actions.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Actions.ctorParameters = function () { return [
        { type: InternalActions },
        { type: InternalNgxsExecutionStrategy }
    ]; };
    return Actions;
}(Observable));
export { Actions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdHJlYW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zLXN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7SUFNM0YsWUFBYSxZQUFZO0lBQ3pCLFlBQWEsWUFBWTtJQUN6QixVQUFXLFVBQVU7SUFDckIsU0FBVSxTQUFTOzs7Ozs7O0FBR3JCLG1DQUlDOzs7SUFIQywrQkFBcUI7O0lBQ3JCLCtCQUFVOztJQUNWLDhCQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhCOzs7Ozs7Ozs7Ozs7Ozs7OztJQUF1QywwQ0FBVTtJQUFqRDtRQUFBLHFFQWlCQztRQWhCUyxnQkFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBZW5DLENBQUM7Ozs7O0lBYkMsNkJBQUk7Ozs7SUFBSixVQUFLLEtBQVM7UUFDWixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsaUJBQU0sSUFBSSxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLGlCQUFNLElBQUksWUFBQyxTQUFTLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUF1QyxPQUFPLEdBaUI3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFoQkMsb0NBQTZCOzs7OztJQUM3QiwwQ0FBaUM7Ozs7O0FBb0JuQztJQUNxQywyQ0FBNkI7SUFEbEU7O0lBQ29FLENBQUM7O2dCQURwRSxVQUFVOztJQUN5RCxzQkFBQztDQUFBLEFBRHJFLENBQ3FDLGNBQWMsR0FBa0I7U0FBeEQsZUFBZTs7Ozs7O0FBTzVCO0lBQzZCLG1DQUFlO0lBQzFDLGtGQUFrRjtJQUNsRiw2RUFBNkU7SUFDN0UsaUJBQ0UsZ0JBQWlDLEVBQ2pDLHlCQUF3RDtlQUV4RDs7OztRQUFNLFVBQUEsUUFBUTs7Z0JBQ04saUJBQWlCLEdBQUcsZ0JBQWdCO2lCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7aUJBQzFDLFNBQVMsQ0FBQztnQkFDVCxJQUFJOzs7O2dCQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQTtnQkFDL0IsS0FBSzs7OztnQkFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUE7Z0JBQ3JDLFFBQVE7OztnQkFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFuQixDQUFtQixDQUFBO2FBQ3BDLENBQUM7WUFFSixRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Z0JBbkJGLFVBQVU7Ozs7Z0JBS1csZUFBZTtnQkFwRTVCLDZCQUE2Qjs7SUFtRnRDLGNBQUM7Q0FBQSxBQXBCRCxDQUM2QixVQUFVLEdBbUJ0QztTQW5CWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBsZWF2ZU5neHMgfSBmcm9tICcuL29wZXJhdG9ycy9sZWF2ZS1uZ3hzJztcclxuaW1wb3J0IHsgSW50ZXJuYWxOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2V4ZWN1dGlvbi9pbnRlcm5hbC1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneSc7XHJcblxyXG4vKipcclxuICogU3RhdHVzIG9mIGEgZGlzcGF0Y2hlZCBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvblN0YXR1cyB7XHJcbiAgRGlzcGF0Y2hlZCA9ICdESVNQQVRDSEVEJyxcclxuICBTdWNjZXNzZnVsID0gJ1NVQ0NFU1NGVUwnLFxyXG4gIENhbmNlbGVkID0gJ0NBTkNFTEVEJyxcclxuICBFcnJvcmVkID0gJ0VSUk9SRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29udGV4dDxUID0gYW55PiB7XHJcbiAgc3RhdHVzOiBBY3Rpb25TdGF0dXM7XHJcbiAgYWN0aW9uOiBUO1xyXG4gIGVycm9yPzogRXJyb3I7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gU3ViamVjdCB0aGF0IGVuc3VyZXMgdGhhdCBzdWJzY3JpYmVycyBhcmUgbm90aWZpZWQgb2YgdmFsdWVzIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgYXJyaXZlZC5cclxuICogQSBzdGFuZGFyZCBTdWJqZWN0IGRvZXMgbm90IGhhdmUgdGhpcyBndWFyYW50ZWUuXHJcbiAqIEZvciBleGFtcGxlLCBnaXZlbiB0aGUgZm9sbG93aW5nIGNvZGU6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gICAgIHN1YmplY3Quc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgIGlmICh2YWx1ZSA9PT0gJ3N0YXJ0Jykgc3ViamVjdC5uZXh0KCdlbmQnKTtcclxuICAgICB9KTtcclxuICAgICBzdWJqZWN0LnN1YnNjcmliZSh2YWx1ZSA9PiB7IH0pO1xyXG4gICAgIHN1YmplY3QubmV4dCgnc3RhcnQnKTtcclxuICogYGBgXHJcbiAqIFdoZW4gYHN1YmplY3RgIGlzIGEgc3RhbmRhcmQgYFN1YmplY3Q8VD5gIHRoZSBzZWNvbmQgc3Vic2NyaWJlciB3b3VsZCByZWNpZXZlIGBlbmRgIGFuZCB0aGVuIGBzdGFydGAuXHJcbiAqIFdoZW4gYHN1YmplY3RgIGlzIGEgYE9yZGVyZWRTdWJqZWN0PFQ+YCB0aGUgc2Vjb25kIHN1YnNjcmliZXIgd291bGQgcmVjaWV2ZSBgc3RhcnRgIGFuZCB0aGVuIGBlbmRgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZGVyZWRTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XHJcbiAgcHJpdmF0ZSBfaXRlbVF1ZXVlOiBUW10gPSBbXTtcclxuICBwcml2YXRlIF9idXN5UHVzaGluZ05leHQgPSBmYWxzZTtcclxuXHJcbiAgbmV4dCh2YWx1ZT86IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9idXN5UHVzaGluZ05leHQpIHtcclxuICAgICAgdGhpcy5faXRlbVF1ZXVlLnVuc2hpZnQodmFsdWUhKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnVzeVB1c2hpbmdOZXh0ID0gdHJ1ZTtcclxuICAgIHN1cGVyLm5leHQodmFsdWUpO1xyXG4gICAgd2hpbGUgKHRoaXMuX2l0ZW1RdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuX2l0ZW1RdWV1ZS5wb3AoKTtcclxuICAgICAgc3VwZXIubmV4dChuZXh0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnVzeVB1c2hpbmdOZXh0ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgQWN0aW9uIHN0cmVhbSB0aGF0IGlzIGVtaXR0ZWQgYW55dGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZC5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEludGVybmFsQWN0aW9ucyBleHRlbmRzIE9yZGVyZWRTdWJqZWN0PEFjdGlvbkNvbnRleHQ+IHt9XHJcblxyXG4vKipcclxuICogQWN0aW9uIHN0cmVhbSB0aGF0IGlzIGVtaXR0ZWQgYW55dGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZC5cclxuICpcclxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhpcyBpbiBzZXJ2aWNlcyB0byByZWFjdCB3aXRob3V0IHN0b3Jlcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnMgZXh0ZW5kcyBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIC8vIFRoaXMgaGFzIHRvIGJlIGBPYnNlcnZhYmxlPEFjdGlvbkNvbnRleHQ+YCBpbiB0aGUgdjQuIEJlY2F1c2UgYEludGVybmFsQWN0aW9uc2BcclxuICAvLyBpcyBhIGBTdWJqZWN0PEFjdGlvbkNvbnRleHQ+YC4gTGVhdmUgaXQgYXMgYGFueWAgdG8gYXZvaWQgYnJlYWtpbmcgY2hhbmdlc1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW50ZXJuYWxBY3Rpb25zJDogSW50ZXJuYWxBY3Rpb25zLFxyXG4gICAgaW50ZXJuYWxFeGVjdXRpb25TdHJhdGVneTogSW50ZXJuYWxOZ3hzRXhlY3V0aW9uU3RyYXRlZ3lcclxuICApIHtcclxuICAgIHN1cGVyKG9ic2VydmVyID0+IHtcclxuICAgICAgY29uc3QgY2hpbGRTdWJzY3JpcHRpb24gPSBpbnRlcm5hbEFjdGlvbnMkXHJcbiAgICAgICAgLnBpcGUobGVhdmVOZ3hzKGludGVybmFsRXhlY3V0aW9uU3RyYXRlZ3kpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogY3R4ID0+IG9ic2VydmVyLm5leHQoY3R4KSxcclxuICAgICAgICAgIGVycm9yOiBlcnJvciA9PiBvYnNlcnZlci5lcnJvcihlcnJvciksXHJcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIuYWRkKGNoaWxkU3Vic2NyaXB0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=