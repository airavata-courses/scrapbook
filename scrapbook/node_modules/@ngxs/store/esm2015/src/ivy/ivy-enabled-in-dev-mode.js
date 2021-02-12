/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
import { ReplaySubject } from 'rxjs';
/** @type {?} */
export const ivyEnabledInDevMode$ = new ReplaySubject(1);
/**
 * Ivy exposes helper functions to the global `window.ng` object.
 * Those functions are `getComponent, getContext,
 * getListeners, getViewComponent, getHostElement, getInjector,
 * getRootComponents, getDirectives, getDebugNode`
 * Previously, old view engine exposed `window.ng.coreTokens` and
 * `window.ng.probe` if an application was in development/production.
 * Ivy doesn't expose these functions in production. Developers will be able
 * to see warnings in both JIT/AOT modes, but only if an application
 * is in development.
 * @return {?}
 */
export function setIvyEnabledInDevMode() {
    try {
        // `try-catch` will also handle server-side rendering, as
        // `window is not defined` will not be thrown.
        /** @type {?} */
        const ng = ((/** @type {?} */ (window))).ng;
        /** @type {?} */
        const _viewEngineEnabled = !!ng.probe && !!ng.coreTokens;
        /** @type {?} */
        const _ivyEnabledInDevMode = !_viewEngineEnabled && isDevMode();
        ivyEnabledInDevMode$.next(_ivyEnabledInDevMode);
    }
    catch (_a) {
        ivyEnabledInDevMode$.next(false);
    }
    finally {
        ivyEnabledInDevMode$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy9pdnkvaXZ5LWVuYWJsZWQtaW4tZGV2LW1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFckMsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksYUFBYSxDQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRSxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLElBQUk7Ozs7Y0FHSSxFQUFFLEdBQUcsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEVBQUU7O2NBQ3ZCLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVTs7Y0FDbEQsb0JBQW9CLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxTQUFTLEVBQUU7UUFDL0Qsb0JBQW9CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDakQ7SUFBQyxXQUFNO1FBQ04sb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDO1lBQVM7UUFDUixvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl2eUVuYWJsZWRJbkRldk1vZGUkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XHJcblxyXG4vKipcclxuICogSXZ5IGV4cG9zZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB0aGUgZ2xvYmFsIGB3aW5kb3cubmdgIG9iamVjdC5cclxuICogVGhvc2UgZnVuY3Rpb25zIGFyZSBgZ2V0Q29tcG9uZW50LCBnZXRDb250ZXh0LFxyXG4gKiBnZXRMaXN0ZW5lcnMsIGdldFZpZXdDb21wb25lbnQsIGdldEhvc3RFbGVtZW50LCBnZXRJbmplY3RvcixcclxuICogZ2V0Um9vdENvbXBvbmVudHMsIGdldERpcmVjdGl2ZXMsIGdldERlYnVnTm9kZWBcclxuICogUHJldmlvdXNseSwgb2xkIHZpZXcgZW5naW5lIGV4cG9zZWQgYHdpbmRvdy5uZy5jb3JlVG9rZW5zYCBhbmRcclxuICogYHdpbmRvdy5uZy5wcm9iZWAgaWYgYW4gYXBwbGljYXRpb24gd2FzIGluIGRldmVsb3BtZW50L3Byb2R1Y3Rpb24uXHJcbiAqIEl2eSBkb2Vzbid0IGV4cG9zZSB0aGVzZSBmdW5jdGlvbnMgaW4gcHJvZHVjdGlvbi4gRGV2ZWxvcGVycyB3aWxsIGJlIGFibGVcclxuICogdG8gc2VlIHdhcm5pbmdzIGluIGJvdGggSklUL0FPVCBtb2RlcywgYnV0IG9ubHkgaWYgYW4gYXBwbGljYXRpb25cclxuICogaXMgaW4gZGV2ZWxvcG1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXZ5RW5hYmxlZEluRGV2TW9kZSgpOiB2b2lkIHtcclxuICB0cnkge1xyXG4gICAgLy8gYHRyeS1jYXRjaGAgd2lsbCBhbHNvIGhhbmRsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcsIGFzXHJcbiAgICAvLyBgd2luZG93IGlzIG5vdCBkZWZpbmVkYCB3aWxsIG5vdCBiZSB0aHJvd24uXHJcbiAgICBjb25zdCBuZyA9ICh3aW5kb3cgYXMgYW55KS5uZztcclxuICAgIGNvbnN0IF92aWV3RW5naW5lRW5hYmxlZCA9ICEhbmcucHJvYmUgJiYgISFuZy5jb3JlVG9rZW5zO1xyXG4gICAgY29uc3QgX2l2eUVuYWJsZWRJbkRldk1vZGUgPSAhX3ZpZXdFbmdpbmVFbmFibGVkICYmIGlzRGV2TW9kZSgpO1xyXG4gICAgaXZ5RW5hYmxlZEluRGV2TW9kZSQubmV4dChfaXZ5RW5hYmxlZEluRGV2TW9kZSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBpdnlFbmFibGVkSW5EZXZNb2RlJC5uZXh0KGZhbHNlKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgaXZ5RW5hYmxlZEluRGV2TW9kZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19