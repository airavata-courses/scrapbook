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
    _ivyEnabledInDevMode => {
        if (_ivyEnabledInDevMode) {
            /** @type {?} */
            /** @nocollapse */ const ngInjectableDef = target.ɵprov;
            if (!ngInjectableDef) {
                // Don't warn if Ivy is disabled or `ɵprov` exists on the class
                console.warn(CONFIG_MESSAGES[VALIDATION_CODE.UNDECORATED_STATE_IN_IVY](target.name));
            }
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9pdnkvZW5zdXJlLXN0YXRlLWNsYXNzLWlzLWluamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7O0FBTzlFLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxNQUFXO0lBQ3RELCtFQUErRTtJQUMvRSwwRkFBMEY7SUFDMUYsaUdBQWlHO0lBQ2pHLHFHQUFxRztJQUNyRyxvQkFBb0IsQ0FBQyxTQUFTOzs7O0lBQUMsb0JBQW9CLENBQUMsRUFBRTtRQUNwRCxJQUFJLG9CQUFvQixFQUFFOztrQkFDbEIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BCLCtEQUErRDtnQkFDL0QsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEY7U0FDRjtJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl2eUVuYWJsZWRJbkRldk1vZGUkIH0gZnJvbSAnLi9pdnktZW5hYmxlZC1pbi1kZXYtbW9kZSc7XHJcbmltcG9ydCB7IENPTkZJR19NRVNTQUdFUywgVkFMSURBVElPTl9DT0RFIH0gZnJvbSAnLi4vY29uZmlncy9tZXNzYWdlcy5jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIEFsbCBwcm92aWRlZCBvciBpbmplY3RlZCB0b2tlbnMgbXVzdCBoYXZlIGBASW5qZWN0YWJsZWAgZGVjb3JhdG9yXHJcbiAqIChwcmV2aW91c2x5LCBpbmplY3RlZCB0b2tlbnMgd2l0aG91dCBgQEluamVjdGFibGVgIHdlcmUgYWxsb3dlZFxyXG4gKiBpZiBhbm90aGVyIGRlY29yYXRvciB3YXMgdXNlZCwgZS5nLiBwaXBlcykuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3RhdGVDbGFzc0lzSW5qZWN0YWJsZSh0YXJnZXQ6IGFueSk6IHZvaWQge1xyXG4gIC8vIGDJtXByb3ZgIGlzIGEgc3RhdGljIHByb3BlcnR5IGFkZGVkIGJ5IHRoZSBOR0NDIGNvbXBpbGVyLiBJdCBhbHdheXMgZXhpc3RzIGluXHJcbiAgLy8gQU9UIG1vZGUgYmVjYXVzZSB0aGlzIHByb3BlcnR5IGlzIGFkZGVkIGJlZm9yZSBydW50aW1lLiBJZiBhbiBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIGluXHJcbiAgLy8gSklUIG1vZGUgdGhlbiB0aGlzIHByb3BlcnR5IGNhbiBiZSBhZGRlZCBieSB0aGUgYEBJbmplY3RhYmxlKClgIGRlY29yYXRvci4gVGhlIGBASW5qZWN0YWJsZSgpYFxyXG4gIC8vIGRlY29yYXRvciBoYXMgdG8gZ28gYWZ0ZXIgdGhlIGBAU3RhdGUoKWAgZGVjb3JhdG9yLCB0aHVzIHdlIHByZXZlbnQgdXNlcnMgZnJvbSB1bndhbnRlZCBESSBlcnJvcnMuXHJcbiAgaXZ5RW5hYmxlZEluRGV2TW9kZSQuc3Vic2NyaWJlKF9pdnlFbmFibGVkSW5EZXZNb2RlID0+IHtcclxuICAgIGlmIChfaXZ5RW5hYmxlZEluRGV2TW9kZSkge1xyXG4gICAgICBjb25zdCBuZ0luamVjdGFibGVEZWYgPSB0YXJnZXQuybVwcm92O1xyXG4gICAgICBpZiAoIW5nSW5qZWN0YWJsZURlZikge1xyXG4gICAgICAgIC8vIERvbid0IHdhcm4gaWYgSXZ5IGlzIGRpc2FibGVkIG9yIGDJtXByb3ZgIGV4aXN0cyBvbiB0aGUgY2xhc3NcclxuICAgICAgICBjb25zb2xlLndhcm4oQ09ORklHX01FU1NBR0VTW1ZBTElEQVRJT05fQ09ERS5VTkRFQ09SQVRFRF9TVEFURV9JTl9JVlldKHRhcmdldC5uYW1lKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXX0=