import { SharedSelectorOptions, SelectorFactory } from '../internal/internals';
export declare const selectorOptionsMetaAccessor: {
    getOptions: (target: any) => SharedSelectorOptions;
    defineOptions: (target: any, options: SharedSelectorOptions) => void;
};
interface CreationMetadata {
    containerClass: any;
    selectorName: string;
    getSelectorOptions?: () => SharedSelectorOptions;
}
/**
 * Function for creating a selector
 * @param selectors The selectors to use to create the arguments of this function
 * @param originalFn The original function being made into a selector
 * @param creationMetadata
 */
export declare function createSelector<T extends (...args: any[]) => any>(selectors: any[] | undefined, originalFn: T, creationMetadata?: CreationMetadata): T;
/**
 * This function gets the factory function to create the selector to get the selected slice from the app state
 * @ignore
 */
export declare function getRootSelectorFactory(selector: any): SelectorFactory;
export {};
