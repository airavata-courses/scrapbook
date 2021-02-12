/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Init action
 */
var /**
 * Init action
 */
InitState = /** @class */ (function () {
    function InitState() {
    }
    Object.defineProperty(InitState, "type", {
        get: /**
         * @return {?}
         */
        function () {
            // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
            return '@@INIT';
        },
        enumerable: true,
        configurable: true
    });
    return InitState;
}());
/**
 * Init action
 */
export { InitState };
/**
 * Update action
 */
var /**
 * Update action
 */
UpdateState = /** @class */ (function () {
    function UpdateState(addedStates) {
        this.addedStates = addedStates;
    }
    Object.defineProperty(UpdateState, "type", {
        get: /**
         * @return {?}
         */
        function () {
            // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
            return '@@UPDATE_STATE';
        },
        enumerable: true,
        configurable: true
    });
    return UpdateState;
}());
/**
 * Update action
 */
export { UpdateState };
if (false) {
    /** @type {?} */
    UpdateState.prototype.addedStates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL2FjdGlvbnMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7SUFBQTtJQUtBLENBQUM7SUFKQyxzQkFBVyxpQkFBSTs7OztRQUFmO1lBQ0Usc0lBQXNJO1lBQ3RJLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7Ozs7Ozs7QUFLRDs7OztJQU1FLHFCQUFtQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUFHLENBQUM7SUFMaEQsc0JBQVcsbUJBQUk7Ozs7UUFBZjtZQUNFLHNJQUFzSTtZQUN0SSxPQUFPLGdCQUFnQixDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0gsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7Ozs7OztJQURhLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWluT2JqZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcclxuXHJcbi8qKlxyXG4gKiBJbml0IGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluaXRTdGF0ZSB7XHJcbiAgc3RhdGljIGdldCB0eXBlKCkge1xyXG4gICAgLy8gTk9URTogTm90IG5lY2Vzc2FyeSB0byBkZWNsYXJlIHRoZSB0eXBlIGluIHRoaXMgd2F5IGluIHlvdXIgY29kZS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3hzL3N0b3JlL3B1bGwvNjQ0I2lzc3VlY29tbWVudC00MzYwMDMxMzhcclxuICAgIHJldHVybiAnQEBJTklUJztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXBkYXRlU3RhdGUge1xyXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcclxuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XHJcbiAgICByZXR1cm4gJ0BAVVBEQVRFX1NUQVRFJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhZGRlZFN0YXRlcz86IFBsYWluT2JqZWN0KSB7fVxyXG59XHJcbiJdfQ==