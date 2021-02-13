/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NGXS_DEVTOOLS_OPTIONS } from './symbols';
import { NgxsReduxDevtoolsPlugin } from './devtools.plugin';
/**
 * @param {?} options
 * @return {?}
 */
export function devtoolsOptionsFactory(options) {
    return Object.assign({ name: 'NGXS' }, options);
}
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
export class NgxsReduxDevtoolsPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsReduxDevtoolsPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsReduxDevtoolsPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_DEVTOOLS_OPTIONS,
                    useFactory: devtoolsOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    }
}
NgxsReduxDevtoolsPluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvZGV2dG9vbHMtcGx1Z2luLyIsInNvdXJjZXMiOlsic3JjL2RldnRvb2xzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFM0MsT0FBTyxFQUF1QixxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFNUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLE9BQTRCO0lBQ2pFLHVCQUNFLElBQUksRUFBRSxNQUFNLElBQ1QsT0FBTyxFQUNWO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUc5RCxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUN4QyxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQTZCO1FBRTdCLE9BQU87WUFDTCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsc0JBQXNCO29CQUNsQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYU19QTFVHSU5TIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmd4c0RldnRvb2xzT3B0aW9ucywgTkdYU19ERVZUT09MU19PUFRJT05TIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgTmd4c1JlZHV4RGV2dG9vbHNQbHVnaW4gfSBmcm9tICcuL2RldnRvb2xzLnBsdWdpbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGV2dG9vbHNPcHRpb25zRmFjdG9yeShvcHRpb25zOiBOZ3hzRGV2dG9vbHNPcHRpb25zKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdOR1hTJyxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdVU0VSX09QVElPTlMnKTtcclxuXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoXHJcbiAgICBvcHRpb25zPzogTmd4c0RldnRvb2xzT3B0aW9uc1xyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c1JlZHV4RGV2dG9vbHNQbHVnaW5Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IE5neHNSZWR1eERldnRvb2xzUGx1Z2luLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX0RFVlRPT0xTX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZXZ0b29sc09wdGlvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==