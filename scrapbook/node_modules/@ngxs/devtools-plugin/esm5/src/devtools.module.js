/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, InjectionToken } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NGXS_DEVTOOLS_OPTIONS } from './symbols';
import { NgxsReduxDevtoolsPlugin } from './devtools.plugin';
/**
 * @param {?} options
 * @return {?}
 */
export function devtoolsOptionsFactory(options) {
    return tslib_1.__assign({ name: 'NGXS' }, options);
}
/** @type {?} */
export var USER_OPTIONS = new InjectionToken('USER_OPTIONS');
var NgxsReduxDevtoolsPluginModule = /** @class */ (function () {
    function NgxsReduxDevtoolsPluginModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgxsReduxDevtoolsPluginModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    };
    NgxsReduxDevtoolsPluginModule.decorators = [
        { type: NgModule }
    ];
    return NgxsReduxDevtoolsPluginModule;
}());
export { NgxsReduxDevtoolsPluginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMvZGV2dG9vbHMtcGx1Z2luLyIsInNvdXJjZXMiOlsic3JjL2RldnRvb2xzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTNDLE9BQU8sRUFBdUIscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBRTVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxPQUE0QjtJQUNqRSwwQkFDRSxJQUFJLEVBQUUsTUFBTSxJQUNULE9BQU8sRUFDVjtBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFFOUQ7SUFBQTtJQXlCQSxDQUFDOzs7OztJQXZCUSxxQ0FBTzs7OztJQUFkLFVBQ0UsT0FBNkI7UUFFN0IsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDckI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4QkYsUUFBUTs7SUF5QlQsb0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYU19QTFVHSU5TIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmd4c0RldnRvb2xzT3B0aW9ucywgTkdYU19ERVZUT09MU19PUFRJT05TIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuaW1wb3J0IHsgTmd4c1JlZHV4RGV2dG9vbHNQbHVnaW4gfSBmcm9tICcuL2RldnRvb2xzLnBsdWdpbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGV2dG9vbHNPcHRpb25zRmFjdG9yeShvcHRpb25zOiBOZ3hzRGV2dG9vbHNPcHRpb25zKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdOR1hTJyxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdVU0VSX09QVElPTlMnKTtcclxuXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoXHJcbiAgICBvcHRpb25zPzogTmd4c0RldnRvb2xzT3B0aW9uc1xyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c1JlZHV4RGV2dG9vbHNQbHVnaW5Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzUmVkdXhEZXZ0b29sc1BsdWdpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IE5neHNSZWR1eERldnRvb2xzUGx1Z2luLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX0RFVlRPT0xTX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZXZ0b29sc09wdGlvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==