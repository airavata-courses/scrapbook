import { MetaDataModel, StateClassInternal, StatesByName } from '../internal/internals';
export declare abstract class StoreValidators {
    static stateNameRegex: RegExp;
    static stateNameErrorMessage(name: string): string;
    static checkCorrectStateName(name: string | null): void;
    static checkStateNameIsUnique(state: StateClassInternal, statesByName: StatesByName): string;
    static getValidStateMeta(state: StateClassInternal): MetaDataModel;
}
