/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken, NgModule } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NgxsLoggerPlugin } from './logger.plugin';
import { NGXS_LOGGER_PLUGIN_OPTIONS } from './symbols';
/** @type {?} */
export var USER_OPTIONS = new InjectionToken('LOGGER_USER_OPTIONS');
/**
 * @param {?} options
 * @return {?}
 */
export function loggerOptionsFactory(options) {
    /** @type {?} */
    var defaultLoggerOptions = {
        logger: console,
        collapsed: false,
        disabled: false,
        filter: (/**
         * @return {?}
         */
        function () { return true; })
    };
    return tslib_1.__assign({}, defaultLoggerOptions, options);
}
var NgxsLoggerPluginModule = /** @class */ (function () {
    function NgxsLoggerPluginModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgxsLoggerPluginModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: NgxsLoggerPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsLoggerPlugin,
                    multi: true
                },
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_LOGGER_PLUGIN_OPTIONS,
                    useFactory: loggerOptionsFactory,
                    deps: [USER_OPTIONS]
                }
            ]
        };
    };
    NgxsLoggerPluginModule.decorators = [
        { type: NgModule }
    ];
    return NgxsLoggerPluginModule;
}());
export { NgxsLoggerPluginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBMkIsMEJBQTBCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRWhGLE1BQU0sS0FBTyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMscUJBQXFCLENBQUM7Ozs7O0FBRXJFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUFnQzs7UUFDN0Qsb0JBQW9CLEdBQTRCO1FBQ3BELE1BQU0sRUFBRSxPQUFPO1FBQ2YsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNOzs7UUFBRSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQTtLQUNuQjtJQUVELDRCQUNLLG9CQUFvQixFQUNwQixPQUFPLEVBQ1Y7QUFDSixDQUFDO0FBRUQ7SUFBQTtJQXlCQSxDQUFDOzs7OztJQXZCUSw4QkFBTzs7OztJQUFkLFVBQ0UsT0FBaUM7UUFFakMsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDckI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4QkYsUUFBUTs7SUF5QlQsNkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYU19QTFVHSU5TIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTG9nZ2VyUGx1Z2luIH0gZnJvbSAnLi9sb2dnZXIucGx1Z2luJztcclxuaW1wb3J0IHsgTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMsIE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TIH0gZnJvbSAnLi9zeW1ib2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0xPR0dFUl9VU0VSX09QVElPTlMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXJPcHRpb25zRmFjdG9yeShvcHRpb25zOiBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucykge1xyXG4gIGNvbnN0IGRlZmF1bHRMb2dnZXJPcHRpb25zOiBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9ucyA9IHtcclxuICAgIGxvZ2dlcjogY29uc29sZSxcclxuICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXI6ICgpID0+IHRydWVcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uZGVmYXVsdExvZ2dlck9wdGlvbnMsXHJcbiAgICAuLi5vcHRpb25zXHJcbiAgfTtcclxufVxyXG5cclxuQE5nTW9kdWxlKClcclxuZXhwb3J0IGNsYXNzIE5neHNMb2dnZXJQbHVnaW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KFxyXG4gICAgb3B0aW9ucz86IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zXHJcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzTG9nZ2VyUGx1Z2luTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4c0xvZ2dlclBsdWdpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IE5neHNMb2dnZXJQbHVnaW4sXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfTE9HR0VSX1BMVUdJTl9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbG9nZ2VyT3B0aW9uc0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbVVNFUl9PUFRJT05TXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19