/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgxsModule {
    /**
     * Root module factory
     * @param {?=} states
     * @param {?=} options
     * @return {?}
     */
    static forRoot(states = [], options = {}) {
        return {
            ngModule: NgxsRootModule,
            providers: [
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
                PluginManager,
                ...states,
                ...NgxsModule.ngxsTokenProviders(states, options)
            ]
        };
    }
    /**
     * Feature module factory
     * @param {?=} states
     * @return {?}
     */
    static forFeature(states = []) {
        return {
            ngModule: NgxsFeatureModule,
            providers: [
                StateFactory,
                PluginManager,
                ...states,
                {
                    provide: FEATURE_STATE_TOKEN,
                    multi: true,
                    useValue: states
                }
            ]
        };
    }
    /**
     * @private
     * @param {?} states
     * @param {?} options
     * @return {?}
     */
    static ngxsTokenProviders(states, options) {
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
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    static ngxsConfigFactory(options) {
        return mergeDeep(new NgxsConfig(), options);
    }
    /**
     * @private
     * @param {?} bootstrapper
     * @return {?}
     */
    static appBootstrapListenerFactory(bootstrapper) {
        return (/**
         * @return {?}
         */
        () => bootstrapper.bootstrap());
    }
    /**
     * @private
     * @return {?}
     */
    static getInitialState() {
        return InitialState.pop();
    }
}
NgxsModule.ROOT_OPTIONS = new InjectionToken('ROOT_OPTIONS');
NgxsModule.decorators = [
    { type: NgModule }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsModule.ROOT_OPTIONS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvc3RvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZCxTQUFTLEVBRVQsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLG1CQUFtQixFQUNuQiwwQkFBMEIsRUFDMUIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUVqQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBRVYsZ0JBQWdCLEVBQ2pCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FB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QUFPLFNBQVMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxZQUE4QjtRQUN2RTs7O1FBQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sTUFBTSxDQUFDLGVBQWU7UUFDNUIsT0FBTyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7QUFsSHVCLHVCQUFZLEdBQUcsSUFBSSxjQUFjLENBQW9CLGNBQWMsQ0FBQyxDQUFDOztZQUY5RixRQUFROzs7Ozs7O0lBRVAsd0JBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIGlzRGV2TW9kZSxcclxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxyXG4gIE5nTW9kdWxlLFxyXG4gIFByb3ZpZGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSU5JVElBTF9TVEFURV9UT0tFTixcclxuICBJbml0aWFsU3RhdGUsXHJcbiAgaXNBbmd1bGFySW5UZXN0TW9kZSxcclxuICBOR1hTX1NUQVRFX0NPTlRFWFRfRkFDVE9SWSxcclxuICBOR1hTX1NUQVRFX0ZBQ1RPUlksXHJcbiAgTmd4c0Jvb3RzdHJhcHBlcixcclxuICBTdGF0ZUNsYXNzXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUvaW50ZXJuYWxzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRkVBVFVSRV9TVEFURV9UT0tFTixcclxuICBOR19ERVZfTU9ERSxcclxuICBOR19URVNUX01PREUsXHJcbiAgTmd4c0NvbmZpZyxcclxuICBOZ3hzTW9kdWxlT3B0aW9ucyxcclxuICBST09UX1NUQVRFX1RPS0VOXHJcbn0gZnJvbSAnLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgTkdYU19FWEVDVVRJT05fU1RSQVRFR1kgfSBmcm9tICcuL2V4ZWN1dGlvbi9zeW1ib2xzJztcclxuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1mYWN0b3J5JztcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0RmFjdG9yeSB9IGZyb20gJy4vaW50ZXJuYWwvc3RhdGUtY29udGV4dC1mYWN0b3J5JztcclxuaW1wb3J0IHsgQWN0aW9ucywgSW50ZXJuYWxBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zLXN0cmVhbSc7XHJcbmltcG9ydCB7IExpZmVjeWNsZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vaW50ZXJuYWwvbGlmZWN5Y2xlLXN0YXRlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbnRlcm5hbERpc3BhdGNoZWRBY3Rpb25SZXN1bHRzLCBJbnRlcm5hbERpc3BhdGNoZXIgfSBmcm9tICcuL2ludGVybmFsL2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwvc3RhdGUtb3BlcmF0aW9ucyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFNlbGVjdEZhY3RvcnkgfSBmcm9tICcuL2RlY29yYXRvcnMvc2VsZWN0L3NlbGVjdC1mYWN0b3J5JztcclxuaW1wb3J0IHsgU3RhdGVTdHJlYW0gfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLXN0cmVhbSc7XHJcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXIgfSBmcm9tICcuL3BsdWdpbi1tYW5hZ2VyJztcclxuaW1wb3J0IHsgTmd4c1Jvb3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbmd4cy1yb290Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE5neHNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL25neHMtZmVhdHVyZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaE91dHNpZGVab25lTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9leGVjdXRpb24vZGlzcGF0Y2gtb3V0c2lkZS16b25lLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgSW50ZXJuYWxOZ3hzRXhlY3V0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL2V4ZWN1dGlvbi9pbnRlcm5hbC1uZ3hzLWV4ZWN1dGlvbi1zdHJhdGVneSc7XHJcbmltcG9ydCB7IEhvc3RFbnZpcm9ubWVudCB9IGZyb20gJy4vaG9zdC1lbnZpcm9ubWVudC9ob3N0LWVudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ29uZmlnVmFsaWRhdG9yIH0gZnJvbSAnLi9pbnRlcm5hbC9jb25maWctdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi91dGlscy91dGlscyc7XHJcblxyXG4vKipcclxuICogTmd4cyBNb2R1bGVcclxuICovXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzTW9kdWxlIHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBST09UX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4c01vZHVsZU9wdGlvbnM+KCdST09UX09QVElPTlMnKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUm9vdCBtb2R1bGUgZmFjdG9yeVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuICAgIHN0YXRlczogU3RhdGVDbGFzc1tdID0gW10sXHJcbiAgICBvcHRpb25zOiBOZ3hzTW9kdWxlT3B0aW9ucyA9IHt9XHJcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzUm9vdE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neHNSb290TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTdGF0ZUZhY3RvcnksXHJcbiAgICAgICAgU3RhdGVDb250ZXh0RmFjdG9yeSxcclxuICAgICAgICBBY3Rpb25zLFxyXG4gICAgICAgIEludGVybmFsQWN0aW9ucyxcclxuICAgICAgICBOZ3hzQm9vdHN0cmFwcGVyLFxyXG4gICAgICAgIENvbmZpZ1ZhbGlkYXRvcixcclxuICAgICAgICBIb3N0RW52aXJvbm1lbnQsXHJcbiAgICAgICAgTGlmZWN5Y2xlU3RhdGVNYW5hZ2VyLFxyXG4gICAgICAgIEludGVybmFsRGlzcGF0Y2hlcixcclxuICAgICAgICBJbnRlcm5hbERpc3BhdGNoZWRBY3Rpb25SZXN1bHRzLFxyXG4gICAgICAgIEludGVybmFsU3RhdGVPcGVyYXRpb25zLFxyXG4gICAgICAgIEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5LFxyXG4gICAgICAgIFN0b3JlLFxyXG4gICAgICAgIFN0YXRlU3RyZWFtLFxyXG4gICAgICAgIFNlbGVjdEZhY3RvcnksXHJcbiAgICAgICAgUGx1Z2luTWFuYWdlcixcclxuICAgICAgICAuLi5zdGF0ZXMsXHJcbiAgICAgICAgLi4uTmd4c01vZHVsZS5uZ3hzVG9rZW5Qcm92aWRlcnMoc3RhdGVzLCBvcHRpb25zKVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVhdHVyZSBtb2R1bGUgZmFjdG9yeVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yRmVhdHVyZShzdGF0ZXM6IFN0YXRlQ2xhc3NbXSA9IFtdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzRmVhdHVyZU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neHNGZWF0dXJlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTdGF0ZUZhY3RvcnksXHJcbiAgICAgICAgUGx1Z2luTWFuYWdlcixcclxuICAgICAgICAuLi5zdGF0ZXMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogRkVBVFVSRV9TVEFURV9UT0tFTixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHN0YXRlc1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG5neHNUb2tlblByb3ZpZGVycyhcclxuICAgIHN0YXRlczogU3RhdGVDbGFzc1tdLFxyXG4gICAgb3B0aW9uczogTmd4c01vZHVsZU9wdGlvbnNcclxuICApOiBQcm92aWRlcltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBOR19URVNUX01PREUsXHJcbiAgICAgICAgdXNlVmFsdWU6IGlzQW5ndWxhckluVGVzdE1vZGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5HX0RFVl9NT0RFLFxyXG4gICAgICAgIHVzZVZhbHVlOiBpc0Rldk1vZGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5HWFNfRVhFQ1VUSU9OX1NUUkFURUdZLFxyXG4gICAgICAgIHVzZUNsYXNzOiBvcHRpb25zLmV4ZWN1dGlvblN0cmF0ZWd5IHx8IERpc3BhdGNoT3V0c2lkZVpvbmVOZ3hzRXhlY3V0aW9uU3RyYXRlZ3lcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IFJPT1RfU1RBVEVfVE9LRU4sXHJcbiAgICAgICAgdXNlVmFsdWU6IHN0YXRlc1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTmd4c01vZHVsZS5ST09UX09QVElPTlMsXHJcbiAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5neHNDb25maWcsXHJcbiAgICAgICAgdXNlRmFjdG9yeTogTmd4c01vZHVsZS5uZ3hzQ29uZmlnRmFjdG9yeSxcclxuICAgICAgICBkZXBzOiBbTmd4c01vZHVsZS5ST09UX09QVElPTlNdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IE5neHNNb2R1bGUuYXBwQm9vdHN0cmFwTGlzdGVuZXJGYWN0b3J5LFxyXG4gICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIGRlcHM6IFtOZ3hzQm9vdHN0cmFwcGVyXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogSU5JVElBTF9TVEFURV9UT0tFTixcclxuICAgICAgICB1c2VGYWN0b3J5OiBOZ3hzTW9kdWxlLmdldEluaXRpYWxTdGF0ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTkdYU19TVEFURV9DT05URVhUX0ZBQ1RPUlksXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IFN0YXRlQ29udGV4dEZhY3RvcnlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IE5HWFNfU1RBVEVfRkFDVE9SWSxcclxuICAgICAgICB1c2VFeGlzdGluZzogU3RhdGVGYWN0b3J5XHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBuZ3hzQ29uZmlnRmFjdG9yeShvcHRpb25zOiBOZ3hzTW9kdWxlT3B0aW9ucyk6IE5neHNDb25maWcge1xyXG4gICAgcmV0dXJuIG1lcmdlRGVlcChuZXcgTmd4c0NvbmZpZygpLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFwcEJvb3RzdHJhcExpc3RlbmVyRmFjdG9yeShib290c3RyYXBwZXI6IE5neHNCb290c3RyYXBwZXIpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gKCkgPT4gYm9vdHN0cmFwcGVyLmJvb3RzdHJhcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIEluaXRpYWxTdGF0ZS5wb3AoKTtcclxuICB9XHJcbn1cclxuIl19