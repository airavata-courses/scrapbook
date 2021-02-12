/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NgxsLoggerPlugin } from './logger.plugin';
import { NGXS_LOGGER_PLUGIN_OPTIONS } from './symbols';
/** @type {?} */
export const USER_OPTIONS = new InjectionToken('LOGGER_USER_OPTIONS');
/**
 * @param {?} options
 * @return {?}
 */
export function loggerOptionsFactory(options) {
    /** @type {?} */
    const defaultLoggerOptions = {
        logger: console,
        collapsed: false,
        disabled: false,
        filter: (/**
         * @return {?}
         */
        () => true)
    };
    return Object.assign({}, defaultLoggerOptions, options);
}
export class NgxsLoggerPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
NgxsLoggerPluginModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzL2xvZ2dlci1wbHVnaW4vIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFaEYsTUFBTSxPQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQzs7Ozs7QUFFckUsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQWdDOztVQUM3RCxvQkFBb0IsR0FBNEI7UUFDcEQsTUFBTSxFQUFFLE9BQU87UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU07OztRQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQTtLQUNuQjtJQUVELHlCQUNLLG9CQUFvQixFQUNwQixPQUFPLEVBQ1Y7QUFDSixDQUFDO0FBR0QsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFpQztRQUVqQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDBCQUEwQjtvQkFDbkMsVUFBVSxFQUFFLG9CQUFvQjtvQkFDaEMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUNyQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXhCRixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgTmd4c0xvZ2dlclBsdWdpbiB9IGZyb20gJy4vbG9nZ2VyLnBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNMb2dnZXJQbHVnaW5PcHRpb25zLCBOR1hTX0xPR0dFUl9QTFVHSU5fT1BUSU9OUyB9IGZyb20gJy4vc3ltYm9scyc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdMT0dHRVJfVVNFUl9PUFRJT05TJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2VyT3B0aW9uc0ZhY3Rvcnkob3B0aW9uczogTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMpIHtcclxuICBjb25zdCBkZWZhdWx0TG9nZ2VyT3B0aW9uczogTmd4c0xvZ2dlclBsdWdpbk9wdGlvbnMgPSB7XHJcbiAgICBsb2dnZXI6IGNvbnNvbGUsXHJcbiAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgZmlsdGVyOiAoKSA9PiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmRlZmF1bHRMb2dnZXJPcHRpb25zLFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH07XHJcbn1cclxuXHJcbkBOZ01vZHVsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hzTG9nZ2VyUGx1Z2luTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChcclxuICAgIG9wdGlvbnM/OiBOZ3hzTG9nZ2VyUGx1Z2luT3B0aW9uc1xyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4c0xvZ2dlclBsdWdpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neHNMb2dnZXJQbHVnaW5Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfUExVR0lOUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBOZ3hzTG9nZ2VyUGx1Z2luLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX0xPR0dFUl9QTFVHSU5fT1BUSU9OUyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvZ2dlck9wdGlvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==