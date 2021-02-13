/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getActionTypeFromInstance } from '@ngxs/store';
import { formatTime } from './internals';
export class ActionLogger {
    /**
     * @param {?} action
     * @param {?} store
     * @param {?} logWriter
     */
    constructor(action, store, logWriter) {
        this.action = action;
        this.store = store;
        this.logWriter = logWriter;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    dispatched(state) {
        /** @type {?} */
        const actionName = getActionTypeFromInstance(this.action);
        /** @type {?} */
        const formattedTime = formatTime(new Date());
        /** @type {?} */
        const message = `action ${actionName} @ ${formattedTime}`;
        this.logWriter.startGroup(message);
        // print payload only if at least one property is supplied
        if (this._hasPayload(this.action)) {
            this.logWriter.logGrey('payload', Object.assign({}, this.action));
        }
        this.logWriter.logGrey('prev state', state);
    }
    /**
     * @param {?} nextState
     * @return {?}
     */
    completed(nextState) {
        this.logWriter.logGreen('next state', nextState);
        this.logWriter.endGroup();
    }
    /**
     * @param {?} error
     * @return {?}
     */
    errored(error) {
        this.logWriter.logRedish('next state after error', this.store.snapshot());
        this.logWriter.logRedish('error', error);
        this.logWriter.endGroup();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _hasPayload(event) {
        /** @type {?} */
        const nonEmptyProperties = this._getNonEmptyProperties(event);
        return nonEmptyProperties.length > 0;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _getNonEmptyProperties(event) {
        /** @type {?} */
        const keys = Object.keys(event);
        /** @type {?} */
        const values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => event[key]));
        return values.filter((/**
         * @param {?} value
         * @return {?}
         */
        value => value !== undefined));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.action;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ActionLogger.prototype.logWriter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvYWN0aW9uLWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFTLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUN2QixZQUFvQixNQUFXLEVBQVUsS0FBWSxFQUFVLFNBQW9CO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQUs7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Ozs7O0lBRXZGLFVBQVUsQ0FBQyxLQUFVOztjQUNiLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztjQUNuRCxhQUFhLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O2NBRXRDLE9BQU8sR0FBRyxVQUFVLFVBQVUsTUFBTSxhQUFhLEVBQUU7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsMERBQTBEO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxvQkFBTyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBYztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBVTs7Y0FDdEIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztRQUM3RCxPQUFPLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsS0FBVTs7Y0FDakMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztjQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGOzs7Ozs7SUF0Q2EsOEJBQW1COzs7OztJQUFFLDZCQUFvQjs7Ozs7SUFBRSxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBY3Rpb25UeXBlRnJvbUluc3RhbmNlLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuL2ludGVybmFscyc7XHJcbmltcG9ydCB7IExvZ1dyaXRlciB9IGZyb20gJy4vbG9nLXdyaXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aW9uTG9nZ2VyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbjogYW55LCBwcml2YXRlIHN0b3JlOiBTdG9yZSwgcHJpdmF0ZSBsb2dXcml0ZXI6IExvZ1dyaXRlcikge31cclxuXHJcbiAgZGlzcGF0Y2hlZChzdGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCBhY3Rpb25OYW1lID0gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZSh0aGlzLmFjdGlvbik7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gYGFjdGlvbiAke2FjdGlvbk5hbWV9IEAgJHtmb3JtYXR0ZWRUaW1lfWA7XHJcbiAgICB0aGlzLmxvZ1dyaXRlci5zdGFydEdyb3VwKG1lc3NhZ2UpO1xyXG5cclxuICAgIC8vIHByaW50IHBheWxvYWQgb25seSBpZiBhdCBsZWFzdCBvbmUgcHJvcGVydHkgaXMgc3VwcGxpZWRcclxuICAgIGlmICh0aGlzLl9oYXNQYXlsb2FkKHRoaXMuYWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmxvZ1dyaXRlci5sb2dHcmV5KCdwYXlsb2FkJywgeyAuLi50aGlzLmFjdGlvbiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvZ1dyaXRlci5sb2dHcmV5KCdwcmV2IHN0YXRlJywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGVkKG5leHRTdGF0ZTogYW55KSB7XHJcbiAgICB0aGlzLmxvZ1dyaXRlci5sb2dHcmVlbignbmV4dCBzdGF0ZScsIG5leHRTdGF0ZSk7XHJcbiAgICB0aGlzLmxvZ1dyaXRlci5lbmRHcm91cCgpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JlZChlcnJvcjogYW55KSB7XHJcbiAgICB0aGlzLmxvZ1dyaXRlci5sb2dSZWRpc2goJ25leHQgc3RhdGUgYWZ0ZXIgZXJyb3InLCB0aGlzLnN0b3JlLnNuYXBzaG90KCkpO1xyXG4gICAgdGhpcy5sb2dXcml0ZXIubG9nUmVkaXNoKCdlcnJvcicsIGVycm9yKTtcclxuICAgIHRoaXMubG9nV3JpdGVyLmVuZEdyb3VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYXNQYXlsb2FkKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IG5vbkVtcHR5UHJvcGVydGllcyA9IHRoaXMuX2dldE5vbkVtcHR5UHJvcGVydGllcyhldmVudCk7XHJcbiAgICByZXR1cm4gbm9uRW1wdHlQcm9wZXJ0aWVzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXROb25FbXB0eVByb3BlcnRpZXMoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50KTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGtleSA9PiBldmVudFtrZXldKTtcclxuICAgIHJldHVybiB2YWx1ZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSB1bmRlZmluZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=