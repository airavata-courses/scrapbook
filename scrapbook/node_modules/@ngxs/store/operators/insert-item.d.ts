import { StateOperator } from '@ngxs/store';
import { RepairType } from './utils';
/**
 * @param value - Value to insert
 * @param [beforePosition] -  Specified index to insert value before, optional
 */
export declare function insertItem<T>(value: T, beforePosition?: number): StateOperator<RepairType<T>[]>;
