import { RepairType } from './utils';
export declare type Predicate<T = any> = (value?: RepairType<T> | Readonly<RepairType<T>>) => boolean;
