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
    var platformRef = getPlatform();
    if (!platformRef)
        return false;
    /** @type {?} */
    var compilerOptions = platformRef.injector.get(COMPILER_OPTIONS, null);
    if (!compilerOptions)
        return false;
    /** @type {?} */
    var isInTestMode = compilerOptions.some((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var providers = (item && item.providers) || [];
        return providers.some((/**
         * @param {?} provider
         * @return {?}
         */
        function (provider) {
            return ((provider && provider.provide && provider.provide.name === 'MockNgModuleResolver') ||
                false);
        }));
    }));
    return isInTestMode;
}
/** @type {?} */
export var isAngularInTestMode = memoize(_isAngularInTestMode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL3N0b3JlL2ludGVybmFscy8iLCJzb3VyY2VzIjpbImFuZ3VsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFcEMsU0FBUyxvQkFBb0I7O1FBQ3JCLFdBQVcsR0FBdUIsV0FBVyxFQUFFO0lBQ3JELElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxLQUFLLENBQUM7O1FBQ3pCLGVBQWUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBTSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7SUFDN0UsSUFBSSxDQUFDLGVBQWU7UUFBRSxPQUFPLEtBQUssQ0FBQzs7UUFDN0IsWUFBWSxHQUFHLGVBQWUsQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQyxJQUFxQjs7WUFDeEQsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1FBQ2hELE9BQU8sU0FBUyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLFFBQWE7WUFDbEMsT0FBTyxDQUNMLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssc0JBQXNCLENBQUM7Z0JBQ2xGLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUM7SUFDRixPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDOztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQbGF0Zm9ybSwgQ09NUElMRVJfT1BUSU9OUywgQ29tcGlsZXJPcHRpb25zLCBQbGF0Zm9ybVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnLi9tZW1vaXplJztcclxuXHJcbmZ1bmN0aW9uIF9pc0FuZ3VsYXJJblRlc3RNb2RlKCkge1xyXG4gIGNvbnN0IHBsYXRmb3JtUmVmOiBQbGF0Zm9ybVJlZiB8IG51bGwgPSBnZXRQbGF0Zm9ybSgpO1xyXG4gIGlmICghcGxhdGZvcm1SZWYpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCBjb21waWxlck9wdGlvbnMgPSBwbGF0Zm9ybVJlZi5pbmplY3Rvci5nZXQ8YW55PihDT01QSUxFUl9PUFRJT05TLCBudWxsKTtcclxuICBpZiAoIWNvbXBpbGVyT3B0aW9ucykgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IGlzSW5UZXN0TW9kZSA9IGNvbXBpbGVyT3B0aW9ucy5zb21lKChpdGVtOiBDb21waWxlck9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVycyA9IChpdGVtICYmIGl0ZW0ucHJvdmlkZXJzKSB8fCBbXTtcclxuICAgIHJldHVybiBwcm92aWRlcnMuc29tZSgocHJvdmlkZXI6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIChwcm92aWRlciAmJiBwcm92aWRlci5wcm92aWRlICYmIHByb3ZpZGVyLnByb3ZpZGUubmFtZSA9PT0gJ01vY2tOZ01vZHVsZVJlc29sdmVyJykgfHxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGlzSW5UZXN0TW9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzQW5ndWxhckluVGVzdE1vZGUgPSBtZW1vaXplKF9pc0FuZ3VsYXJJblRlc3RNb2RlKTtcclxuIl19