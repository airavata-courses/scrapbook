import { StateOperator } from '@ngxs/store';
import { Predicate } from './internals';
import { RepairType } from './utils';
/**
 * @param selector - index or predicate to remove an item from an array by
 */
export declare function removeItem<T>(selector: number | Predicate<T>): StateOperator<RepairType<T>[]>;
