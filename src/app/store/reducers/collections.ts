import { Collection } from "src/app/interfaces/collection.interface";
import * as collectionsAction from "../actions/collections";

export interface State {
  collections: Collection[];
}

export const initialState: State = {
  collections: []
};

export function reducer(
  state = initialState,
  action: collectionsAction.Action
) {
  switch (action.type) {
    case collectionsAction.ADD_COLLECTION: {
      const newCollection: Collection = action.payload;

      return {
        ...state,
        collections: [...state.collections, newCollection]
      };
    }

    default:
      return state;
  }
}

// !!localStorage.getItem("collections")
//     ? JSON.parse(localStorage.getItem("collections"))
//     : []

export const getCollections = (state: State) => state.collections;
