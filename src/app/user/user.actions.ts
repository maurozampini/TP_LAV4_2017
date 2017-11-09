import {Action} from '@ngrx/store';

export const CREATE = '[Post] Create';
export const RESET = '[Post] Reset';

export class Create implements Action {
    readonly type = CREATE;
    constructor( public payload: any) {}
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All
 = Create
 | Reset;
