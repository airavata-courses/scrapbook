import { StateOperator } from '@ngxs/store';
export declare function compose<T>(...operators: StateOperator<T>[]): StateOperator<T>;
