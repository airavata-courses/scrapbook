/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APP_BOOTSTRAP_LISTENER, InjectionToken, isDevMode, NgModule } from '@angular/core';
import { INITIAL_STATE_TOKEN, InitialState, isAngularInTestMode, NGXS_STATE_CONTEXT_FACTORY, NGXS_STATE_FACTORY, NgxsBootstrapper } from '@ngxs/store/internals';
import { FEATURE_STATE_TOKEN, NG_DEV_MODE, NG_TEST_MODE, NgxsConfig, ROOT_STATE_TOKEN } from './symbols';
import { NGXS_EXECUTION_STRATEGY } from './execution/symbols';
import { StateFactory } from './internal/state-factory';
import { StateContextFactory } from './internal/state-context-factory';
import { Actions, InternalActions } from './actions-stream';
import { LifecycleStateManager } from './internal/lifecycle-state-manager';
import { InternalDispatchedActionResults, InternalDispatcher } from './internal/dispatcher';
import { InternalStateOperations } from './internal/state-operations';
import { Store } from './store';
import { SelectFactory } from './decorators/select/select-factory';
import { StateStream } from './internal/state-stream';
import { PluginManager } from './plugin-manager';
import { NgxsRootModule } from './modules/ngxs-root.module';
import { NgxsFeatureModule } from './modules/ngxs-feature.module';
import { DispatchOutsideZoneNgxsExecutionStrategy } from './execution/dispatch-outside-zone-ngxs-execution-strategy';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
import { HostEnvironment } from './host-environment/host-environment';
import { ConfigValidator } from './internal/config-validator';
import { mergeDeep } from './utils/utils';
/**
 * Ngxs Module
 */
