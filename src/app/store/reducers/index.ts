import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import * as fromCollections from "./collections";

export interface State {
  collections: fromCollections.State;
}

export const logger = (reducer: ActionReducer<State>): any => {
  return storeLogger()(reducer);
};

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.reducer
};

export const metaReducers: MetaReducer<State>[] = [logger];

export const getCollectionsState = createFeatureSelector<fromCollections.State>(
  "collections"
);

export const getCollections = createSelector(
  getCollectionsState,
  fromCollections.getCollections
);

// export  const getSingleCollection = createSelector(
//   getCollectionsState,
//   fromCollections.getCollections
// )
