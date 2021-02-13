/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getStoreMetadata } from '../internal/internals';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
/**
 * @abstract
 */
var StoreValidators = /** @class */ (function () {
    function StoreValidators() {
    }
    /**
     * @param {?} name
     * @return {?}
     */
    StoreValidators.stateNameErrorMessage = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return MESSAGES[CODE.STATE_NAME](name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    StoreValidators.checkCorrectStateName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!name) {
            throw new Error(MESSAGES[CODE.STATE_NAME_PROPERTY]());
        }
        if (!this.stateNameRegex.test(name)) {
            throw new Error(this.stateNameErrorMessage(name));
        }
    };
    /**
     * @param {?} state
     * @param {?} statesByName
     * @return {?}
     */
    StoreValidators.checkStateNameIsUnique = /**
     * @param {?} state
     * @param {?} statesByName
     * @return {?}
     */
    function (state, statesByName) {
        /** @type {?} */
        var meta = this.getValidStateMeta(state);
        /** @type {?} */
        var stateName = (/** @type {?} */ ((/** @type {?} */ (meta)).name));
        /** @type {?} */
        var existingState = statesByName[stateName];
        if (existingState && existingState !== state) {
            throw new Error(MESSAGES[CODE.STATE_UNIQUE](stateName, state.name, existingState.name));
        }
        return stateName;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StoreValidators.getValidStateMeta = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var meta = getStoreMetadata(state);
        if (!meta) {
            throw new Error(MESSAGES[CODE.STATE_DECORATOR]());
        }
        return meta;
    };
    StoreValidators.stateNameRegex = new RegExp('^[a-zA-Z0-9_]+$');
    return StoreValidators;
}());
export { StoreValidators };
if (false) {
    /** @type {?} */
    StoreValidators.stateNameRegex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWxzL3N0b3JlLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFJakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsZUFBZSxJQUFJLFFBQVEsRUFDM0IsZUFBZSxJQUFJLElBQUksRUFDeEIsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUVwQztJQUFBO0lBc0NBLENBQUM7Ozs7O0lBbkNlLHFDQUFxQjs7OztJQUFuQyxVQUFvQyxJQUFZO1FBQzlDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVhLHFDQUFxQjs7OztJQUFuQyxVQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7Ozs7SUFFYSxzQ0FBc0I7Ozs7O0lBQXBDLFVBQ0UsS0FBeUIsRUFDekIsWUFBMEI7O1lBRXBCLElBQUksR0FBa0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQzs7WUFDbkQsU0FBUyxHQUFXLG1CQUFBLG1CQUFBLElBQUksRUFBQyxDQUFDLElBQUksRUFBVTs7WUFDeEMsYUFBYSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxhQUFhLElBQUksYUFBYSxLQUFLLEtBQUssRUFBRTtZQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDekY7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVhLGlDQUFpQjs7OztJQUEvQixVQUFnQyxLQUF5Qjs7WUFDakQsSUFBSSxHQUFrQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFwQ2EsOEJBQWMsR0FBVyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBcUN2RSxzQkFBQztDQUFBLEFBdENELElBc0NDO1NBdENxQixlQUFlOzs7SUFDbkMsK0JBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRTdG9yZU1ldGFkYXRhLFxyXG4gIE1ldGFEYXRhTW9kZWwsXHJcbiAgU3RhdGVDbGFzc0ludGVybmFsLFxyXG4gIFN0YXRlc0J5TmFtZVxyXG59IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XHJcbmltcG9ydCB7XHJcbiAgQ09ORklHX01FU1NBR0VTIGFzIE1FU1NBR0VTLFxyXG4gIFZBTElEQVRJT05fQ09ERSBhcyBDT0RFXHJcbn0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0b3JlVmFsaWRhdG9ycyB7XHJcbiAgcHVibGljIHN0YXRpYyBzdGF0ZU5hbWVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXlthLXpBLVowLTlfXSskJyk7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RhdGVOYW1lRXJyb3JNZXNzYWdlKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIE1FU1NBR0VTW0NPREUuU1RBVEVfTkFNRV0obmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrQ29ycmVjdFN0YXRlTmFtZShuYW1lOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0VTW0NPREUuU1RBVEVfTkFNRV9QUk9QRVJUWV0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlTmFtZVJlZ2V4LnRlc3QobmFtZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuc3RhdGVOYW1lRXJyb3JNZXNzYWdlKG5hbWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tTdGF0ZU5hbWVJc1VuaXF1ZShcclxuICAgIHN0YXRlOiBTdGF0ZUNsYXNzSW50ZXJuYWwsXHJcbiAgICBzdGF0ZXNCeU5hbWU6IFN0YXRlc0J5TmFtZVxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gdGhpcy5nZXRWYWxpZFN0YXRlTWV0YShzdGF0ZSk7XHJcbiAgICBjb25zdCBzdGF0ZU5hbWU6IHN0cmluZyA9IG1ldGEhLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZXhpc3RpbmdTdGF0ZSA9IHN0YXRlc0J5TmFtZVtzdGF0ZU5hbWVdO1xyXG4gICAgaWYgKGV4aXN0aW5nU3RhdGUgJiYgZXhpc3RpbmdTdGF0ZSAhPT0gc3RhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0VTW0NPREUuU1RBVEVfVU5JUVVFXShzdGF0ZU5hbWUsIHN0YXRlLm5hbWUsIGV4aXN0aW5nU3RhdGUubmFtZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VmFsaWRTdGF0ZU1ldGEoc3RhdGU6IFN0YXRlQ2xhc3NJbnRlcm5hbCk6IE1ldGFEYXRhTW9kZWwge1xyXG4gICAgY29uc3QgbWV0YTogTWV0YURhdGFNb2RlbCA9IGdldFN0b3JlTWV0YWRhdGEoc3RhdGUpO1xyXG4gICAgaWYgKCFtZXRhKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFU1tDT0RFLlNUQVRFX0RFQ09SQVRPUl0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ldGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==