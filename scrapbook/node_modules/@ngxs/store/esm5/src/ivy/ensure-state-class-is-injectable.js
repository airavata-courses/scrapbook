/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ivyEnabledInDevMode$ } from './ivy-enabled-in-dev-mode';
import { CONFIG_MESSAGES, VALIDATION_CODE } from '../configs/messages.config';
/**
 * All provided or injected tokens must have `\@Injectable` decorator
 * (previously, injected tokens without `\@Injectable` were allowed
 * if another decorator was used, e.g. pipes).
 * @param {?} target
 * @return {?}
 */
export function ensureStateClassIsInjectable(target) {
    // `ɵprov` is a static property added by the NGCC compiler. It always exists in
    // AOT mode because this property is added before runtime. If an application is running in
    // JIT mode then this property can be added by the `@Injectable()` decorator. The `@Injectable()`
    // decorator has to go after the `@State()` decorator, thus we prevent users from unwanted DI errors.
    ivyEnabledInDevMode$.subscribe((/**
     * @param {?} _ivyEnabledInDevMode
     * @return {?}
     */
    function (_ivyEnabledInDevMode) {
        if (_ivyEnabledInDevMode) {
            /** @type {?} */
            /** @nocollapse */ var ngInjectableDef = target.ɵprov;
            if (!ngInjectableDef) {
                // Don't warn if Ivy is disabled or `ɵprov` exists on the class
                console.warn(CONFIG_MESSAGES[VALIDATION_CODE.UNDECORATED_STATE_IN_IVY](target.name));
            }
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9pdnkvZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7O0FBTzlFLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxNQUFXO0lBQ3RELCtFQUErRTtJQUMvRSwwRkFBMEY7SUFDMUYsaUdBQWlHO0lBQ2pHLHFHQUFxRztJQUNyRyxvQkFBb0IsQ0FBQyxTQUFTOzs7O0lBQUMsVUFBQSxvQkFBb0I7UUFDakQsSUFBSSxvQkFBb0IsRUFBRTs7Z0JBQ2xCLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSztZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNwQiwrREFBK0Q7Z0JBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1NBQ0Y7SUFDSCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdnlFbmFibGVkSW5EZXZNb2RlJCB9IGZyb20gJy4vaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUnO1xyXG5pbXBvcnQgeyBDT05GSUdfTUVTU0FHRVMsIFZBTElEQVRJT05fQ09ERSB9IGZyb20gJy4uL2NvbmZpZ3MvbWVzc2FnZXMuY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBBbGwgcHJvdmlkZWQgb3IgaW5qZWN0ZWQgdG9rZW5zIG11c3QgaGF2ZSBgQEluamVjdGFibGVgIGRlY29yYXRvclxyXG4gKiAocHJldmlvdXNseSwgaW5qZWN0ZWQgdG9rZW5zIHdpdGhvdXQgYEBJbmplY3RhYmxlYCB3ZXJlIGFsbG93ZWRcclxuICogaWYgYW5vdGhlciBkZWNvcmF0b3Igd2FzIHVzZWQsIGUuZy4gcGlwZXMpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVN0YXRlQ2xhc3NJc0luamVjdGFibGUodGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAvLyBgybVwcm92YCBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBhZGRlZCBieSB0aGUgTkdDQyBjb21waWxlci4gSXQgYWx3YXlzIGV4aXN0cyBpblxyXG4gIC8vIEFPVCBtb2RlIGJlY2F1c2UgdGhpcyBwcm9wZXJ0eSBpcyBhZGRlZCBiZWZvcmUgcnVudGltZS4gSWYgYW4gYXBwbGljYXRpb24gaXMgcnVubmluZyBpblxyXG4gIC8vIEpJVCBtb2RlIHRoZW4gdGhpcyBwcm9wZXJ0eSBjYW4gYmUgYWRkZWQgYnkgdGhlIGBASW5qZWN0YWJsZSgpYCBkZWNvcmF0b3IuIFRoZSBgQEluamVjdGFibGUoKWBcclxuICAvLyBkZWNvcmF0b3IgaGFzIHRvIGdvIGFmdGVyIHRoZSBgQFN0YXRlKClgIGRlY29yYXRvciwgdGh1cyB3ZSBwcmV2ZW50IHVzZXJzIGZyb20gdW53YW50ZWQgREkgZXJyb3JzLlxyXG4gIGl2eUVuYWJsZWRJbkRldk1vZGUkLnN1YnNjcmliZShfaXZ5RW5hYmxlZEluRGV2TW9kZSA9PiB7XHJcbiAgICBpZiAoX2l2eUVuYWJsZWRJbkRldk1vZGUpIHtcclxuICAgICAgY29uc3QgbmdJbmplY3RhYmxlRGVmID0gdGFyZ2V0Lsm1cHJvdjtcclxuICAgICAgaWYgKCFuZ0luamVjdGFibGVEZWYpIHtcclxuICAgICAgICAvLyBEb24ndCB3YXJuIGlmIEl2eSBpcyBkaXNhYmxlZCBvciBgybVwcm92YCBleGlzdHMgb24gdGhlIGNsYXNzXHJcbiAgICAgICAgY29uc29sZS53YXJuKENPTkZJR19NRVNTQUdFU1tWQUxJREFUSU9OX0NPREUuVU5ERUNPUkFURURfU1RBVEVfSU5fSVZZXSh0YXJnZXQubmFtZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl19