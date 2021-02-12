import { SelectorType } from './symbols';
/**
 * Decorator for memoizing a state selector.
 */
export declare function Selector<T>(selectors?: T[]): SelectorType<T>;
