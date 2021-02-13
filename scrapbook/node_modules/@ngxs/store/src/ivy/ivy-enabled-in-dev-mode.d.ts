import { ReplaySubject } from 'rxjs';
export declare const ivyEnabledInDevMode$: ReplaySubject<boolean>;
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
 */
export declare function setIvyEnabledInDevMode(): void;
