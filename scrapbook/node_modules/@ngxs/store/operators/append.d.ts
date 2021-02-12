import { StateOperator } from '@ngxs/store';
import { RepairType } from './utils';
/**
 * @param items - Specific items to append to the end of an array
 */
export declare function append<T>(items: T[]): StateOperator<RepairType<T>[]>;
