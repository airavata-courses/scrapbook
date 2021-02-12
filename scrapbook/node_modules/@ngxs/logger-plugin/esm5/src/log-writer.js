/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogWriter = /** @class */ (function () {
    function LogWriter(options) {
        this.options = options;
        this.options = this.options || (/** @type {?} */ ({}));
        this.logger = options.logger || console;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    LogWriter.prototype.startGroup = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var startGroupFn = this.options.collapsed
            ? this.logger.groupCollapsed
            : this.logger.group;
        try {
            startGroupFn.call(this.logger, message);
        }
        catch (e) {
            console.log(message);
        }
    };
    /**
     * @return {?}
     */
    LogWriter.prototype.endGroup = /**
     * @return {?}
     */
    function () {
        try {
            this.logger.groupEnd();
        }
        catch (e) {
            this.logger.log('—— log end ——');
        }
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logGrey = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var greyStyle = 'color: #9E9E9E; font-weight: bold';
        this.log(title, greyStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logGreen = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var greenStyle = 'color: #4CAF50; font-weight: bold';
        this.log(title, greenStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.logRedish = /**
     * @param {?} title
     * @param {?} payload
     * @return {?}
     */
    function (title, payload) {
        /** @type {?} */
        var redishStyle = 'color: #FD8182; font-weight: bold';
        this.log(title, redishStyle, payload);
    };
    /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    LogWriter.prototype.log = /**
     * @param {?} title
     * @param {?} color
     * @param {?} payload
     * @return {?}
     */
    function (title, color, payload) {
        if (this.isIE()) {
            this.logger.log(title, payload);
        }
        else {
            this.logger.log('%c ' + title, color, payload);
        }
    };
    /**
     * @return {?}
     */
    LogWriter.prototype.isIE = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = typeof window !== 'undefined' && window.navigator.userAgent
            ? window.navigator.userAgent
            : '';
        /** @type {?} */
        var msIE = false;
        /** @type {?} */
        var oldIE = ua.indexOf('MSIE ');
        /** @type {?} */
        var newIE = ua.indexOf('Trident/');
        if (oldIE > -1 || newIE > -1) {
            msIE = true;
        }
        return msIE;
    };
    return LogWriter;
}());
export { LogWriter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nLXdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFHRSxtQkFBb0IsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLG1CQUFLLEVBQUUsRUFBQSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCw4QkFBVTs7OztJQUFWLFVBQVcsT0FBZTs7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDckIsSUFBSTtZQUNGLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCw0QkFBUTs7O0lBQVI7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCwyQkFBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxPQUFZOztZQUMzQixTQUFTLEdBQUcsbUNBQW1DO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCw0QkFBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxPQUFZOztZQUM1QixVQUFVLEdBQUcsbUNBQW1DO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCw2QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxPQUFZOztZQUM3QixXQUFXLEdBQUcsbUNBQW1DO1FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRUQsdUJBQUc7Ozs7OztJQUFILFVBQUksS0FBYSxFQUFFLEtBQWEsRUFBRSxPQUFZO1FBQzVDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7SUFFRCx3QkFBSTs7O0lBQUo7O1lBQ1EsRUFBRSxHQUNOLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVM7WUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUztZQUM1QixDQUFDLENBQUMsRUFBRTs7WUFDSixJQUFJLEdBQUcsS0FBSzs7WUFDVixLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O1lBQzNCLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDOzs7Ozs7O0lBOURDLDJCQUFvQjs7Ozs7SUFFUiw0QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucyB9IGZyb20gJy4vc3ltYm9scyc7XHJcbmV4cG9ydCBjbGFzcyBMb2dXcml0ZXIge1xyXG4gIHByaXZhdGUgbG9nZ2VyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCA8YW55Pnt9O1xyXG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBjb25zb2xlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHcm91cChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0YXJ0R3JvdXBGbiA9IHRoaXMub3B0aW9ucy5jb2xsYXBzZWRcclxuICAgICAgPyB0aGlzLmxvZ2dlci5ncm91cENvbGxhcHNlZFxyXG4gICAgICA6IHRoaXMubG9nZ2VyLmdyb3VwO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3RhcnRHcm91cEZuLmNhbGwodGhpcy5sb2dnZXIsIG1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEdyb3VwKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBFbmQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCfigJTigJQgbG9nIGVuZCDigJTigJQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ0dyZXkodGl0bGU6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XHJcbiAgICBjb25zdCBncmV5U3R5bGUgPSAnY29sb3I6ICM5RTlFOUU7IGZvbnQtd2VpZ2h0OiBib2xkJztcclxuICAgIHRoaXMubG9nKHRpdGxlLCBncmV5U3R5bGUsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgbG9nR3JlZW4odGl0bGU6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XHJcbiAgICBjb25zdCBncmVlblN0eWxlID0gJ2NvbG9yOiAjNENBRjUwOyBmb250LXdlaWdodDogYm9sZCc7XHJcbiAgICB0aGlzLmxvZyh0aXRsZSwgZ3JlZW5TdHlsZSwgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBsb2dSZWRpc2godGl0bGU6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XHJcbiAgICBjb25zdCByZWRpc2hTdHlsZSA9ICdjb2xvcjogI0ZEODE4MjsgZm9udC13ZWlnaHQ6IGJvbGQnO1xyXG4gICAgdGhpcy5sb2codGl0bGUsIHJlZGlzaFN0eWxlLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGxvZyh0aXRsZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmlzSUUoKSkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2codGl0bGUsIHBheWxvYWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCclYyAnICsgdGl0bGUsIGNvbG9yLCBwYXlsb2FkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzSUUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB1YSA9XHJcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgIDogJyc7XHJcbiAgICBsZXQgbXNJRSA9IGZhbHNlO1xyXG4gICAgY29uc3Qgb2xkSUUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xyXG4gICAgY29uc3QgbmV3SUUgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xyXG4gICAgaWYgKG9sZElFID4gLTEgfHwgbmV3SUUgPiAtMSkge1xyXG4gICAgICBtc0lFID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBtc0lFO1xyXG4gIH1cclxufVxyXG4iXX0=