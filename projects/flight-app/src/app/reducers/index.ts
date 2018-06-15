import { Increment } from './../actions/increment.actions';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  app: AppState;
}

export interface AppState {
  counter: number;
}

const initAppState: AppState = {
  counter: 0
}


export const reducers: ActionReducerMap<State> = {
  app: CounterReducer
};


export function CounterReducer(state: AppState = initAppState, action: Action): AppState {
  return { counter: state.counter +1 }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
