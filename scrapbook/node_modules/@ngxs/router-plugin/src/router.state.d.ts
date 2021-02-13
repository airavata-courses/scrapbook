import { NgZone } from '@angular/core';
import { Router, RouterStateSnapshot, UrlSerializer } from '@angular/router';
import { LocationStrategy, Location } from '@angular/common';
import { StateContext, Store } from '@ngxs/store';
import { Navigate, RouterAction } from './router.actions';
import { RouterStateSerializer } from './serializer';
export interface RouterStateModel<T = RouterStateSnapshot> {
    state?: T;
    navigationId?: number;
    trigger: RouterTrigger;
}
export declare type RouterTrigger = 'none' | 'router' | 'store';
export declare class RouterState {
    private _store;
    private _router;
    private _serializer;
    private _ngZone;
    private _urlSerializer;
    private _locationStrategy;
    private _location;
    /**
     * Determines how navigation was performed by the `RouterState` itself
     * or outside via `new Navigate(...)`
     */
    private _trigger;
    /**
     * That's the serialized state from the `Router` class
     */
    private _routerState;
    /**
     * That's the value of the `RouterState` state
     */
    private _storeState;
    private _lastRoutesRecognized;
    static state<T = RouterStateSnapshot>(state: RouterStateModel<T>): T | undefined;
    static url(state: RouterStateModel): string | undefined;
    constructor(_store: Store, _router: Router, _serializer: RouterStateSerializer<RouterStateSnapshot>, _ngZone: NgZone, _urlSerializer: UrlSerializer, _locationStrategy: LocationStrategy, _location: Location);
    navigate(_: StateContext<RouterStateModel>, action: Navigate): Promise<boolean>;
    angularRouterAction(ctx: StateContext<RouterStateModel>, action: RouterAction<RouterStateModel, RouterStateSnapshot>): void;
    private setUpStoreListener;
    private setUpRouterEventsListener;
    private navigationStart;
    private navigationEnd;
    private shouldDispatchRouterNavigation;
    private navigateIfNeeded;
    private dispatchRouterNavigation;
    private dispatchRouterCancel;
    private dispatchRouterError;
    private dispatchRouterAction;
    private dispatchRouterDataResolved;
    private reset;
    /**
     * No sense to mess up the `setUpRouterEventsListener` method as we have
     * to perform this check only once and unsubscribe after the first event
     * is triggered
     */
    private checkInitialNavigationOnce;
}
