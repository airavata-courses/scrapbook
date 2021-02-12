/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class LogWriter {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        this.options = this.options || (/** @type {?} */ ({}));
        this.logger = options.logger || console;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    startGroup(message) {
        /** @type {?} */
        const startGroupFn = this.options.collapsed
            ? this.logger.groupCollapsed
            : this.logger.group;
        try {
            startGroupFn.call(this.logger, message);
        }
        catch (e) {
            console.log(message);
        }
    }
    /**
     * @return {?}
     */
    endGroup() {
        try {
            this.logger.groupEnd();
        }
        catch (e) {
            this.logger.log('—— log end ——');
        }
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logGrey(title, payload) {
        /** @type {?} */
        const greyStyle = 'color: #9E9E9E; font-weight: bold';
        this.log(title, greyStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logGreen(title, payload) {
        /** @type {?} */
        const greenStyle = 'color: #4CAF50; font-weight: bold';
        this.log(title, greenStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    logRedish(title, payload) {
        /** @type {?} */
        const redishStyle = 'color: #FD8182; font-weight: bold';
        this.log(title, redishStyle, payload);
    }
    /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    log(title, color, payload) {
        if (this.isIE()) {
            this.logger.log(title, payload);
        }
        else {
            this.logger.log('%c ' + title, color, payload);
        }
    }
    /**
     * @return {?}
     */
    isIE() {
        /** @type {?} */
        const ua = typeof window !== 'undefined' && window.navigator.userAgent
            ? window.navigator.userAgent
            : '';
        /** @type {?} */
        let msIE = false;
        /** @type {?} */
        const oldIE = ua.indexOf('MSIE ');
        /** @type {?} */
        const newIE = ua.indexOf('Trident/');
        if (oldIE > -1 || newIE > -1) {
            msIE = true;
        }
        return msIE;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    LogWriter.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nLXdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxPQUFPLFNBQVM7Ozs7SUFHcEIsWUFBb0IsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLG1CQUFLLEVBQUUsRUFBQSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZTs7Y0FDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDckIsSUFBSTtZQUNGLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSTtZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFZOztjQUMzQixTQUFTLEdBQUcsbUNBQW1DO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLE9BQVk7O2NBQzVCLFVBQVUsR0FBRyxtQ0FBbUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsT0FBWTs7Y0FDN0IsV0FBVyxHQUFHLG1DQUFtQztRQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLE9BQVk7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7O2NBQ0ksRUFBRSxHQUNOLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVM7WUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUztZQUM1QixDQUFDLENBQUMsRUFBRTs7WUFDSixJQUFJLEdBQUcsS0FBSzs7Y0FDVixLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O2NBQzNCLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7Ozs7OztJQTlEQywyQkFBb0I7Ozs7O0lBRVIsNEJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMgfSBmcm9tICcuL3N5bWJvbHMnO1xyXG5leHBvcnQgY2xhc3MgTG9nV3JpdGVyIHtcclxuICBwcml2YXRlIGxvZ2dlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwgPGFueT57fTtcclxuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgY29uc29sZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0R3JvdXAobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdGFydEdyb3VwRm4gPSB0aGlzLm9wdGlvbnMuY29sbGFwc2VkXHJcbiAgICAgID8gdGhpcy5sb2dnZXIuZ3JvdXBDb2xsYXBzZWRcclxuICAgICAgOiB0aGlzLmxvZ2dlci5ncm91cDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN0YXJ0R3JvdXBGbi5jYWxsKHRoaXMubG9nZ2VyLCBtZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRHcm91cCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmdyb3VwRW5kKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZygn4oCU4oCUIGxvZyBlbmQg4oCU4oCUJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dHcmV5KHRpdGxlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgZ3JleVN0eWxlID0gJ2NvbG9yOiAjOUU5RTlFOyBmb250LXdlaWdodDogYm9sZCc7XHJcbiAgICB0aGlzLmxvZyh0aXRsZSwgZ3JleVN0eWxlLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGxvZ0dyZWVuKHRpdGxlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgZ3JlZW5TdHlsZSA9ICdjb2xvcjogIzRDQUY1MDsgZm9udC13ZWlnaHQ6IGJvbGQnO1xyXG4gICAgdGhpcy5sb2codGl0bGUsIGdyZWVuU3R5bGUsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgbG9nUmVkaXNoKHRpdGxlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgcmVkaXNoU3R5bGUgPSAnY29sb3I6ICNGRDgxODI7IGZvbnQtd2VpZ2h0OiBib2xkJztcclxuICAgIHRoaXMubG9nKHRpdGxlLCByZWRpc2hTdHlsZSwgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBsb2codGl0bGU6IHN0cmluZywgY29sb3I6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc0lFKCkpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKHRpdGxlLCBwYXlsb2FkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZygnJWMgJyArIHRpdGxlLCBjb2xvciwgcGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0lFKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdWEgPVxyXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgID8gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICA6ICcnO1xyXG4gICAgbGV0IG1zSUUgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9sZElFID0gdWEuaW5kZXhPZignTVNJRSAnKTtcclxuICAgIGNvbnN0IG5ld0lFID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcclxuICAgIGlmIChvbGRJRSA+IC0xIHx8IG5ld0lFID4gLTEpIHtcclxuICAgICAgbXNJRSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXNJRTtcclxuICB9XHJcbn1cclxuIl19