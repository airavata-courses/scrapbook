import { OperatorFunction } from 'rxjs';
import { ActionType } from '../actions/symbols';
import { ActionContext } from '../actions-stream';
export interface ActionCompletion<T = any, E = Error> {
    action: T;
    result: {
        successful: boolean;
        canceled: boolean;
        error?: E;
    };
}
export declare function ofAction<T = any>(allowedType: ActionType): OperatorFunction<ActionContext, T>;
export declare function ofAction<T = any>(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, T>;
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been dispatched
 */
export declare function ofActionDispatched(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, any>;
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been successfully completed
 */
export declare function ofActionSuccessful(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, any>;
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been canceled
 */
export declare function ofActionCanceled(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, any>;
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just been completed
 */
export declare function ofActionCompleted(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, ActionCompletion>;
/**
 * RxJS operator for selecting out specific actions.
 *
 * This will ONLY grab actions that have just thrown an error
 */
export declare function ofActionErrored(...allowedTypes: ActionType[]): OperatorFunction<ActionContext, any>;
