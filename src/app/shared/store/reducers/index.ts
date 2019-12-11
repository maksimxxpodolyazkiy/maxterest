import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
  MetaReducer
} from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import { Collection } from "../../interfaces/collection.interface";
import * as fromCollections from "./collections";

export interface State {
  collections: fromCollections.State;
}

export const logger = (reducer: ActionReducer<State>): any => {
  return storeLogger()(reducer);
};

export function storage(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action): State => {
    const nextState = reducer(state, action);

    if (nextState) {
      localStorage.setItem(
        "collections",
        JSON.stringify(nextState.collections.collections)
      );
    }

    return nextState;
  };
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer
};

export const metaReducers: Array<MetaReducer<State>> = [logger, storage];

export const getCollectionsState = createFeatureSelector<fromCollections.State>(
  "collections"
);

export const getCollections = createSelector(
  getCollectionsState,
  fromCollections.getCollections
);

export const getSingleCollection = (
  id: number
): MemoizedSelector<State, Collection> => {
  return createSelector(getCollectionsState, state =>
    state.collections.find(coll => coll.id === id)
  );
};
