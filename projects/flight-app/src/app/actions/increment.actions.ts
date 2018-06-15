import { Action } from '@ngrx/store';

export enum IncrementActionTypes {
  LoadIncrements = '[Increment] Load Increments'
}

export class Increment implements Action {
  readonly type = IncrementActionTypes.LoadIncrements;
}

export type IncrementActions = Increment;