var NgxsModule = /** @class */ (function () {
    function NgxsModule() {
    }
    /**
     * Root module factory
     */
    /**
     * Root module factory
     * @param {?=} states
     * @param {?=} options
     * @return {?}
     */
    NgxsModule.forRoot = /**
     * Root module factory
     * @param {?=} states
     * @param {?=} options
     * @return {?}
     */
    function (states, options) {
        if (states === void 0) { states = []; }
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgxsRootModule,
            providers: tslib_1.__spread([
                StateFactory,
                StateContextFactory,
                Actions,
                InternalActions,
                NgxsBootstrapper,
                ConfigValidator,
                HostEnvironment,
                LifecycleStateManager,
                InternalDispatcher,
                InternalDispatchedActionResults,
                InternalStateOperations,
                InternalNgxsExecutionStrategy,
                Store,
                StateStream,
                SelectFactory,
                PluginManager
            ], states, NgxsModule.ngxsTokenProviders(states, options))
        };
    };
    /**
     * Feature module factory
     */
    /**
     * Feature module factory
     * @param {?=} states
     * @return {?}
     */
    NgxsModule.forFeature = /**
     * Feature module factory
     * @param {?=} states
     * @return {?}
     */
    function (states) {
        if (states === void 0) { states = []; }
        return {
            ngModule: NgxsFeatureModule,
            providers: tslib_1.__spread([
                StateFactory,
                PluginManager
            ], states, [
                {
                    provide: FEATURE_STATE_TOKEN,
                    multi: true,
                    useValue: states
                }
            ])
        };
    };
    /**
     * @private
     * @param {?} states
     * @param {?} options
     * @return {?}
     */
    NgxsModule.ngxsTokenProviders = /**
     * @private
     * @param {?} states
     * @param {?} options
     * @return {?}
     */
    function (states, options) {
        return [
            {
                provide: NG_TEST_MODE,
                useValue: isAngularInTestMode
            },
            {
                provide: NG_DEV_MODE,
                useValue: isDevMode
            },
            {
                provide: NGXS_EXECUTION_STRATEGY,
                useClass: options.executionStrategy || DispatchOutsideZoneNgxsExecutionStrategy
            },
            {
                provide: ROOT_STATE_TOKEN,
                useValue: states
            },
            {
                provide: NgxsModule.ROOT_OPTIONS,
                useValue: options
            },
            {
                provide: NgxsConfig,
                useFactory: NgxsModule.ngxsConfigFactory,
                deps: [NgxsModule.ROOT_OPTIONS]
            },
            {
                provide: APP_BOOTSTRAP_LISTENER,
                useFactory: NgxsModule.appBootstrapListenerFactory,
                multi: true,
                deps: [NgxsBootstrapper]
            },
            {
                provide: INITIAL_STATE_TOKEN,
                useFactory: NgxsModule.getInitialState
            },
            {
                provide: NGXS_STATE_CONTEXT_FACTORY,
                useExisting: StateContextFactory
            },
            {
                provide: NGXS_STATE_FACTORY,
                useExisting: StateFactory
            }
        ];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    NgxsModule.ngxsConfigFactory = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return mergeDeep(new NgxsConfig(), options);
    };
    /**
     * @private
     * @param {?} bootstrapper
     * @return {?}
     */
    NgxsModule.appBootstrapListenerFactory = /**
     * @private
     * @param {?} bootstrapper
     * @return {?}
     */
    function (bootstrapper) {
        return (/**
         * @return {?}
         */
        function () { return bootstrapper.bootstrap(); });
    };
    /**
     * @private
     * @return {?}
     */
    NgxsModule.getInitialState = /**
     * @private
     * @return {?}
     */
    function () {
        return InitialState.pop();
    };
    NgxsModule.ROOT_OPTIONS = new InjectionToken('ROOT_OPTIONS');
    NgxsModule.decorators = [
        { type: NgModule }
    ];
    return NgxsModule;
}());
export { NgxsModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsModule.ROOT_OPTIONS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsU0FBUyxFQUVULFFBQVEsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFFakIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUVWLGdCQUFnQixFQUNqQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLMUM7SUFBQTtJQXFIQSxDQUFDO0lBakhDOztPQUVHOzs7Ozs7O0lBQ1csa0JBQU87Ozs7OztJQUFyQixVQUNFLE1BQXlCLEVBQ3pCLE9BQStCO1FBRC9CLHVCQUFBLEVBQUEsV0FBeUI7UUFDekIsd0JBQUEsRUFBQSxZQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUztnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsT0FBTztnQkFDUCxlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQiwrQkFBK0I7Z0JBQy9CLHVCQUF1QjtnQkFDdkIsNkJBQTZCO2dCQUM3QixLQUFLO2dCQUNMLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixhQUFhO2VBQ1YsTUFBTSxFQUNOLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ1cscUJBQVU7Ozs7O0lBQXhCLFVBQXlCLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsV0FBeUI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUztnQkFDUCxZQUFZO2dCQUNaLGFBQWE7ZUFDVixNQUFNO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtjQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFYyw2QkFBa0I7Ozs7OztJQUFqQyxVQUNFLE1BQW9CLEVBQ3BCLE9BQTBCO1FBRTFCLE9BQU87WUFDTDtnQkFDRSxPQUFPLEVBQUUsWUFBWTtnQkFDckIsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSx1QkFBdUI7Z0JBQ2hDLFFBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksd0NBQXdDO2FBQ2hGO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsUUFBUSxFQUFFLE1BQU07YUFDakI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsVUFBVSxDQUFDLFlBQVk7Z0JBQ2hDLFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFVBQVUsRUFBRSxVQUFVLENBQUMsaUJBQWlCO2dCQUN4QyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsVUFBVSxFQUFFLFVBQVUsQ0FBQywyQkFBMkI7Z0JBQ2xELEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ3pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxlQUFlO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLDBCQUEwQjtnQkFDbkMsV0FBVyxFQUFFLG1CQUFtQjthQUNqQztZQUNEO2dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFdBQVcsRUFBRSxZQUFZO2FBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVjLDRCQUFpQjs7Ozs7SUFBaEMsVUFBaUMsT0FBMEI7UUFDekQsT0FBTyxTQUFTLENBQUMsSUFBSSxVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFYyxzQ0FBMkI7Ozs7O0lBQTFDLFVBQTJDLFlBQThCO1FBQ3ZFOzs7UUFBTyxjQUFNLE9BQUEsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUF4QixDQUF3QixFQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRWMsMEJBQWU7Ozs7SUFBOUI7UUFDRSxPQUFPLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBbEh1Qix1QkFBWSxHQUFHLElBQUksY0FBYyxDQUFvQixjQUFjLENBQUMsQ0FBQzs7Z0JBRjlGLFFBQVE7O0lBcUhULGlCQUFDO0NBQUEsQUFySEQsSUFxSEM7U0FwSFksVUFBVTs7Ozs7O0lBQ3JCLHdCQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQVBQX0JPT1RTVFJBUF9MSVNURU5FUixcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBpc0Rldk1vZGUsXHJcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcclxuICBOZ01vZHVsZSxcclxuICBQcm92aWRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIElOSVRJQUxfU1RBVEVfVE9LRU4sXHJcbiAgSW5pdGlhbFN0YXRlLFxyXG4gIGlzQW5ndWxhckluVGVzdE1vZGUsXHJcbiAgTkdYU19TVEFURV9DT05URVhUX0ZBQ1RPUlksXHJcbiAgTkdYU19TVEFURV9GQUNUT1JZLFxyXG4gIE5neHNCb290c3RyYXBwZXIsXHJcbiAgU3RhdGVDbGFzc1xyXG59IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZFQVRVUkVfU1RBVEVfVE9LRU4sXHJcbiAgTkdfREVWX01PREUsXHJcbiAgTkdfVEVTVF9NT0RFLFxyXG4gIE5neHNDb25maWcsXHJcbiAgTmd4c01vZHVsZU9wdGlvbnMsXHJcbiAgUk9PVF9TVEFURV9UT0tFTlxyXG59IGZyb20gJy4vc3ltYm9scyc7XHJcbmltcG9ydCB7IE5HWFNfRVhFQ1VUSU9OX1NUUkFURUdZIH0gZnJvbSAnLi9leGVjdXRpb24vc3ltYm9scyc7XHJcbmltcG9ydCB7IFN0YXRlRmFjdG9yeSB9IGZyb20gJy4vaW50ZXJuYWwvc3RhdGUtZmFjdG9yeSc7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dEZhY3RvcnkgfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLWNvbnRleHQtZmFjdG9yeSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEludGVybmFsQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucy1zdHJlYW0nO1xyXG5pbXBvcnQgeyBMaWZlY3ljbGVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2ludGVybmFsL2xpZmVjeWNsZS1zdGF0ZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cywgSW50ZXJuYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9kaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3RGYWN0b3J5IH0gZnJvbSAnLi9kZWNvcmF0b3JzL3NlbGVjdC9zZWxlY3QtZmFjdG9yeSc7XHJcbmltcG9ydCB7IFN0YXRlU3RyZWFtIH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1zdHJlYW0nO1xyXG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyIH0gZnJvbSAnLi9wbHVnaW4tbWFuYWdlcic7XHJcbmltcG9ydCB7IE5neHNSb290TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL25neHMtcm9vdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ3hzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9uZ3hzLWZlYXR1cmUubW9kdWxlJztcclxuaW1wb3J0IHsgRGlzcGF0Y2hPdXRzaWRlWm9uZU5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2Rpc3BhdGNoLW91dHNpZGUtem9uZS1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneSc7XHJcbmltcG9ydCB7IEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9leGVjdXRpb24vaW50ZXJuYWwtbmd4cy1leGVjdXRpb24tc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBIb3N0RW52aXJvbm1lbnQgfSBmcm9tICcuL2hvc3QtZW52aXJvbm1lbnQvaG9zdC1lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vaW50ZXJuYWwvY29uZmlnLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIE5neHMgTW9kdWxlXHJcbiAqL1xyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4c01vZHVsZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUk9PVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPE5neHNNb2R1bGVPcHRpb25zPignUk9PVF9PUFRJT05TJyk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvb3QgbW9kdWxlIGZhY3RvcnlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NbXSA9IFtdLFxyXG4gICAgb3B0aW9uczogTmd4c01vZHVsZU9wdGlvbnMgPSB7fVxyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c1Jvb3RNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzUm9vdE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgU3RhdGVGYWN0b3J5LFxyXG4gICAgICAgIFN0YXRlQ29udGV4dEZhY3RvcnksXHJcbiAgICAgICAgQWN0aW9ucyxcclxuICAgICAgICBJbnRlcm5hbEFjdGlvbnMsXHJcbiAgICAgICAgTmd4c0Jvb3RzdHJhcHBlcixcclxuICAgICAgICBDb25maWdWYWxpZGF0b3IsXHJcbiAgICAgICAgSG9zdEVudmlyb25tZW50LFxyXG4gICAgICAgIExpZmVjeWNsZVN0YXRlTWFuYWdlcixcclxuICAgICAgICBJbnRlcm5hbERpc3BhdGNoZXIsXHJcbiAgICAgICAgSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyxcclxuICAgICAgICBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyxcclxuICAgICAgICBJbnRlcm5hbE5neHNFeGVjdXRpb25TdHJhdGVneSxcclxuICAgICAgICBTdG9yZSxcclxuICAgICAgICBTdGF0ZVN0cmVhbSxcclxuICAgICAgICBTZWxlY3RGYWN0b3J5LFxyXG4gICAgICAgIFBsdWdpbk1hbmFnZXIsXHJcbiAgICAgICAgLi4uc3RhdGVzLFxyXG4gICAgICAgIC4uLk5neHNNb2R1bGUubmd4c1Rva2VuUHJvdmlkZXJzKHN0YXRlcywgb3B0aW9ucylcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlYXR1cmUgbW9kdWxlIGZhY3RvcnlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGZvckZlYXR1cmUoc3RhdGVzOiBTdGF0ZUNsYXNzW10gPSBbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c0ZlYXR1cmVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzRmVhdHVyZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgU3RhdGVGYWN0b3J5LFxyXG4gICAgICAgIFBsdWdpbk1hbmFnZXIsXHJcbiAgICAgICAgLi4uc3RhdGVzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEZFQVRVUkVfU1RBVEVfVE9LRU4sXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIHVzZVZhbHVlOiBzdGF0ZXNcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBuZ3hzVG9rZW5Qcm92aWRlcnMoXHJcbiAgICBzdGF0ZXM6IFN0YXRlQ2xhc3NbXSxcclxuICAgIG9wdGlvbnM6IE5neHNNb2R1bGVPcHRpb25zXHJcbiAgKTogUHJvdmlkZXJbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVEVTVF9NT0RFLFxyXG4gICAgICAgIHVzZVZhbHVlOiBpc0FuZ3VsYXJJblRlc3RNb2RlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBOR19ERVZfTU9ERSxcclxuICAgICAgICB1c2VWYWx1ZTogaXNEZXZNb2RlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBOR1hTX0VYRUNVVElPTl9TVFJBVEVHWSxcclxuICAgICAgICB1c2VDbGFzczogb3B0aW9ucy5leGVjdXRpb25TdHJhdGVneSB8fCBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBST09UX1NUQVRFX1RPS0VOLFxyXG4gICAgICAgIHVzZVZhbHVlOiBzdGF0ZXNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5neHNNb2R1bGUuUk9PVF9PUFRJT05TLFxyXG4gICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBOZ3hzQ29uZmlnLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IE5neHNNb2R1bGUubmd4c0NvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgZGVwczogW05neHNNb2R1bGUuUk9PVF9PUFRJT05TXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogQVBQX0JPT1RTVFJBUF9MSVNURU5FUixcclxuICAgICAgICB1c2VGYWN0b3J5OiBOZ3hzTW9kdWxlLmFwcEJvb3RzdHJhcExpc3RlbmVyRmFjdG9yeSxcclxuICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICBkZXBzOiBbTmd4c0Jvb3RzdHJhcHBlcl1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IElOSVRJQUxfU1RBVEVfVE9LRU4sXHJcbiAgICAgICAgdXNlRmFjdG9yeTogTmd4c01vZHVsZS5nZXRJbml0aWFsU3RhdGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5HWFNfU1RBVEVfQ09OVEVYVF9GQUNUT1JZLFxyXG4gICAgICAgIHVzZUV4aXN0aW5nOiBTdGF0ZUNvbnRleHRGYWN0b3J5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBOR1hTX1NUQVRFX0ZBQ1RPUlksXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IFN0YXRlRmFjdG9yeVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbmd4c0NvbmZpZ0ZhY3Rvcnkob3B0aW9uczogTmd4c01vZHVsZU9wdGlvbnMpOiBOZ3hzQ29uZmlnIHtcclxuICAgIHJldHVybiBtZXJnZURlZXAobmV3IE5neHNDb25maWcoKSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhcHBCb290c3RyYXBMaXN0ZW5lckZhY3RvcnkoYm9vdHN0cmFwcGVyOiBOZ3hzQm9vdHN0cmFwcGVyKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuICgpID0+IGJvb3RzdHJhcHBlci5ib290c3RyYXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIHJldHVybiBJbml0aWFsU3RhdGUucG9wKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==