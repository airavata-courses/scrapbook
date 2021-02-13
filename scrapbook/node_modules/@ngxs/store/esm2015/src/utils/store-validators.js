/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getStoreMetadata } from '../internal/internals';
import { CONFIG_MESSAGES as MESSAGES, VALIDATION_CODE as CODE } from '../configs/messages.config';
/**
 * @abstract
 */
export class StoreValidators {
    /**
     * @param {?} name
     * @return {?}
     */
    static stateNameErrorMessage(name) {
        return MESSAGES[CODE.STATE_NAME](name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static checkCorrectStateName(name) {
        if (!name) {
            throw new Error(MESSAGES[CODE.STATE_NAME_PROPERTY]());
        }
        if (!this.stateNameRegex.test(name)) {
            throw new Error(this.stateNameErrorMessage(name));
        }
    }
    /**
     * @param {?} state
     * @param {?} statesByName
     * @return {?}
     */
    static checkStateNameIsUnique(state, statesByName) {
        /** @type {?} */
        const meta = this.getValidStateMeta(state);
        /** @type {?} */
        const stateName = (/** @type {?} */ ((/** @type {?} */ (meta)).name));
        /** @type {?} */
        const existingState = statesByName[stateName];
        if (existingState && existingState !== state) {
            throw new Error(MESSAGES[CODE.STATE_UNIQUE](stateName, state.name, existingState.name));
        }
        return stateName;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getValidStateMeta(state) {
        /** @type {?} */
        const meta = getStoreMetadata(state);
        if (!meta) {
            throw new Error(MESSAGES[CODE.STATE_DECORATOR]());
        }
        return meta;
    }
}
StoreValidators.stateNameRegex = new RegExp('^[a-zA-Z0-9_]+$');
if (false) {
    /** @type {?} */
    StoreValidators.stateNameRegex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWxzL3N0b3JlLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFJakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsZUFBZSxJQUFJLFFBQVEsRUFDM0IsZUFBZSxJQUFJLElBQUksRUFDeEIsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUVwQyxNQUFNLE9BQWdCLGVBQWU7Ozs7O0lBRzVCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFZO1FBQzlDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsc0JBQXNCLENBQ2xDLEtBQXlCLEVBQ3pCLFlBQTBCOztjQUVwQixJQUFJLEdBQWtCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7O2NBQ25ELFNBQVMsR0FBVyxtQkFBQSxtQkFBQSxJQUFJLEVBQUMsQ0FBQyxJQUFJLEVBQVU7O2NBQ3hDLGFBQWEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksYUFBYSxJQUFJLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBeUI7O2NBQ2pELElBQUksR0FBa0IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztBQXBDYSw4QkFBYyxHQUFXLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7OztJQUFyRSwrQkFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldFN0b3JlTWV0YWRhdGEsXHJcbiAgTWV0YURhdGFNb2RlbCxcclxuICBTdGF0ZUNsYXNzSW50ZXJuYWwsXHJcbiAgU3RhdGVzQnlOYW1lXHJcbn0gZnJvbSAnLi4vaW50ZXJuYWwvaW50ZXJuYWxzJztcclxuaW1wb3J0IHtcclxuICBDT05GSUdfTUVTU0FHRVMgYXMgTUVTU0FHRVMsXHJcbiAgVkFMSURBVElPTl9DT0RFIGFzIENPREVcclxufSBmcm9tICcuLi9jb25maWdzL21lc3NhZ2VzLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RvcmVWYWxpZGF0b3JzIHtcclxuICBwdWJsaWMgc3RhdGljIHN0YXRlTmFtZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV9dKyQnKTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdGF0ZU5hbWVFcnJvck1lc3NhZ2UobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gTUVTU0FHRVNbQ09ERS5TVEFURV9OQU1FXShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tDb3JyZWN0U3RhdGVOYW1lKG5hbWU6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRVNbQ09ERS5TVEFURV9OQU1FX1BST1BFUlRZXSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGVOYW1lUmVnZXgudGVzdChuYW1lKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5zdGF0ZU5hbWVFcnJvck1lc3NhZ2UobmFtZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja1N0YXRlTmFtZUlzVW5pcXVlKFxyXG4gICAgc3RhdGU6IFN0YXRlQ2xhc3NJbnRlcm5hbCxcclxuICAgIHN0YXRlc0J5TmFtZTogU3RhdGVzQnlOYW1lXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1ldGE6IE1ldGFEYXRhTW9kZWwgPSB0aGlzLmdldFZhbGlkU3RhdGVNZXRhKHN0YXRlKTtcclxuICAgIGNvbnN0IHN0YXRlTmFtZTogc3RyaW5nID0gbWV0YSEubmFtZSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBleGlzdGluZ1N0YXRlID0gc3RhdGVzQnlOYW1lW3N0YXRlTmFtZV07XHJcbiAgICBpZiAoZXhpc3RpbmdTdGF0ZSAmJiBleGlzdGluZ1N0YXRlICE9PSBzdGF0ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRVNbQ09ERS5TVEFURV9VTklRVUVdKHN0YXRlTmFtZSwgc3RhdGUubmFtZSwgZXhpc3RpbmdTdGF0ZS5uYW1lKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRWYWxpZFN0YXRlTWV0YShzdGF0ZTogU3RhdGVDbGFzc0ludGVybmFsKTogTWV0YURhdGFNb2RlbCB7XHJcbiAgICBjb25zdCBtZXRhOiBNZXRhRGF0YU1vZGVsID0gZ2V0U3RvcmVNZXRhZGF0YShzdGF0ZSk7XHJcbiAgICBpZiAoIW1ldGEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKE1FU1NBR0VTW0NPREUuU1RBVEVfREVDT1JBVE9SXSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWV0YTtcclxuICB9XHJcbn1cclxuIl19