/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getPlatform, COMPILER_OPTIONS } from '@angular/core';
import { memoize } from './memoize';
/**
 * @return {?}
 */
function _isAngularInTestMode() {
    /** @type {?} */
    const platformRef = getPlatform();
    if (!platformRef)
        return false;
    /** @type {?} */
    const compilerOptions = platformRef.injector.get(COMPILER_OPTIONS, null);
    if (!compilerOptions)
        return false;
    /** @type {?} */
    const isInTestMode = compilerOptions.some((/**
     * @param {?} item
     * @return {?}
     */
    (item) => {
        /** @type {?} */
        const providers = (item && item.providers) || [];
        return providers.some((/**
         * @param {?} provider
         * @return {?}
         */
        (provider) => {
            return ((provider && provider.provide && provider.provide.name === 'MockNgModuleResolver') ||
                false);
        }));
    }));
    return isInTestMode;
}
/** @type {?} */
export const isAngularInTestMode = memoize(_isAngularInTestMode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbImFuZ3VsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFcEMsU0FBUyxvQkFBb0I7O1VBQ3JCLFdBQVcsR0FBdUIsV0FBVyxFQUFFO0lBQ3JELElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxLQUFLLENBQUM7O1VBQ3pCLGVBQWUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBTSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7SUFDN0UsSUFBSSxDQUFDLGVBQWU7UUFBRSxPQUFPLEtBQUssQ0FBQzs7VUFDN0IsWUFBWSxHQUFHLGVBQWUsQ0FBQyxJQUFJOzs7O0lBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7O2NBQzVELFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtRQUNoRCxPQUFPLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUN0QyxPQUFPLENBQ0wsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxzQkFBc0IsQ0FBQztnQkFDbEYsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztJQUNGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBsYXRmb3JtLCBDT01QSUxFUl9PUFRJT05TLCBDb21waWxlck9wdGlvbnMsIFBsYXRmb3JtUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1lbW9pemUgfSBmcm9tICcuL21lbW9pemUnO1xyXG5cclxuZnVuY3Rpb24gX2lzQW5ndWxhckluVGVzdE1vZGUoKSB7XHJcbiAgY29uc3QgcGxhdGZvcm1SZWY6IFBsYXRmb3JtUmVmIHwgbnVsbCA9IGdldFBsYXRmb3JtKCk7XHJcbiAgaWYgKCFwbGF0Zm9ybVJlZikgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHBsYXRmb3JtUmVmLmluamVjdG9yLmdldDxhbnk+KENPTVBJTEVSX09QVElPTlMsIG51bGwpO1xyXG4gIGlmICghY29tcGlsZXJPcHRpb25zKSByZXR1cm4gZmFsc2U7XHJcbiAgY29uc3QgaXNJblRlc3RNb2RlID0gY29tcGlsZXJPcHRpb25zLnNvbWUoKGl0ZW06IENvbXBpbGVyT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gKGl0ZW0gJiYgaXRlbS5wcm92aWRlcnMpIHx8IFtdO1xyXG4gICAgcmV0dXJuIHByb3ZpZGVycy5zb21lKChwcm92aWRlcjogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKHByb3ZpZGVyICYmIHByb3ZpZGVyLnByb3ZpZGUgJiYgcHJvdmlkZXIucHJvdmlkZS5uYW1lID09PSAnTW9ja05nTW9kdWxlUmVzb2x2ZXInKSB8fFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gaXNJblRlc3RNb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNBbmd1bGFySW5UZXN0TW9kZSA9IG1lbW9pemUoX2lzQW5ndWxhckluVGVzdE1vZGUpO1xyXG4iXX0=