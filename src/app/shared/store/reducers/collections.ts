import { Collection } from "../../interfaces/collection.interface";
import * as collectionsAction from "../actions/collections";

export interface State {
  collections: Collection[];
}

export const initialCollectionState: State = {
  collections: localStorage.getItem("collections")
    ? JSON.parse(localStorage.getItem("collections"))
    : []
};

export const reducer = (
  state = initialCollectionState,
  action: collectionsAction.Action
): State => {
  switch (action.type) {
    case collectionsAction.ADD_COLLECTION: {
      const newCollection: Collection = action.payload;

      return {
        ...state,
        collections: [...state.collections, newCollection]
      };
    }

    case collectionsAction.ADD_PHOTOS_TO_COLLECTION: {
      const newCollection = state.collections.find(
        coll => action.payload.id === coll.id
      );

      const idx = state.collections.findIndex(
        coll => coll.id === newCollection.id
      );

      newCollection.urls.push(...action.payload.urls);

      return {
        ...state,
        collections: [
          ...state.collections.slice(0, idx),
          newCollection,
          ...state.collections.slice(idx + 1)
        ]
      };
    }

    default:
      return state;
  }
};

export const getCollections = (state: State): Collection[] => state.collections;
